import React from "react";
import ItemBoxStyled from "../../styled/ItemBoxStyled";

const ItemBox = (props) => {
    const { titleText } = props;

    return (
        <ItemBoxStyled>
            <p className="title">{titleText}</p>
        </ItemBoxStyled>
    )
}

export default ItemBox;
