const GeneralConstant = {
    PROJECT_NAME: "IBM stegZ",
    PROJECT_DESCRIPTION: "stegZ Project is a simple-minimalistic web-application steganography tool for IBM Hybrid Cloud & AI Project Capstone",
    PROJECT_DESCRIPTION_SHORT: "Steganography made easy.",
    PROJECT_CREDIT: "Developed by Erlangga Riansyah",
    
    FORM_LABEL_EMAIL: "Email",
    FORM_LABEL_PASSWORD: "Password",
    FORM_LABEL_CONFIRMATION_PASSWORD: "Confirmation Password",
    FORM_LABEL_FIRST_NAME: "First Name",
    FORM_LABEL_LAST_NAME: "Last Name",
    FORM_LABEL_IBM_ID: "IBMid",

    AT_A_GLANCE: "At a glance",
    AT_A_GLANCE_DESC: "what is steganography?",
    STEGANOGRAPHY_DESCRIPTION_SHORT: "Steganography is the practice of concealing information within another message or physical object to avoid detection. Steganography can be used to hide virtually any type of digital content, including text, image, video, or audio content. That hidden data is then extracted at its destination.",
    DEEP_DIVE: "Deep dive",
    DEEP_DIVE_DESCRIPTION_SHORT: "how steganography works?",
    DEEP_DIVE_DESCRIPTION_LONG: "Steganography works by concealing information in a way that avoids suspicion. One of the most prevalent techniques is called ‘least significant bit’ (LSB) steganography. This involves embedding the secret information in the least significant bits of a media file.",
    DEEP_DIVE_STEGANOGRAPHY_1: "In an image file, each pixel is made up of three bytes of data corresponding to the colors red, green, and blue. Some image formats allocate an additional fourth byte to transparency, or ‘alpha’",
    DEEP_DIVE_STEGANOGRAPHY_2: "LSB steganography alters the last bit of each of those bytes to hide one bit of data. So, to hide one megabyte of data using this method, you would need an eight-megabyte image file",
    DEEP_DIVE_STEGANOGRAPHY_3: "Modifying the last bit of the pixel value doesn’t result in a visually perceptible change to the picture, which means that anyone viewing the original and the steganographically-modified images won’t be able to tell the difference",
    TYPES: "Types of steganography",
    TYPES_DESCRIPTION_SHORT: "from my perspective, there are six main types of steganography",
    EXPLORE_MORE: "Want to know more?",
    EXPLORE_MORE_DESCRIPTION: "sign in to explore more!",
    LOGIN: "Login"
}

export default GeneralConstant;
