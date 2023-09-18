import styled from "styled-components";

const SignedInUserInformationStyled = styled.div`
margin: 1rem;
background-color: #fff;
color: #fff;
  
  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  
  .hero__left {
    margin-bottom: 1rem;
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
      // align-items: center;
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

export default SignedInUserInformationStyled;
