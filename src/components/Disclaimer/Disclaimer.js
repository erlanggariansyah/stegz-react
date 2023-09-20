import React from "react";
import DisclaimerStyled from "../../styled/DisclaimerStyled";
import Heading from "../Heading/Heading";
import InsightDescription from "../InsightDescription/InsightDescription";

const Disclaimer = ({ title, description, text }) => {
    return (
        <DisclaimerStyled>
            <Heading titleText={title} subtitleText={description}/>
            <InsightDescription text={text} />
        </DisclaimerStyled>
    )
}

export default Disclaimer;
