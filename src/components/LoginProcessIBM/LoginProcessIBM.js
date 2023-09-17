import React, { useEffect, useState } from "react";
import LoginProcessIBMStyled from "../../styled/LoginProcessIBMStyled";
import { useSearchParams } from "react-router-dom";

const LoginProcessIBM = () => {
    const [ loading, setLoading ] = useState(false);
    const [ searchParams ] = useSearchParams();
    const code = searchParams.get('code');
    const pkceVerifier = localStorage.getItem('PKCEVerifier');

    useEffect(() => {
        setLoading(true);

        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        // TBD
        // headers.append('X-Requested-With', 'XMLHttpRequest');

        const bodyEncoded = new URLSearchParams();
        bodyEncoded.append('code', code);
        bodyEncoded.append('grant_type', 'authorization_code');
        bodyEncoded.append('redirect_uri', 'http://localhost:3000/login/ibm');
        bodyEncoded.append('code_verifier', pkceVerifier);
        bodyEncoded.append('client_id', 'a528c79c-c897-4427-aba2-2fcb39d029f8');
        bodyEncoded.append('client_secret', 'c31STPpluW');

        // TBC
        fetch('https://erlangga.verify.ibm.com/v1.0/endpoint/default/token', {
            method: 'POST',
            headers: headers,
            body: bodyEncoded
        }).then(response => response.json())
        .then(response => {
            console.log(response.access_token)
        });
        
        localStorage.removeItem('PKCEVerifier')
    }, []);

    return (
        <>
             <LoginProcessIBMStyled>
             <div className="container">
                { loading ? <div className="spinner" /> : (
                        <>
                            <p>code: {code}</p>
                        </>
                    )
                }
             </div>
            </LoginProcessIBMStyled>
        </>
    )
}

export default LoginProcessIBM;
