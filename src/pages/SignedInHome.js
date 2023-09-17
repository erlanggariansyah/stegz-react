import React from "react";
import SignedInFooter from "../components/SignedInFooter/SignedInFooter";
import SignedInNavbar from "../components/SignedInNavbar/SignedInNavbar";

const SignedInHome = () => {
    const user = JSON.parse(sessionStorage.getItem('User'));

    return (
        <>
            <SignedInNavbar/>
            <div>
                <p>{user.first_name}</p>
            </div>
            <SignedInFooter />
        </>
    )
}

export default SignedInHome;
