import userService from "./services/userServices";

export const userColumns = [
    { field: "id", headerName: "ID", width: 100 },
    {
        field: "name",
        headerName: "Nombre",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img
                        className="cellImg"
                        src={params.row.img}
                        alt="avatar"
                    />
                    {params.row.name}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: "230",
    },
    {
        field: "cellphone",
        headerName: "Celular",
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

export const userRows = async (userToken) => {
    const allUsers = await userService.getAllUsers(userToken);

    const allUsersInDB = allUsers.data.users.map((user) => {
        return Object.create({
            id: user.id,
            name: user.name,
            email: user.email,
            img: user.images ? user.images[0].url : null,
            status: user.isActive ? "activo" : "inactivo",
            cellPhone: user.cellphone ?? null,
        });
    });

    return allUsersInDB;
};
