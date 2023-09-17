import React from "react";
import SignedInFooter from "../components/SignedInFooter/SignedInFooter";
import SignedInNavbar from "../components/SignedInNavbar/SignedInNavbar";
import SignedInSessionComponent from "../components/SignedInSession/SignedInSession";

const SignedInSession = () => {
    return (
        <>
            <SignedInNavbar/>
            <SignedInSessionComponent />
            <SignedInFooter />
        </>
    )
}

export default SignedInSession;
