import "./datatable.scss";

import { DataGrid } from "@mui/x-data-grid";

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { userColumns, userRows } from "../../usersDataTableSource";
import { productColumns, productRows } from "../../productsDataTableSource";
import { vehicleColumns, vehicleRows } from "../../vehiclesDataTableSource.js";
import productServices from "../../services/productServices";
import Swal from "sweetalert2";

const Datatable = ({ userToken }) => {
    const location = useLocation();
    const loc = location.pathname.split("/")[1];

    const tableSwitcher = {
        usuarios: {
            columns: userColumns,
            rows: userRows,
        },
        productos: {
            columns: productColumns,
            rows: productRows,
        },
        vehiculos: {
            columns: vehicleColumns,
            rows: vehicleRows,
        },
    };

    const [data, setData] = useState([]);

    let emptyData = data === [] || userToken;

    const getUsers = async () => {
        const resData = await tableSwitcher[loc].rows(userToken);
        setData(resData);
    };

    useEffect(() => {
        getUsers();
    }, [emptyData]);

    const handleDelete = async (id) => {
        try {
            const response = await productServices.deleteProduct(userToken, id);
            if (response.message === "Product was deleted successfully") {
                setData(data.filter((item) => item.id !== id));
                Swal.fire(
                    `El ${loc} fue desactivado exitosamente.`,
                    undefined,
                    "success"
                );
            } else {
                throw new Error();
            }
        } catch (error) {
            Swal.fire(
                "Ocurrió un problema, intentelo más tarde",
                undefined,
                "error"
            );
        }
    };

    const actionColumns = [
        {
            field: "Action",
            headerName: "Acción",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link
                            to="/usuarios/test"
                            style={{ textDecoration: "none" }}
                        >
                            <div className="viewButton">Ver</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Desactivar
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="datatable">
            <div className="datatableTitle">
                {loc.toUpperCase()}
                <Link to={`/${loc}/nuevo`} className="link">
                    Agregar
                </Link>
            </div>
            <DataGrid
                rows={data}
                columns={tableSwitcher[loc].columns.concat(actionColumns)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default Datatable;
