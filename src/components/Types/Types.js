import TypesStyled from "../../styled/TypesStyled";
import DoubleItemBox from "../DoubleItemBox/DoubleItemBox";
import Heading from "../Heading/Heading";

const Types = (props) => {
    const { data } = props;
    const boxes = [];

    for (let i = 0; i < data.length; i++) {
        boxes.push(
            <div className="box">
                <DoubleItemBox name={data[i]} />
            </div>
        )
    }

    return (
        <TypesStyled>
            <Heading titleText={props.title} subtitleText={props.description}/>
            <div className="boxContainer">
                {boxes}
            </div>
        </TypesStyled>
    )
}

export default Types;
