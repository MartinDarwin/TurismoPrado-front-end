export const DishService = {
    getProductsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Sancocho',
                description: 'Sopa más o menos espesa cuyo acompañamiento principal es el arroz blanco',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Comida tradicional',
                quantity: 24,
                inventoryStatus: 'Disponible',
                rating: 1
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Ajiaco',
                description: 'Esta sopa originaria de Colombia se elabora con maíz, pollo y hasta tres tipos diferentes de patatas',
                image: 'black-watch.jpg',
                price: 72,
                category: 'Comida tradicional',
                quantity: 61,
                inventoryStatus: 'Disponible',
                rating: 4
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'Carne Oreada',
                description: 'Esta receta es originaria de la región de Santander. Consiste en salar y secar la carne de tal forma que prolongue su tiempo de consumo',
                image: 'blue-band.jpg',
                price: 79,
                category: 'Comida tradicional',
                quantity: 2,
                inventoryStatus: 'Disponible',
                rating: 3
            },
            {
                id: '1003',
                code: '244wgerg2',
                name: 'Trucha',
                description: ' La trucha es un pescado de agua dulce que se encuentra en ríos, lagos y arroyos. Es conocida por su carne rosada y suave',
                image: 'blue-t-shirt.jpg',
                price: 29,
                category: 'Pescados',
                quantity: 25,
                inventoryStatus: 'Agotado',
                rating: 5
            },               
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};
