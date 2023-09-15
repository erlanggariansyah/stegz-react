import HeadingStyled from "../../styled/HeadingStyled";

const Heading = (props) => {
    const { titleText, subtitleText } = props;

    return (
        <HeadingStyled>
            <p className="title">{titleText}</p>
            <p className="subtitle">{subtitleText}</p>
        </HeadingStyled>
    )
}

export default Heading;
