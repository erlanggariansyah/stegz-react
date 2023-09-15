import React from "react";
import LoginProcessIBMComponent from "../components/LoginProcessIBM/LoginProcessIBM";

const LoginProcessIBM = ({ pkceVerifier, setPkceVerifier }) => {
    return (
        <>
            <LoginProcessIBMComponent pkceVerifier={pkceVerifier} setPkceVerifier={setPkceVerifier} />
        </>
    )
}

export default LoginProcessIBM;
