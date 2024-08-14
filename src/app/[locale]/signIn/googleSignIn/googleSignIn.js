import axios from "axios";
import getLocalhost from "@/app/[locale]/api/localhost/localhost";

const postGoogleLoginData = async (token, deviceToken, successRedirect) => {
    try {
        const localhost = getLocalhost();

        const response = await axios.post(`http://${localhost}/api/Authentication/google-signin`, {
            Token: token,
            DeviceToken: deviceToken
        });

        console.log(response)
        const accessToken = response.data.value.accessToken;
        const refreshToken = response.data.value.refreshToken;

        // Сохраните accessToken в памяти
        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('refreshToken', refreshToken);
        // setCookie('refreshToken', refreshToken, 7);
        localStorage.setItem('deviceToken', deviceToken)

        successRedirect();
        return true;
    } catch (error) {
        console.error('Error during Google login request:', error);
        return false;
    }
}
export default postGoogleLoginData;

// function setCookie(name, value, days) {
//     let expires = "";
//     if (days) {
//         const date = new Date();
//         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }



