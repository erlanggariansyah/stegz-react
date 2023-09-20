import styled from "styled-components";

const PricingStyled = styled.div`
  .form__field {
    display: block;
    margin-bottom: 1%;
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
  
  label {
    color: black;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  input {
    display: block;
    outline-style: auto;
    border-radius: 5px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 1%;
    margin-bottom: 1%;
    box-sizing: border-box;
}

table, td, tr, th {
    border: 1px solid gray;
    text-align: center;
}

table {
    width: 100%;
    border-collapse: collapse;
}

.tableContainer {
    display: block  ;
    padding: 2rem 10rem 10rem 10rem;
    overflow-x: auto;
}

th {
    color: #101010;
    border-color: gray;
    padding: 2rem;
    font-size: 1.25rem;
}

td {
    padding: 1.5rem;
    font-size: 1rem;
}
`

export default PricingStyled;
