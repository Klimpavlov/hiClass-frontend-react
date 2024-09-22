import apiClient from "@/app/[locale]/api/utils/axios";

const postResetPassword = async (password, toast) => {
    const deviceToken = localStorage.getItem('deviceToken');

    try {
        const response = await apiClient.post('/Authentication/reset-password', {
            DeviceToken: deviceToken,
            NewPassword: password,
        })

        console.log(response);
        const accessToken = response.data.value.accessToken;
        const refreshToken = response.data.value.refreshToken;
        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('refreshToken', refreshToken);
        return true;
    }
        catch (error) {
            console.log(error);
            if (toast && toast.current) {
                toast.current.show({severity: 'error', summary: 'Error', detail: error.message, life: 3000});
            }
            return false;        }
}

export default postResetPassword

