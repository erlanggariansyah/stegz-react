import React from "react";
import { ReactComponent as ImageLogin } from "../../assets/hero_img_register.svg"
import { useState } from "react";
import RegisterFormStyled from "../../styled/RegisterFormStyled";
import GeneralConstant from "../../utils/constants/general";
import Endpoint from "../../utils/constants/endpoint";
import axios from "axios";

const RegisterForm = () => {
    const [ formData, setFormData ] = useState({ email: "", firstName: "", lastName: "", password: "" })
    const [ emailNull, setEmailNull ] = useState(false);
    const [ firstNameNull, setFirstNameNull ] = useState(false);
    const [ lastNameNull, setLastNameNull ] = useState(false);
    const [ passwordNull, setPasswordNull ] = useState(false);
    const [ validData, setValidData ] = useState(true);

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

    const handleClickRegister = () => {
        axios.post(Endpoint.REGISTER, {
            email: formData.email,
            first_name: formData.firstName,
            last_name: formData.lastName,
            password: formData.password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.info(response.data);
        }).catch((error) => {
            console.info(error.message)
            setValidData(false);
        });
    }

    return (
        <RegisterFormStyled>
            <div className="container">
                <section>
                    <div className="form__left">
                        <ImageLogin />
                    </div>
                    <div className="form__right">
                        <h2 className="form__title">Register</h2>
                        <div>
                            <form onSubmit={handleClick}>
                                { emailNull ? <p className="error_text">Email wajib di isi.</p> : null }
                                <div className="form__field">
                                    <label>{GeneralConstant.FORM_LABEL_EMAIL}</label>
                                    <input id="email" value={formData.email} type="text" name="email" onChange={handleChange} />
                                </div>
                                { firstNameNull ? <p className="error_text">First Name wajib di isi.</p> : null }
                                <div className="form__field">
                                    <label>{GeneralConstant.FORM_LABEL_FIRST_NAME}</label>
                                    <input id="firstName" value={formData.firstName} type="text" name="firstName" onChange={handleChange} />
                                </div>
                                { lastNameNull ? <p className="error_text">Last Name wajib di isi.</p> : null }
                                <div className="form__field">
                                    <label>{GeneralConstant.FORM_LABEL_LAST_NAME}</label>
                                    <input id="lastName" value={formData.lastName} type="text" name="lastName" onChange={handleChange} />
                                </div>
                                { passwordNull ? <p className="error_text">Password wajib di isi.</p> : null }
                                <div className="form__field">
                                    <label>{GeneralConstant.FORM_LABEL_PASSWORD}</label>
                                    <input id="password" value={formData.password} type="text" name="password" onChange={handleChange} />
                                </div>
                                <p>* Dengan mendaftar, berarti anda setuju terhadap kebijakan umum penggunaan data pengguna berdasarkan UU yang ada di Indonesia. <a href="https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022">Lihat disini.</a></p>
                                { !validData ? <p className="error_text">Data yang anda masukkan tidak valid atau sudah terdaftar sebelumnya.</p> : null }
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
