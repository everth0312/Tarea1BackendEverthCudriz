import { ProductsEntity } from "./products-entity.js"; 

const productsEntity = new ProductsEntity();

export const GetAllProducts = (request, response) => {
    const products = productsEntity.getAll();

    return response.json({
        data: products,
    });
};

export const CreateProducts = (request, response) => {
    const products = request.body;

    const newProducts = productsEntity.create(products);

    return response.json({
        data: newProducts,
    });
};

export const UpdateProducts = (request, response) => {
    const { id } = request.params;
    const productsData = request.body;

    const newProducts = productsEntity.update(+id, productsData);

    return response.json({
        data: newProducts,
    });
};

export const DeleteProducts = (request, response) => {
    const { id } = request.params;

    productsEntity.delete(+id);

    return response.json({
        data: {
            message: "Eliminado producto con id: " + id,
        },
    });
};
