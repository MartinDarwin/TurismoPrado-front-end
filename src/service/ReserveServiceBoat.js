export const ReserveServiceBoat = {
  getProductsData() {
    return [
      {
        id: "1001",
        code: "nvklal433",
        hotel: "Mansion del Lago",
        name: "Luis Mateo",
        lastname: "Perez Gonzales",
        phone: "964870573",
        email: "luisperez@hotmail.com",
        boat: "kayaks hinchables",
        dateini: "20-01-2024",
        time: "3",
        idroom: "1",
      },
      {
        id: "1002",
        code: "nvklal433",
        hotel: "Bellavista Isla del Sol",
        name: "Juan Carlos",
        lastname: "Gomez Ruiz",
        phone: "964870573",
        email: "luisperez@hotmail.com",
        boat: "Piraguas",
        dateini: "20-01-2024",
        time: "3",
        idroom: "1",
      },
      {
        id: "1003",
        code: "nvklal433",
        hotel: "Bellavista Isla del Sol",
        name: "Carmen Maria",
        lastname: "Hurtado Perales",
        phone: "964870573",
        email: "luisperez@hotmail.com",
        boat: "kayaks rígidos",
        dateini: "20-01-2024",
        time: "3",
        idroom: "1",
      },
      {
        id: "1004",
        code: "nvklal433",
        hotel: "Monte Prado Hotel",
        name: "Luis Pedro",
        lastname: "Espinoza Morales",
        phone: "964870573",
        email: "luisperez@hotmail.com",
        boat: "kayaks rígidos",
        dateini: "20-01-2024",
        time: "3",
        idroom: "1",
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
  },
};
