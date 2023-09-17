import React, { useEffect } from "react";
import LoginProcessIBMStyled from "../../styled/LoginProcessIBMStyled";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const LoginProcessIBM = () => {
    const [ searchParams ] = useSearchParams();
    const code = searchParams.get('code');
    const pkceVerifier = localStorage.getItem('PKCEVerifier');
    const navigator = useNavigate();

    const persistIbmUser = ({
        token, email, name
    }) => {
        const nameParts = name.split(" ");
        const firstName = nameParts[0];
        let lastName = nameParts[1];

        if (nameParts.length > 2) {
            for (let i = 3; i < nameParts.length; i++) {
                lastName += " " + nameParts[i];
            }
        }

        axios.post("http://localhost:8080/api/v1/login/ibm", {
            token: token,
            email: email,
            first_name: firstName,
            last_name: lastName
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            sessionStorage.setItem('Authorization-Token', response.data.data.token);
            sessionStorage.setItem('User', JSON.stringify(response.data.data.user));
    
            navigator("/home");
        }).catch(() => {
            navigator("/login");
        });
    }

    const getIbmUserInfo = (ibmToken) => {
        const headers = new Headers();
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Bearer ' + ibmToken)

        fetch('https://cors-anywhere.herokuapp.com/http://erlangga.verify.ibm.com/v1.0/endpoint/default/userinfo', {
            method: 'GET',
            headers: headers        
        }).then(response => response.json())
        .then(response => {
            const ibmUser = {
                token: ibmToken,
                email: response.preferred_username,
                name: response.name
            }

            persistIbmUser(ibmUser);
        });
    }

    useEffect(() => {
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        // TBD
        headers.append('X-Requested-With', 'XMLHttpRequest');

        const bodyEncoded = new URLSearchParams();
        bodyEncoded.append('code', code);
        bodyEncoded.append('grant_type', 'authorization_code');
        bodyEncoded.append('redirect_uri', 'http://localhost:3000/login/ibm');
        bodyEncoded.append('code_verifier', pkceVerifier);
        bodyEncoded.append('client_id', 'a528c79c-c897-4427-aba2-2fcb39d029f8');
        bodyEncoded.append('client_secret', 'c31STPpluW');

        // TBC
        fetch('https://cors-anywhere.herokuapp.com/https://erlangga.verify.ibm.com/v1.0/endpoint/default/token', {
            method: 'POST',
            headers: headers,
            body: bodyEncoded
        }).then(response => response.json())
        .then(response => {
            getIbmUserInfo(response.access_token);
        });
        
        localStorage.removeItem('PKCEVerifier')
    }, []);

    return (
        <>
             <LoginProcessIBMStyled>
                <div className="centered">
                    <p>Synchronizing stegZ with IBM Security Verify..</p>
                </div>
            </LoginProcessIBMStyled>
        </>
    )
}

export default LoginProcessIBM;
