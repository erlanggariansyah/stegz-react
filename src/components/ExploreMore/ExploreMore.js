import ExploreMoreStyled from "../../styled/ExploreMoreStyled";
import Heading from "../Heading/Heading";
import LoginForm from "../LoginForm/LoginForm";

const ExploreMore = (props) => {
    const { title, description } = props;

    return (
        <ExploreMoreStyled>
            <Heading titleText={title} subtitleText={description} />
            <LoginForm />
        </ExploreMoreStyled>
    )
}

export default ExploreMore;
