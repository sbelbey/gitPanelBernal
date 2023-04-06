import axios from "axios";

const baseUrl = `${process.env.REACT_APP_SERVER_URL}/users`;

const getAllUsers = async (userToken) => {
    try {
        const { data } = await axios.get(baseUrl + "/all", {
            headers: { Authorization: "Bearer " + userToken },
        });

        return data;
    } catch (error) {
        console.log(error);
    }
};

const adminLogin = async (values) => {
    try {
        const { data } = await axios.post(baseUrl + "/adminLogin", values);
        return data;
    } catch (error) {
        return "Credenciales Inválidas";
    }
};

export default { getAllUsers, adminLogin };
