import vehicleService from "./services/vehicleServices.js";

export const vehicleColumns = [
    { field: "id", headerName: "ID", width: 100 },
    {
        field: "brand",
        headerName: "Marca",
        width: 230,
    },
    {
        field: "model",
        headerName: "Modelo",
        width: "230",
    },
    {
        field: "engine",
        headerName: "motor",
        width: "130",
    },
    {
        field: "year",
        headerName: "Año",
        width: "230",
    },
    {
        field: "type",
        headerName: "Tipo",
        width: "150",
    },
        {
        field: "status",
        headerName: "Estado",
        width: "160",
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

export const vehicleRows = async (userToken) => {
    const allVehicles = await vehicleService.getAllVehicles(userToken);

    const allVehiclesInDB = allVehicles.vehicles.data.map((product) => {
        return Object.create({
            id: product.id,
            brand: product.brand,
            status: product.isActive ? "activo" : "inactivo",
            model: product.model ?? "-",
            engine: product.engine ?? "-",
            year: product.year ?? "-",
            type: product.types[0].type ?? "-"
        });
    });

    return allVehiclesInDB;
};
