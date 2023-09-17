import styled from "styled-components";

const SignedInFooterStyled = styled.div`
background-color: #161616;
color: #fff;
padding: 2rem 10rem 2rem 10rem;

footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
  
.footer__title {
    margin-bottom: 0;
    font-size: 2rem;
}
  
.footer__author {
    margin-bottom: 1rem;
    margin-top: 0   ;
    font-size: 1.2rem;
}

@media (max-width: 768px) {
    footer {
        flex-direction: column;
    }
}
`

export default SignedInFooterStyled;
