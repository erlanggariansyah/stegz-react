import CryptoJS from "crypto-js";

const CryptoUtil = () => {
    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        
        for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
        }

        return result;
    }
  
    function generateCodeVerifier() {
        const codeVerifierLength = Math.floor(Math.random() * 86) + 43;
        return generateRandomString(codeVerifierLength);
    }
  
    function generateCodeChallenge(codeVerifier) {
        const sha256 = CryptoJS.SHA256(codeVerifier);
        const codeChallenge = CryptoJS.enc.Base64.stringify(sha256)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
        return codeChallenge;
    }
  
    const PKCEVerifier = generateCodeVerifier();
    const PKCEChallenge = generateCodeChallenge(PKCEVerifier);

    return {
        PKCEVerifier: PKCEVerifier,
        PKCEChallenge: PKCEChallenge
    }
}

export default CryptoUtil;
