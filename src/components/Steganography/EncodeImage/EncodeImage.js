import React, { useRef, useState, useEffect } from "react";
import EncodeImageStyled from "../../../styled/EncodeImageStyled";
import Heading from "../../Heading/Heading";
import axios from "axios";

const EncodeImage = () => {
  const imageLoaderRef = useRef(null);
  const canvasRef = useRef(null);
  const textCanvasRef = useRef(null);
  const messageInputRef = useRef(null);

  const [pixelsInMsg, setPixelsInMsg] = useState(0);
  const [pixelsOutMsg, setPixelsOutMsg] = useState(0);

  useEffect(() => {
    const imageLoader = imageLoaderRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const textCanvas = textCanvasRef.current;
    const tctx = textCanvas.getContext("2d");

    const handleClickEncode = (e) => {
      axios.post("http://localhost:8080/api/v1/billings/usage", {
        action: 'Encode Image',
        price: '14800'
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem('Authorization-Token')
        }
      })

      let reader = new FileReader();
      reader.onload = function (event) {
        let img = new Image();
        img.onload = function () {
          canvas.width = img.width;
          canvas.height = img.height;

          textCanvas.width = img.width;
          textCanvas.height = img.height;
          tctx.font = "30px Arial";
          
          let messageText = messageInputRef.current.value;
          
          tctx.fillText(messageText, 10, 50);
          ctx.drawImage(img, 0, 0);
          
          let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          let textData = tctx.getImageData(0, 0, canvas.width, canvas.height);

          for (let i = 0; i < textData.data.length; i += 4) {
            if (textData.data[i + 3] !== 0) {
              if (imgData.data[i + 1] % 10 === 7) {
              } else if (imgData.data[i + 1] > 247) {
                imgData.data[i + 1] = 247;
              } else {
                while (imgData.data[i + 1] % 10 !== 7) {
                  imgData.data[i + 1]++;
                }
              }

              setPixelsInMsg((prev) => prev + 1);
            } else {
              if (imgData.data[i + 1] % 10 === 7) {
                imgData.data[i + 1]--;
              }

              setPixelsOutMsg((prev) => prev + 1);
            }
          }

          ctx.putImageData(imgData, 0, 0);
        };

        img.src = event.target.result;
      };

      reader.readAsDataURL(e.target.files[0]);
    };

    imageLoader.addEventListener("change", handleClickEncode, false);
    return () => {
      imageLoader.removeEventListener("change", handleClickEncode, false);
    };
  }, [pixelsInMsg, pixelsOutMsg]);

  return (
    <EncodeImageStyled>
      <Heading titleText={"Encode"} subtitleText={"Put secret information into an image."} />
      <section>
        <div className="hero__left">
          <p>Message:</p>
          <input type="password" id="message" ref={messageInputRef} />
          <br/>
          <label htmlFor="imageLoader" className="drop-container" id="dropcontainer">
            <span className="drop-title">Your file here</span>
            <input type="file" id="imageLoader" accept="image/*" required ref={imageLoaderRef} />
          </label>
        </div>
        <div className="hero__right">
          <canvas id="imageCanvas" ref={canvasRef}></canvas>
        </div>
      </section>
      <p>Result decoded message:</p>
      <canvas id="textCanvas" ref={textCanvasRef}></canvas>
    </EncodeImageStyled>
  );
};

export default EncodeImage;
