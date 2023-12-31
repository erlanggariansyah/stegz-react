import React from "react";
import SignedInNavbarStyled from "../../styled/SignedInNavbarStyled";
import ItemListStyled from "../../styled/ItemListStyled";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignedInNavbar = () => {
    const navigator = useNavigate();

    const handleClickLogout = () => {
        axios.post("http://localhost:8080/api/v1/logout", {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('Authorization-Token')
            }
        }).then(() => {
            sessionStorage.removeItem('Authorization-Token');
            sessionStorage.removeItem('User');
            localStorage.removeItem('PKCEVerifier');
    
            navigator("/");
        });
    }

    const handleClickMySession = () => {
        navigator("/sessions");
    }

    const handleClickTitle = () => {
        navigator("/home");
    }

    const handleClickMyBilling = () => {
        navigator("/billings")
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
                        <a onClick={handleClickTitle}>Home</a>
                    </li>
                    <li>
                        <a onClick={handleClickMySession}>My Session</a>
                    </li>
                    <li>
                        <a onClick={handleClickMyBilling}>My Billing</a>
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
