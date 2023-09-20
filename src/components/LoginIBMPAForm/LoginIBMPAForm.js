import React from "react";
import { useState } from "react";
import { ReactComponent as ImageLogin } from "../../assets/hero_img_ibm_logo.svg"
import LoginIBMPAStyled from "../../styled/LoginIBMPAStyled";
import GeneralConstant from "../../utils/constants/general";
import axios from "axios";
import Endpoint from "../../utils/constants/endpoint";
import { useNavigate } from "react-router-dom";

const LoginIBMPAForm = () => {
    const [ formData, setFormData ] = useState({ ibmid: "", password: "" })

    const [ ibmidNull, setIbmidNull ] = useState(false);

    const [ passwordNull, setPasswordNull ] = useState(false);
    const [ validCredential, setValidCredential ] = useState(true);

    const [ alreadySignedIn, setAlreadySignedIn ] = useState(false);

    const navigator = useNavigate();
    const authorizationToken = sessionStorage.getItem('Authorization-Token');

    const validate = () => {
        if (formData.ibmid === "") {
            setIbmidNull(true);
            return false;
        } else if (formData.password === "") { 
            setPasswordNull(true);
            return false;
        }

        return true;
    }

    const handleClick = (e) => {
        e.preventDefault()

        validate()
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleClickLogin = () => {
        if (authorizationToken != null) {
            setAlreadySignedIn(true);
        } else {
            if (!ibmidNull && !passwordNull) {
                window.location = "https://login.ibm.com/usc/";
            }
        }
    }

    const handleChangeIbmid = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleClickCreateIBMid = () => {
        window.location = "https://www.ibm.com/account/us-en/signup/register.html";
    }

    return (
        <LoginIBMPAStyled>
            <div className="container">
                <section>
                    <div className="form__left">
                        <ImageLogin />
                    </div>
                    <div className="form__right">
                        <h2 className="form__title">Login with IBMid</h2>
                        { alreadySignedIn ? <p className="error_text">Already signed in.</p> : null }
                        <div>
                            <form onSubmit={handleClick}>
                                <div className="form__field">
                                    <label>{GeneralConstant.FORM_LABEL_IBM_ID}</label>
                                    { ibmidNull && !alreadySignedIn ? <p className="error_text">IBMid must be filled in.</p> : null }
                                    <input id="ibmid" className={ ibmidNull ? 'red_outline' : null } value={formData.ibmid} type="text" name="ibmid" onChange={handleChangeIbmid} />
                                </div>
                                <div className="form__field">
                                    <label>{GeneralConstant.FORM_LABEL_PASSWORD}</label>
                                    { passwordNull && !alreadySignedIn ? <p className="error_text">Password must be filled in.</p> : null }
                                    <input id="password" className={ passwordNull ? 'red_outline' : null } value={formData.password} type="password" name="password" onChange={handleChange} />
                                </div>
                                { !validCredential ? <p className="error_text">Wrong credentials.</p> : null }
                                <div>
                                    <button type="submit" onClick={handleClickLogin}>Login</button>
                                </div>
                            </form>
                            <div>
                                <p>Don't have an IBM account? <a className="link" onClick={handleClickCreateIBMid}>Create an IBMid.</a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </LoginIBMPAStyled>
    )
}

export default LoginIBMPAForm;
