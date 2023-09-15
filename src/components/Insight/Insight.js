import React from "react";
import InsightStyled from "../../styled/InsightStyled";
import Heading from "../Heading/Heading";
import InsightDescription from "../InsightDescription/InsightDescription";

const Insight = (props) => {
    const { title, description, text } = props;

    return (
        <InsightStyled>
            <Heading titleText={title} subtitleText={description}/>
            <InsightDescription text={text} />
        </InsightStyled>
    )
}

export default Insight;
