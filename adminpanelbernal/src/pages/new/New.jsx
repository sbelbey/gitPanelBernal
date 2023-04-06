import "./new.scss";

import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import Select from "react-select";
import Swal from "sweetalert2";

import vehicleService from "../../services/vehicleServices";
import productService from "../../services/productServices";

const New = ({ inputs, title, userToken }) => {
    const location = useLocation();
    const loc = location.pathname.split("/")[1];
    const [file, setFile] = useState("");
    const [formData, setFormData] = useState({ images: [], vehicles: "" });
    const [options, setOptions] = useState([]);
    const [focused, setFocused] = useState(false);

    const serviceSwitcher = {
        productos: productService.createProduct,
        vehiculos: vehicleService.createVehicle,
    };

    const getAllVehicles = async () => {
        const allVehicles = await vehicleService.getAllVehicles(userToken);
        const allVehiclesOrdered = allVehicles.vehicles.data.map((vehicle) => {
            return {
                label: `${vehicle.brand} - ${vehicle.model} - ${
                    vehicle.engine
                } - ${vehicle.year.split("-")[0]}`,
                id: vehicle.id,
                value: `${vehicle.brand} - ${vehicle.model} - ${
                    vehicle.engine
                } - ${vehicle.year.split("-")[0]}`,
            };
        });
        setOptions(allVehiclesOrdered);
    };

    useEffect(() => {
        if (loc === "productos") {
            getAllVehicles();
        }
    }, [options === []]);

    const handleFocus = (event) => {
        setFocused(true);
    };

    const onChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue =
            type === "checkbox"
                ? checked
                : name === "year"
                ? new Date(value).toISOString().substr(0, 10)
                : value;
        setFormData({ ...formData, [name]: newValue });
    };

    const fileOnChange = (event) => {
        setFile(event.target.files[0]);
        const fileNames = event.target.files;
        setFormData({
            ...formData,
            images: [...fileNames],
        });
    };

    const onChangeSelect = (selectedOptions) => {
        const selectedIds = selectedOptions.map((option) => option.id);
        setFormData({
            ...formData,
            vehicles: selectedIds.join(","),
        });
    };

    const buildFormData = () => {
        const combinedFormData = new FormData();
        formData.images.forEach((image) => {
            combinedFormData.append("images", image);
        });
        Object.entries(formData).forEach(([key, value]) => {
            if (key !== "images") {
                combinedFormData.append(key, value);
            }
        });
        return combinedFormData;
    };

    const sendForm = async (event) => {
        event.preventDefault();
        const form = document.getElementById('formToSend');
        try {
            const combinedFormData = buildFormData();
            const response = await serviceSwitcher[loc](userToken, combinedFormData);
            if (response.message === 'Product was created successfully'){
              Swal.fire(`El ${loc} se cargó correctamente.`, undefined, "success");
            //   form.reset(); 
            } else{
              throw new Error();
            }

        } catch (error) {
            Swal.fire("Algo salío mal", undefined, "error");
        }
    };

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    {loc !== "vehiculos" ? (
                        <div className="left">
                            {" "}
                            <img
                                src={
                                    file
                                        ? URL.createObjectURL(file)
                                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                }
                                alt=""
                                srcset=""
                            />
                        </div>
                    ) : null}

                    <div className="right">
                        <form action="" id="formToSend">
                            {loc !== "vehiculos" ? (
                                <div className="formInput">
                                    <label htmlFor="file">
                                        Imagen:{" "}
                                        <DriveFolderUploadIcon className="icon" />
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        onChange={fileOnChange}
                                        style={{ display: "none" }}
                                        multiple
                                    />
                                </div>
                            ) : null}

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label htmlFor="">{input.label}</label>
                                    <input
                                        {...input}
                                        onChange={onChange}
                                        onBlur={handleFocus}
                                        focused={focused.toString()}
                                    />
                                    <span>{input.errorMessage}</span>
                                </div>
                            ))}

                            {loc === "productos" ? (
                                <Select
                                    closeMenuOnSelect={false}
                                    options={options}
                                    isMulti
                                    onChange={onChangeSelect}
                                />
                            ) : null}
                            <button onClick={sendForm}>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;
