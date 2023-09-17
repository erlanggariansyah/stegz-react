import React from "react";
import SignedInNavbarStyled from "../../styled/SignedInNavbarStyled";
import ItemListStyled from "../../styled/ItemListStyled";
import { useNavigate } from "react-router-dom";

const SignedInNavbar = () => {
    const navigator = useNavigate();
    const user = JSON.parse(sessionStorage.getItem('User'));

    const handleClickLogout = () => {
        sessionStorage.removeItem('Authorization-Token');
        sessionStorage.removeItem('User');
        localStorage.removeItem('PKCEVerifier');

        navigator("/");
    }

    return (
        <SignedInNavbarStyled>
            <nav>
                <div>
                    <h1>IBM stegZ</h1>
                </div>
                <ItemListStyled>
                <ul>
                    <li>
                        <a>{`Hi, ${user.first_name}!`}</a>
                    </li>
                    <li>
                        <a onClick={handleClickLogout}>Logout</a>
                    </li>
                </ul>
                </ItemListStyled>
            </nav>
        </SignedInNavbarStyled>    
    )
}

export default SignedInNavbar;
