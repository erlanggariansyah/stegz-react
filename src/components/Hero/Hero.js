import React from "react";
import { ReactComponent as HeroImage } from "../../assets/hero_img.svg"
import HeroStyled from "../../styled/HeroStyled";
import GeneralConstant from "../../utils/constants/general";

const Hero = () => {
    const onClikcLogin = () => {
        window.location.href = "/login";
    }

    return (
        <HeroStyled>
            <section>
                <div className="hero__left">
                    <p className="hero__title">{GeneralConstant.PROJECT_NAME}</p>
                    <p className="hero__subtitle">{GeneralConstant.PROJECT_DESCRIPTION_SHORT}</p>
                    <p className="hero__description">{GeneralConstant.PROJECT_DESCRIPTION}</p>
                    <button onClick={onClikcLogin}>{GeneralConstant.LOGIN}</button>
                </div>
                <div className="hero__right">
                    <HeroImage />
                </div>
            </section>
        </HeroStyled>
    )
}

export default Hero;
