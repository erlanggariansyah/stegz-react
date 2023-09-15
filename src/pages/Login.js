import React from "react";
import Footer from "../components/Footer/Footer";
import LoginForm from "../components/LoginForm/LoginForm";
import Navbar from "../components/Navbar/Navbar";

const Login = ({ pkceVerifier, setPkceVerifier }) => {
    return (
        <>
            <Navbar />
            <LoginForm pkceVerifier={pkceVerifier} setPkceVerifier={setPkceVerifier} />
            <Footer />
        </>
    )
}

export default Login;
