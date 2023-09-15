import LoginForm from "../components/LoginForm/LoginForm"
import CovidProvinsi from "../components/CovidProvinsi/CovidProvinsi"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"

const Province = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <CovidProvinsi />
            <LoginForm />
            <Footer/>
        </>
    )
}

export default Province;
