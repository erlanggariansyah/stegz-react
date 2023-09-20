import React, { useRef, useEffect, useState } from "react";
import DecodeImageStyled from "../../../styled/DecodeImageStyled";
import Heading from "../../Heading/Heading";
import axios from "axios";

const DecodeImage = () => {
  const decodeCanvasRef = useRef(null);
  const imageCanvasRef = useRef(null);
  const imageLoaderRef = useRef(null);

  useEffect(() => {
    const decodeCanvas = decodeCanvasRef.current;
    const imageCanvas = imageCanvasRef.current;
    const dctx = decodeCanvas.getContext("2d");
    const imgctx = imageCanvas.getContext("2d");

    const handleImageDecode = (e) => {
        axios.post("http://localhost:8080/api/v1/billings/usage", {
            action: 'Decode Image',
            price: '4000'
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('Authorization-Token')
            }
        });

      let reader = new FileReader();
      reader.onload = function (event) {
        let img = new Image();
        img.onload = function () {
          decodeCanvas.width = img.width;
          decodeCanvas.height = img.height;
          imageCanvas.width = img.width;
          imageCanvas.height = img.height;
          dctx.drawImage(img, 0, 0);
          imgctx.drawImage(img, 0, 0);

          let decodeData = dctx.getImageData(0, 0, decodeCanvas.width, decodeCanvas.height);
          let decodedText = "";

          for (let i = 0; i < decodeData.data.length; i += 4) {
            if (decodeData.data[i + 1] % 10 === 7) {
              decodeData.data[i] = 0;
              decodeData.data[i + 1] = 0;
              decodeData.data[i + 2] = 0;
              decodeData.data[i + 3] = 255;
            } else {
              decodeData.data[i + 3] = 0;
            }
          }

          dctx.putImageData(decodeData, 0, 0);

          let messageCanvas = document.createElement("canvas");
          messageCanvas.width = decodeCanvas.width;
          messageCanvas.height = decodeCanvas.height;
          let mctx = messageCanvas.getContext("2d");

          let imgData = dctx.getImageData(0, 0, decodeCanvas.width, decodeCanvas.height);
          let pixelsInMsg = 0;

          for (let i = 0; i < imgData.data.length; i += 4) {
            if (imgData.data[i + 1] % 10 === 7) {
            } else if (imgData.data[i + 1] > 247) {
              imgData.data[i + 1] = 247;
            } else {
              while (imgData.data[i + 1] % 10 !== 7) {
                imgData.data[i + 1]++;
              }
            }

            if (decodeData.data[i + 1] % 10 === 7) {
              decodedText += String.fromCharCode(247);
            } else {
              decodedText += String.fromCharCode(decodeData.data[i + 1]);
            }

            pixelsInMsg++;
          }

          for (let i = 0; i < imgData.data.length; i += 4) {
            if (imgData.data[i + 1] % 10 === 7) {
              imgData.data[i] = 0;
              imgData.data[i + 1] = 0;
              imgData.data[i + 2] = 0;
              imgData.data[i + 3] = 255;
            } else {
              imgData.data[i + 3] = 0;
            }
          }

          mctx.putImageData(imgData, 0, 0);
        };

        img.src = event.target.result;
      };

      reader.readAsDataURL(e.target.files[0]);
    };

    const imageLoaderElement = imageLoaderRef.current;

    if (imageLoaderElement) {
      imageLoaderElement.addEventListener("change", handleImageDecode, false);
    }

    return () => {
      if (imageLoaderElement) {
        imageLoaderElement.removeEventListener("change", handleImageDecode, false);
      }
    };
  }, []);

  return (
    <DecodeImageStyled>
      <Heading titleText={"Decode"} subtitleText={"And decode it."} />
      <section>
        <div className="hero__left">
          <label htmlFor="imageLoader" className="drop-container" id="dropcontainer">
            <span className="drop-title">Your file here</span>
            <input type="file" id="imageLoader" accept="image/*" required ref={imageLoaderRef} />
          </label>
        </div>
        <div className="hero__right">
          <canvas id="imageCanvas" ref={imageCanvasRef}></canvas>
        </div>
      </section>
      <p>Result decoded message:</p>
      <canvas id="decodeCanvas" ref={decodeCanvasRef}></canvas>
    </DecodeImageStyled>
  );
};

export default DecodeImage;
