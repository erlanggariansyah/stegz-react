import { Link } from "react-router-dom";
import ItemListStyled from "../../styled/ItemListStyled";

const ItemList = () => {
    return (
        <ItemListStyled>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="https://www.ibm.com/us-en">IBM</a>
                </li>
                <li>
                    <a href="https://www.ibm.com/products/verify-identity">Security Verify</a>
                </li>
                <li>
                    <a href="https://www.infinitelearning.id/">Infinite Learning</a>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </ItemListStyled>
    )
}

export default ItemList;
