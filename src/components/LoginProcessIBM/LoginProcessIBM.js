import React, { useEffect, useState } from "react";
import LoginProcessIBMStyled from "../../styled/LoginProcessIBMStyled";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const LoginProcessIBM = ({ pkceVerifier, setPkceVerifier }) => {
    const [ loading, setLoading ] = useState(false);
    const [ searchParams ] = useSearchParams();
    const code = searchParams.get('code');
    // const grant_id = searchParams.get('grant_id');

    // useEffect(() => {
    //     setLoading(true);
    //     axios.post('https://erlangga.verify.ibm.com/v1.0/endpoint/default/token', {
    //         code: code,
    //         grant_type: 'authorization_code',
    //         redirect_uri: 'http://localhost:3000/login/ibm/success',
    //         code_verifier: pkceVerifier
    //     }).then((response) => {
    //         console.log(response.data)
    //     }).catch((error) => {
    //         setLoading(false);
    //         console.log(pkceVerifier);
    //         console.log(error.message);
    //     })
    // }, []);

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
