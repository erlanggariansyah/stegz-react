import Insight from "../components/Insight/Insight"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import GeneralConstant from "../utils/constants/general"
import Types from "../components/Types/Types"
import DeepDive from "../components/DeepDive/DeepDive"
import ExploreMore from "../components/ExploreMore/ExploreMore"

const Home = () => {
    const deepDiveData = [ GeneralConstant.DEEP_DIVE_STEGANOGRAPHY_1, GeneralConstant.DEEP_DIVE_STEGANOGRAPHY_2, GeneralConstant.DEEP_DIVE_STEGANOGRAPHY_3 ]
    const typesData = [ "Text steganography", "Image steganography", "Video steganography", "Audio steganography", "Network steganography", "DNA steganography" ]

    return (
        <>
            <Navbar/>
            <Hero/>
            <Insight title={GeneralConstant.AT_A_GLANCE} description={GeneralConstant.AT_A_GLANCE_DESC} text={GeneralConstant.STEGANOGRAPHY_DESCRIPTION_SHORT} />
            <DeepDive title={GeneralConstant.DEEP_DIVE} description={GeneralConstant.DEEP_DIVE_DESCRIPTION_SHORT} descriptionLong={GeneralConstant.DEEP_DIVE_DESCRIPTION_LONG} data={deepDiveData} />
            <Types title={GeneralConstant.TYPES} description={GeneralConstant.TYPES_DESCRIPTION_SHORT} data={typesData} />
            <ExploreMore title={GeneralConstant.EXPLORE_MORE} description={GeneralConstant.EXPLORE_MORE_DESCRIPTION} />
            <Footer/>
        </>
    )
}

export default Home;
