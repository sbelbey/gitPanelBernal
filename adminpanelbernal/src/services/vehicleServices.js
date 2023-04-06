import axios from "axios";

const baseUrl = `${process.env.REACT_APP_SERVER_URL}/vehicles`;

const getAllVehicles = async (userToken) => {
    try {
        const { data } = await axios.get(baseUrl, {
            headers: { Authorization: "Bearer " + userToken },
        });

        return data;
    } catch (error) {
        console.log(error);
    }
};

const createVehicle = async (userToken, vehicleData) => {
    try {
        const { data } = await axios.post(baseUrl, vehicleData, {
            headers: { Authorization: "Bearer " + userToken },
        });
        
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default { getAllVehicles, createVehicle };
