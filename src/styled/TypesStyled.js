import styled from "styled-components";

const TypesStyled = styled.div`
.boxContainer {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 10rem;
    justify-content: center;
}

.box {
    text-align: center;
    margin: 1rem;
    flex-basis: calc(33.33% - 2rem);
}
`

export default TypesStyled;
