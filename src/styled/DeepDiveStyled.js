import styled from "styled-components";

const DeepDiveStyled = styled.div`
.boxContainer {
    display: flex;
    flex-direction: row;
    padding: 2rem 10rem 2rem 10rem;
    justify-content: center;
}

@media(min-width: 992px) {
    .boxContainer {
        flex-direction: row;
    }
}

@media(min-width: 768px) {
    .boxContainer {
        flex-direction: row;
    }
}

@media(max-width: 768px) {
    .boxContainer {
        flex-direction: column;
    }
}

.box {
    text-align: center;
    margin: 1rem;
}
`

export default DeepDiveStyled;
