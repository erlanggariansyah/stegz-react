import React from "react";
import HeadingMenuStyled from "../../styled/HeadingMenuStyled";

const HeadingMenu = (props) => {
    const { titleText, subtitleText } = props;

    return (
        <HeadingMenuStyled>
            <p className="title">{titleText}</p>
            <p className="subtitle">{subtitleText}</p>
        </HeadingMenuStyled>
    )
}

export default HeadingMenu;
