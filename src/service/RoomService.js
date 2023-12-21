export const RoomService = {
    getProductsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Habitación con 2 camas individuales',
                description: 'Habitación con vista a la represa, zona wifi, desayuno gratis, cochera independiente, 2 baños',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'Disponible',
                rating: 1
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Habitación doble con cama King',
                description: 'Product Description',
                image: 'black-watch.jpg',
                price: 72,
                category: 'Accessories',
                quantity: 61,
                inventoryStatus: 'Disponible',
                rating: 4
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'Habitación matrimonial con cama King',
                description: 'Product Description',
                image: 'blue-band.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 2,
                inventoryStatus: 'Disponible',
                rating: 3
            },
            {
                id: '1003',
                code: '244wgerg2',
                name: 'Habitación simple',
                description: 'Product Description',
                image: 'blue-t-shirt.jpg',
                price: 29,
                category: 'Clothing',
                quantity: 25,
                inventoryStatus: 'Ocupado',
                rating: 5
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'Habitación simple con 3 camas',
                description: 'Product Description',
                image: 'bracelet.jpg',
                price: 15,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'Disponible',
                rating: 4
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
