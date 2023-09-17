import React from "react";
import SignedInFooterStyled from "../../styled/SignedInFooterStyled";
import GeneralConstant from "../../utils/constants/general";

const SignedInFooter = () => {
    return (
        <SignedInFooterStyled>
            <footer>
                <div>
                    <p className="footer__title">{GeneralConstant.PROJECT_NAME}</p>
                    <p className="footer__author">{GeneralConstant.PROJECT_CREDIT}</p>
                </div>
            </footer>
        </SignedInFooterStyled>
    )
}

export default SignedInFooter;
