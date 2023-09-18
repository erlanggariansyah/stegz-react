import React from "react";
import SignedInFooterStyled from "../../styled/SignedInFooterStyled";
import GeneralConstant from "../../utils/constants/general";

const SignedInFooter = () => {
    return (
        <SignedInFooterStyled>
            <div className="footer-container">
                <footer>
                    <div className="footer-content">
                        <p className="footer__title">{GeneralConstant.PROJECT_NAME}</p>
                        <p className="footer__author">{GeneralConstant.PROJECT_CREDIT}</p>
                    </div>
                </footer>
            </div>
        </SignedInFooterStyled>
    )
}


export default SignedInFooter;
