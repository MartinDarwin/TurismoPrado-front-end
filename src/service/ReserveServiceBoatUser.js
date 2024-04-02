export const ReserveServiceBoatUser = {
  getProductsData() {
    return [
      {
        id: "1001",
        code: "nvklal433",
        name: "Luis Mateo",
        lastname: "Perez Gonzales",
        enterprise: "La Chiva Nautica",
        boat: "kayaks hinchables",
        dateini: "20-01-2024",
        time: "3",
        idroom: "1",
      },
      {
        id: "1002",
        code: "nvklal433",
        name: "Juan Carlos",
        lastname: "Gomez Ruiz",
        enterprise: "Tour Represa Prado",
        boat: "Piraguas",
        dateini: "20-01-2024",
        time: "3",
        idroom: "1",
      },
     /* {
        id: "1003",
        code: "nvklal433",
        name: "Carmen Maria",
        lastname: "Hurtado Perales",
        enterprise: "La Chiva Nautica",
        boat: "kayaks rígidos",
        dateini: "20-01-2024",
        time: "3",
        idroom: "1",
      },
      {
        id: "1004",
        code: "nvklal433",
        name: "Luis Pedro",
        lastname: "Espinoza Morales",
        enterprise: "Tour Represa Prado",
        boat: "kayaks rígidos",
        dateini: "20-01-2024",
        time: "3",
        idroom: "1",
      },*/
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
