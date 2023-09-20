import styled from "styled-components";

const DecodeImageStyled = styled.div`
margin: 1rem;
background-color: #fff;
color: #fff;

.drop-container {
    position: relative;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    padding: 20px;
    border-radius: 10px;
    border: 2px dashed #555;
    color: #070707;
    cursor: pointer;
    transition: background .2s ease-in-out, border .2s ease-in-out;
  }

  input {
    display: block;
    outline-style: auto;
    border-radius: 5px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    box-sizing: border-box;
}

canvas {
  max-width: 600px;
  max-height: 400px;
}
  
  .drop-container:hover {
    background: #070707;
    border-color: #111;
  }
  
  .drop-container:hover .drop-title {
    color: #070707;
  }
  
  p {
    color: black;
  }

  .drop-title {
    color: #070707;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    transition: color .2s ease-in-out;
  }

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  
  .hero__left {
    margin-bottom: 1rem;
  }

  .hero__right {
    max-width: 600px;
    max-height: 600px;
  }
  
  .hero__title {
    color: #161616;
    margin-bottom: 1rem;
    font-size: 3.44rem;
  }
  
  .hero__subtitle {
    color: #101010;
    margin-top: 1rem;
    font-size: 1.59rem;
  }
  
  .hero__description {
    color: #050505;
    margin-top: 1rem;
    font-size: 1.2rem;
  }
  
  button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    margin-top: 1rem;
    background-color: #161616;
    color: #fff;
    font-size: 1.2rem;
  }
  
  .hero__image {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }
  
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  
    section {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }
  
    .hero__left {
      flex-basis: 40%;
    }
  
    .hero__right {
      flex-basis: 60%;
    }
  }
`

export default DecodeImageStyled;
