import InsightDescriptionStyled from "../../styled/InsightDescriptionStyled";

const InsightDescription = (props) => {
    const { text } = props;

    return (
        <InsightDescriptionStyled>
            <p>{text}</p>
        </InsightDescriptionStyled>
    )
}

export default InsightDescription;
