import React from "react";
import { useState } from "react";
import { ReactComponent as ImageLogin } from "../../assets/hero_img_login.svg"
import LoginFormStyled from "../../styled/LoginFormStyled";
import GeneralConstant from "../../utils/constants/general";
import CryptoJS from "crypto-js";
import axios from "axios";
import Endpoint from "../../utils/constants/endpoint";

const LoginForm = ({ pkceVerifier, setPkceVerifier }) => {
    const [ formData, setFormData ] = useState({ email: "", password: "" })
    const [ emailNull, setEmailNull ] = useState(false);
    const [ passwordNull, setPasswordNull ] = useState(false);
    const [ validCredential, setValidCredential ] = useState(true);

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
    
    const base64URLEncode = (str) => {
        return str.toString(CryptoJS.enc.Base64)
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=/g, '');
    };

    var verifier = base64URLEncode(CryptoJS.lib.WordArray.random(32));    
    var codeChallenge = base64URLEncode(CryptoJS.SHA256(verifier));

    const handleLoginIBM= (e) => {
        setPkceVerifier(verifier);
        window.location = `https://erlangga.verify.ibm.com/v1.0/endpoint/default/authorize?client_id=a528c79c-c897-4427-aba2-2fcb39d029f8&response_type=code&redirect_uri=http://localhost:3000/login/ibm&code_challenge=${codeChallenge}`;
    }

    const handleClickRegister = () => {
        window.location = "/register";
    }

    const handleClickLogin = () => {
        axios.post(Endpoint.LOGIN, {
            email: formData.email,
            password: formData.password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.info(response.data)
        }).catch((error) => {
            setValidCredential(false);
        });
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
                        <div>
                            <form onSubmit={handleClick}>
                                { emailNull ? <p>Email wajib di isi.</p> : null }
                                <div className="form__field">
                                    <label>{GeneralConstant.FORM_LABEL_EMAIL}</label>
                                    <input id="email" value={formData.email} type="text" name="email" onChange={handleChange} />
                                </div>
                                { passwordNull ? <p>Password wajib di isi.</p> : null }
                                <div className="form__field">
                                    <label>{GeneralConstant.FORM_LABEL_PASSWORD}</label>
                                    <input id="password" value={formData.password} type="text" name="password" onChange={handleChange} />
                                </div>
                                { !validCredential ? <p>Email atau password anda salah.</p> : null }
                                <div>
                                    <button type="submit" onClick={handleClickLogin}>Login</button>
                                </div>
                            </form>
                            <div>
                                <p>Already have an IBM account?</p>
                                <button onClick={handleLoginIBM}>Login with IBM ID</button>
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
