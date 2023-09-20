import React from "react";
import SignedInFooter from "../components/SignedInFooter/SignedInFooter";
import SignedInNavbar from "../components/SignedInNavbar/SignedInNavbar";
import SignedInUserInformation from "../components/SignedInUserInformation/SignedInUserInformation";
import EncodeImage from "../components/Steganography/EncodeImage/EncodeImage";
import DecodeImage from "../components/Steganography/DecodeImage/DecodeImage";
import Disclaimer from "../components/Disclaimer/Disclaimer";

const SignedInHome = () => {
    const user = JSON.parse(sessionStorage.getItem('User'));

    return (
        <>
            <SignedInNavbar/>
            <SignedInUserInformation />
            <EncodeImage />
            <DecodeImage />
            <Disclaimer title={"Disclaimer"} description={"is this service from IBM?"} text={"This service is an IBM service simulation project as a requirement for completing capstone project assignments which was created without the knowledge, permission or involvement of IBM officials. All services are created with no intention of causing harm and only serve educational purposes."} />
            <SignedInFooter />
        </>
    )
}

export default SignedInHome;
