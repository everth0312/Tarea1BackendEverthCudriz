export class ProductsEntity {
    products = [
        {
            id: 1,
            name: "Carne",
        },
        {
            id: 2,
            name: "Pollo",
        },
        {
            id: 3,
            name: "Cerdo",
        },
    ];

     // getAll

     getAll() {
        return this.products;
    }

    // get

    get(id) {
        return this.products.find((u) => u.id === id);
    }

    // create

    create(products) {
        const newProduct = { name: products.name, id: this.products.length + 1 };
        this.products.push(newProduct);
        return newProduct;
    }

    // update

    update(id, productsData) {
        const newProducts = this.products.filter((u) => u.id !== id);

        const updated = { id: id, name: productsData.name };
        newProducts.push(updated);

        this.products = newProducts;

        return updated;
    }
    // delete

    delete(id) {
        this.products = this.products.filter((u) => u.id !== id);
    }
    }