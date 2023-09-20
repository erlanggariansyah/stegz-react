import React from "react";
import Footer from "../components/Footer/Footer";
import LoginIBMPAForm from "../components/LoginIBMPAForm/LoginIBMPAForm";
import Navbar from "../components/Navbar/Navbar";

const LoginIBMPA = () => {
    return (
        <>
            <Navbar />
            <LoginIBMPAForm />
            <Footer />
        </>
    )
}

export default LoginIBMPA;
