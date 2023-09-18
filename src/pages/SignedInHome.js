import React from "react";
import SignedInFooter from "../components/SignedInFooter/SignedInFooter";
import SignedInNavbar from "../components/SignedInNavbar/SignedInNavbar";
import HeadingMenu from "../components/HeadingMenu/HeadingMenu";

const SignedInHome = () => {
    const user = JSON.parse(sessionStorage.getItem('User'));

    return (
        <>
            <SignedInNavbar/>
            <HeadingMenu titleText={"Home"} subtitleText={"/ Home"} />
            <SignedInFooter />
        </>
    )
}

export default SignedInHome;
