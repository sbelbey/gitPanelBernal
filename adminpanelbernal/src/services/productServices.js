import axios from "axios";

const baseUrl = `${process.env.REACT_APP_SERVER_URL}/products`;

const getAllProducts = async (userToken) => {
    try {
        const { data } = await axios.get(baseUrl + "/all", {
            headers: { Authorization: "Bearer " + userToken },
        });

        return data;
    } catch (error) {
        console.log(error);
    }
};

const createProduct = async (userToken, productData) => {
    try {
        const { data } = await axios.post(baseUrl, productData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: "Bearer " + userToken,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

const deleteProduct = async (userToken, productId) => {
    try {
        const { data } = await axios.delete(baseUrl + "/" + productId, {
            headers: {
                Authorization: "Bearer " + userToken,
            },
        });

        return data;
    } catch (error) {
        console.log(error);
    }
};

export default { getAllProducts, createProduct, deleteProduct };
