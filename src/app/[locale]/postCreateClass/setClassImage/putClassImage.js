// import axios from 'axios';
//
// const putClassImage =  (file) => {
//     const accessToken = localStorage.getItem('accessToken');
//     const classId = localStorage.getItem('classId');
//
//     const formData = new FormData();
//
//     formData.append('ImageFormFile', file);
//
//     axios
//         .put(`http://localhost:7280/api/Image/set-class-image/${classId}`, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//                 Authorization: `Bearer ${accessToken}`,
//             },
//         })
//         .then(function (response) {
//             console.log(response);
//
//             // page reload
//             window.location.reload()
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// };
//
// export default putClassImage;


import axios from 'axios';

const putClassImage = async (file, toast) => {
    try {
        const accessToken = localStorage.getItem('accessToken');
        const classId = localStorage.getItem('classId');
        const formData = new FormData();
        formData.append('ImageFormFile', file);

        const response = await axios.put(`http://localhost:7280/api/Image/set-class-image/${classId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${accessToken}`,
            },
        });
        console.log(response);
        return true;
    } catch (error) {
        console.log(error);
        if (toast && toast.current) {
            toast.current.show({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
        }
        return false;
    }
};

export default putClassImage;
