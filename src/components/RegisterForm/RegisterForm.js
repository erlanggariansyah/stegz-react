import React from "react";
import { ReactComponent as ImageRegister } from "../../assets/hero_img_register.svg"
import { useState } from "react";
import RegisterFormStyled from "../../styled/RegisterFormStyled";
import GeneralConstant from "../../utils/constants/general";
import Endpoint from "../../utils/constants/endpoint";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const [ formData, setFormData ] = useState({ email: "", firstName: "", lastName: "", password: "", confirmationPassword: "" })
    
    const [ emailNull, setEmailNull ] = useState(false);
    const [ emailChangeCounter, setEmailChangeCounter ] = useState(0);
    const [ validEmail, setValidEmail ] = useState(true);

    const [ firstNameNull, setFirstNameNull ] = useState(false);
    const [ lastNameNull, setLastNameNull ] = useState(false);

    const [ passwordNull, setPasswordNull ] = useState(false);
    const [ confirmationPasswordNull, setConfirmationPasswordNull ] = useState(false);
    const [ passwordMatch, setPasswordMatch ] = useState(true);
    const [ showPassword, setShowPassword ] = useState(false);
    const [ safePassword, setSafePassword ] = useState(true);

    const [ validData, setValidData ] = useState(true);

    const [ alreadySignedIn, setAlreadySignedIn ] = useState(false);

    const navigator = useNavigate();

    const validate = () => {
        if (formData.email === "") {
            setEmailNull(true);
            return false;
        } else if (formData.firstName === "") {
            setFirstNameNull(true);
            return false;
        } else if (formData.lastName === "") {
            setLastNameNull(true);
            return false;
        } else if (formData.password === "") { 
            setPasswordNull(true);
            return false;
        } else if (formData.confirmationPassword === "") {
            setConfirmationPasswordNull(true);
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

    const handleChangePassword = (e) => {
        const { name, value } = e.target;
    
        if (
            value.length < 8 ||
            value.length > 64 ||
            !/[A-Z]/.test(value) ||
            !/[a-z]/.test(value) ||
            !/\d/.test(value) ||
            !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(value)
        ) {
            setSafePassword(false)
        } else {
            setSafePassword(true)
        }

        setFormData({
            ...formData,
            [name]: value
        });
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

    const handleShowPassword = (e) => {
        if (showPassword) {
            setShowPassword(false);
        } else {
            setShowPassword(true);
        }
    }

    const handleConfirmationPasswordChange = (e) => {
        const { name, value } = e.target;
        
        if (value !== formData.password) {
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
        }

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleClickRegister = () => {
        const authorizationToken = sessionStorage.getItem('Authorization-Token');
        if (authorizationToken != null) {
            setAlreadySignedIn(true);
        } else {
            if (!emailNull && !firstNameNull && 
                !lastNameNull && !passwordNull && 
                !confirmationPasswordNull && validEmail && 
                safePassword && passwordMatch) {
    
                axios.post(Endpoint.REGISTER, {
                    email: formData.email,
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    password: formData.password
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(() => {
                    navigator("/login");
                }).catch((error) => {
                    console.error(error.message)
                    setValidData(false);
                });
            }
        }
    }

    return (
        <RegisterFormStyled>
            <div className="container">
                <section>
                    <div className="form__left">
                        <ImageRegister />
                    </div>
                    <div className="form__right">
                        <h2 className="form__title">Register</h2>
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
                                    <label>{GeneralConstant.FORM_LABEL_FIRST_NAME}</label>
                                    { firstNameNull && !alreadySignedIn ? <p className="error_text">First Name must be filled in.</p> : null }
                                    <input id="firstName" className={ firstNameNull ? 'red_outline' : null } value={formData.firstName} type="text" name="firstName" onChange={handleChange} />
                                </div>
                                <div className="form__field">
                                    <label>{GeneralConstant.FORM_LABEL_LAST_NAME}</label>
                                    { lastNameNull && !alreadySignedIn ? <p className="error_text">Last Name must be filled in.</p> : null }
                                    <input id="lastName" className={lastNameNull ? 'red_outline' : null} value={formData.lastName} type="text" name="lastName" onChange={handleChange} />
                                </div>
                                <div className="form__field">
                                    <label>{GeneralConstant.FORM_LABEL_PASSWORD}</label>
                                    { passwordNull && !alreadySignedIn ? <p className="error_text">Password must be filled in.</p> : null }
                                    { !safePassword ? <p className="error_text">Your password doesn’t match the NIST Guidelines. <a href="https://pages.nist.gov/800-63-3/sp800-63b.html">Read here.</a></p> : null }
                                    <input id="password" className={ !passwordMatch || !safePassword || passwordNull ? 'red_outline' : null } value={formData.password} type={ showPassword ? 'text' : 'password' } name="password" onChange={handleChangePassword} />
                                </div>
                                <div className="form__field">
                                    <label>{GeneralConstant.FORM_LABEL_CONFIRMATION_PASSWORD}</label>
                                    { confirmationPasswordNull && !alreadySignedIn ? <p className="error_text">Confirmation Password must be filled in.</p> : null }
                                    {
                                        passwordMatch ? null : (
                                            <>
                                                <p className="error_text">Confirmation password doesn’t match. Confused? <a onClick={handleShowPassword }>{ showPassword ? 'Hide again.' : 'Show password.' }</a></p>
                                            </>
                                        )
                                    }
                                    <input id="confirmationPassword" className={ 
                                        passwordMatch || confirmationPasswordNull ? null : 'red_outline'
                                     } value={formData.confirmationPassword} type={ showPassword ? 'text' : 'password' } name="confirmationPassword" onChange={handleConfirmationPasswordChange} />
                                </div>
                                <p>* By registering, you agree to the general policy of using user data based on existing laws in Indonesia. <a href="https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022">See here.</a></p>
                                { !validData ? <p className="error_text">The data you entered is invalid or has been already registered.</p> : null }
                                <div>
                                    <button type="submit" onClick={handleClickRegister}>Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </RegisterFormStyled>
    )
}

export default RegisterForm;
