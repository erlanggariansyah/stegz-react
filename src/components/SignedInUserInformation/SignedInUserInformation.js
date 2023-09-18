import React from "react";
import { ReactComponent as HeroImage } from "../../assets/hero_img_time.svg"
import SignedInUserInformationStyled from "../../styled/SignedInUserInformationStyled";

const SignedInUserInformation = () => {
    const user = JSON.parse(sessionStorage.getItem('User'));

    return (
        <SignedInUserInformationStyled>
            <section>
                <div className="hero__left">
                    <p className="hero__title">{`Hi, ${user.first_name}!`}</p>
                    <p className="hero__subtitle">Steganography is interesting, but unfortunately I don't have much time.</p>
                    <p className="hero__description">The stegZ project was created specifically as a completion of the IBM Hybrid Cloud & AI Capstone Project which has a duration of 3 weeks. With such a short time, it is difficult for me to complete this project completely on time. Therefore, I only worked on the part related to IBM Security Verify, and the rest will probably be developed someday.</p>
                </div>
                <div className="hero__right">
                    <HeroImage />
                </div>
            </section>
        </SignedInUserInformationStyled>
    )
}

export default SignedInUserInformation;
