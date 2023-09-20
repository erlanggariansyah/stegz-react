import React from "react";
import { useState } from "react";
import { ReactComponent as ImageLogin } from "../../assets/hero_img_login.svg"
import LoginFormStyled from "../../styled/LoginFormStyled";
import GeneralConstant from "../../utils/constants/general";
import axios from "axios";
import Endpoint from "../../utils/constants/endpoint";
import { useNavigate } from "react-router-dom";
import CryptoUtil from "../../utils/helper/CryptoUtil";

const LoginForm = () => {
    const [ formData, setFormData ] = useState({ email: "", password: "" })

    const [ emailNull, setEmailNull ] = useState(false);
    const [ validEmail, setValidEmail ] = useState(true);
    const [ emailChangeCounter, setEmailChangeCounter ] = useState(0);

    const [ passwordNull, setPasswordNull ] = useState(false);
    const [ validCredential, setValidCredential ] = useState(true);

    const [ alreadySignedIn, setAlreadySignedIn ] = useState(false);

    const navigator = useNavigate();
    const authorizationToken = sessionStorage.getItem('Authorization-Token');
    const cryptoUtil = CryptoUtil();

    const validate = () => {
        if (formData.email === "") {
            setEmailNull(true);
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

    const handleLoginIBM = () => {
        navigator("/login/ibm/pa");
    }
    
    const handleSSOIBM = (e) => {
        if (authorizationToken != null) {
            setAlreadySignedIn(true);
        } else {
            const verifier = cryptoUtil.PKCEVerifier;
            const codeChallenge = cryptoUtil.PKCEChallenge;

            localStorage.setItem('PKCEVerifier', verifier);
            window.location = `https://erlangga.verify.ibm.com/v1.0/endpoint/default/authorize?client_id=a528c79c-c897-4427-aba2-2fcb39d029f8&response_type=code&redirect_uri=http://localhost:3000/login/ibm&code_challenge=${codeChallenge}&code_challenge_method=S256`;
        }
    }

    const handleClickRegister = () => {
        window.location = "/register";
    }

    const handleClickLogin = () => {
        if (authorizationToken != null) {
            setAlreadySignedIn(true);
        } else {
            if (validEmail && !emailNull && !passwordNull) {
                axios.post(Endpoint.LOGIN, {
                    email: formData.email,
                    password: formData.password
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((response) => {
                    sessionStorage.setItem('Authorization-Token', response.data.data.token);
                    sessionStorage.setItem('User', JSON.stringify(response.data.data.user));
    
                    navigator("/home");
                }).catch(() => {
                    setValidCredential(false);
                });
            }
        }
    }

    const handleChangeEmail = (e) => {
        const { name, value } = e.target;

        if (value.indexOf('@') === -1 || value.indexOf('.') === -1 || value.length <= 5) {
            setValidEmail(false)
        } else {
            setEmailChangeCounter(0)
            setValidEmail(true)
        }

        if (!validEmail) setEmailChangeCounter(emailChangeCounter + 1);

        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <LoginFormStyled>
            <div className="container">
                <section>
                    <div className="form__left">
                        <ImageLogin />
                    </div>
                    <div className="form__right">
                        <h2 className="form__title">Login</h2>
                        { alreadySignedIn ? <p className="error_text">Already signed in.</p> : null }
                        <div>
                            <form onSubmit={handleClick}>
                                <div className="form__field">
                                    <label>{GeneralConstant.FORM_LABEL_EMAIL}</label>
                                    { emailNull && !alreadySignedIn ? <p className="error_text">Email must be filled in.</p> : null }
                                    {
                                        !validEmail && emailChangeCounter <= 20 ? <p className="error_text">Not a valid email.</p> :
                                        (!validEmail && emailChangeCounter <= 40 ? <p className="error_text">Still not a valid email.</p> :
                                        (!validEmail && emailChangeCounter > 40 ? <p className="error_text">Need help? read this article: <a href="https://en.wikipedia.org/wiki/Email_address">email address definition & format.</a></p> : null))
                                    }
                                    <input id="email" className={ !validEmail || emailNull ? 'red_outline' : null } value={formData.email} type="text" name="email" onChange={handleChangeEmail} />
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
                                <p>Already have an IBM account?</p>
                                <div className="login-ibm">
                                    <button onClick={handleLoginIBM}>Login with IBMid</button>
                                    <button onClick={handleSSOIBM}>IBM SSO</button>
                                </div>
                            </div>
                            <div className="register">
                                <button onClick={handleClickRegister}>Register</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </LoginFormStyled>
    )
}

export default LoginForm;
