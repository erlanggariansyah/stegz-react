import React from "react";
import DoubleItemBoxStyled from "../../styled/DoubleItemBoxStyled";

const DoubleItemBox = (props) => {
    const { name } = props;

    return (
        <DoubleItemBoxStyled>
            <p className="title">{name}</p>
        </DoubleItemBoxStyled>
    )
}

export default DoubleItemBox;
