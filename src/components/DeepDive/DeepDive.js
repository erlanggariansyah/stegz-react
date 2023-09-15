import React from "react";
import DeepDiveStyled from "../../styled/DeepDiveStyled";
import Heading from "../Heading/Heading";
import InsightDescription from "../InsightDescription/InsightDescription";
import ItemBox from "../ItemBox/ItemBox";

const DeepDive = (props) => {
    const { title, description, descriptionLong, data } = props;
    const boxes = [];

    for (let i = 0; i < data.length; i++) {
        boxes.push(
            <div className="box">
                <ItemBox titleText={data[i]} />
            </div>
        )
    }

    return (
        <DeepDiveStyled>
            <Heading titleText={title} subtitleText={description} />
            <InsightDescription text={descriptionLong} />
            <div className="boxContainer">
                {boxes}
            </div>
        </DeepDiveStyled>
    )
}

export default DeepDive;
