import productService from "./services/productServices";

export const productColumns = [
    { field: "id", headerName: "ID", width: 100 },
    {
        field: "name",
        headerName: "Nombre",
        width: 230,
    },
    {
        field: "brand",
        headerName: "Marca",
        width: "230",
    },
    {
        field: "category",
        headerName: "Categoria",
        width: "230",
    },
    {
        field: "price",
        headerName: "precio",
        width: "150",
    },
    {
        field: "voltage",
        headerName: "Voltaje",
        width: "150",
    },
    {
        field: "capacity",
        headerName: "Capacidad",
        width: "150",
    },
    {
        field: "stock",
        headerName: "Stock",
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

export const productRows = async (userToken) => {
    const allProducts = await productService.getAllProducts(userToken);

    const allProductsInDB = allProducts.data.map((product) => {
        return Object.create({
            id: product.id,
            name: product.name,
            brand: product.brand,
            img: product.images ? product.images[0].url : null,
            status: product.isActive ? "activo" : "inactivo",
            voltage: product.voltage ?? "-",
            capacity: product.capacity ?? "-",
            stock: product.stock ?? "-",
            category: product.category ?? "-",
            price: product.price,
        });
    });

    return allProductsInDB;
};
