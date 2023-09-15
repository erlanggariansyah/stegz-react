import React from "react";
import { ReactComponent as ImageLogin } from "../../assets/hero_img_login.svg"
import { useState } from "react";
import RegisterFormStyled from "../../styled/RegisterFormStyled";
import GeneralConstant from "../../utils/constants/general";

const RegisterForm = () => {
    const [ formData, setFormData ] = useState({ email: "", fisrtName: "", lastName: "", password: "" })
    const [ emailNull, setEmailNull ] = useState(false);
    const [ firstNameNull, setFirstNameNull ] = useState(false);
    const [ lastNameNull, setLastNameNull ] = useState(false);
    const [ passwordNull, setPasswordNull ] = useState(false);

    const validate = () => {
        if (formData.email === "") {
            setEmailNull(true);
            return false;
        } else if (formData.fisrtName === "") {
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
                                { emailNull ? <p>Email wajib di isi.</p> : null }
                                <div className="form__field">
                                    <label>{GeneralConstant.FORM_LABEL_EMAIL}</label>
                                    <input id="email" value={formData.email} type="text" name="email" onChange={handleChange} />
                                </div>
                                { firstNameNull ? <p>First Name wajib di isi.</p> : null }
                                <div className="form__field">
                                    <label>{GeneralConstant.FORM_LABEL_FIRST_NAME}</label>
                                    <input id="firstname" value={formData.fisrtName} type="text" name="firstname" onChange={handleChange} />
                                </div>
                                { lastNameNull ? <p>Last Name wajib di isi.</p> : null }
                                <div className="form__field">
                                    <label>{GeneralConstant.FORM_LABEL_LAST_NAME}</label>
                                    <input id="lastname" value={formData.lastName} type="text" name="lastname" onChange={handleChange} />
                                </div>
                                { passwordNull ? <p>Password wajib di isi.</p> : null }
                                <div className="form__field">
                                    <label>{GeneralConstant.FORM_LABEL_PASSWORD}</label>
                                    <input id="password" value={formData.password} type="text" name="password" onChange={handleChange} />
                                </div>
                                <p>* Dengan mendaftar, berarti anda setuju terhadap kebijakan umum penggunaan data pengguna berdasarkan UU yang ada di Indonesia. <a href="https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022">Lihat disini.</a></p>
                                <div>
                                    <button type="submit">Register</button>
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
