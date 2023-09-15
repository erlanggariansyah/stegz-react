import { useEffect, useState } from "react"
import CovidProvinsi from "../components/CovidProvinsi/CovidProvinsi"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import GeneralConstant from "../utils/constants/general"
import Endpoint from "../utils/constants/endpoint"
import axios from "axios"

const Indonesia = () => {
    const [covids, setCovids] = useState([]);
    const fetchData = async () => {
        const response = await axios(Endpoint.INDONESIA);
        setCovids(response.data.indonesia);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Navbar/>
            <Hero/>
            {/* <CovidInsight title={GeneralConstant.INDONESIA_SITUATION} description={GeneralConstant.INDONESIA_SITUATION_DESC} data={covids} setData={setCovids} /> */}
            <CovidProvinsi />
            <Footer/>
        </>
    )
}

export default Indonesia;
