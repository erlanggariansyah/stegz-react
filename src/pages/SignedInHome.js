import React from "react";
import SignedInFooter from "../components/SignedInFooter/SignedInFooter";
import SignedInNavbar from "../components/SignedInNavbar/SignedInNavbar";
import HeadingMenu from "../components/HeadingMenu/HeadingMenu";
import SignedInUserInformation from "../components/SignedInUserInformation/SignedInUserInformation";

const SignedInHome = () => {
    const user = JSON.parse(sessionStorage.getItem('User'));

    return (
        <>
            <SignedInNavbar/>
            <SignedInUserInformation />
            <SignedInFooter />
        </>
    )
}

export default SignedInHome;
