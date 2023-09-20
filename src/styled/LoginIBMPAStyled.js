import styled from "styled-components";

const LoginIBMPAStyled = styled.div`
.container {
    margin: 1rem;
    padding: 2rem 10rem 2rem 10rem;
}

section {
    display: flex;
    margin: 20px 0 20px 0;
}

.link {
    color: blue;
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

.login-ibm {
  display: flex;
}

.register {
  margin: 2.5% 0;
}
  
.form {
    display: flex;
    flex-direction: column;
    text-align: center;
}

  .form__field {
    display: block;
    margin-bottom: 10px;
  }
  
  .form__left {
    margin-bottom: 1rem;
    padding-right: 2rem;
  }
  
  .form__right {
    margin-bottom: 1rem;
    padding-left: 2rem;
  }
  
  .form__title {
    text-align: center;
    color: #161616;
    margin-bottom: 3rem;
    font-size: 2.44rem;
  }
  
  label {
    color: black;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #161616;
    color: #fff;
    box-sizing: border-box;
    width: 100%;
  }
  
  .form__image {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  .error_text {
    color: red;
  }

  .red_outline {
    outline-color: red;
  }
  
  @media (min-width: 768px) {
    .container {
        flex-direction: column;
    }
  }

  @media (min-width: 992px) {
    .container {
        max-width: 1200px;
        margin: 3rem auto;
    }
  
    .form__left {
      flex-basis: 60%;
      margin-right: 0.5rem;
    }
  
    .form__right {
      flex-basis: 60%;
      margin-left: 0.5rem
    }
  }
`

export default LoginIBMPAStyled;
