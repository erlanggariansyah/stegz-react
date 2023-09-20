import React from "react";
import SignedInFooter from "../components/SignedInFooter/SignedInFooter";
import SignedInNavbar from "../components/SignedInNavbar/SignedInNavbar";
import SignedInBillingComponent from "../components/SignedInBilling/SignedInBilling";

const SignedInBilling = () => {
    return (
        <>
            <SignedInNavbar/>
            <SignedInBillingComponent />
            <SignedInFooter />
        </>
    )
}

export default SignedInBilling;
