export const ReserveServiceRestaurant = {
    getProductsData() {
      return [
        {
          id: "1001",
          code: "nvklal433",
          name: "Luis Mateo",
          lastname: "Perez Gonzales",
          phone: "964870573",
          email: "luisperez@hotmail.com",
          dish: "Sancocho",
          numdish: "1",
          dateini: "20-01-2024",
          idroom: "1",
        },
        {
          id: "1002",
          code: "nvklal433",
          name: "Juan Carlos",
          lastname: "Gomez Ruiz",
          phone: "964870573",
          email: "luisperez@hotmail.com",
          dish: "Ajiaco",
          numdish: "2",
          dateini: "20-01-2024",
          idroom: "1",
        },
        {
          id: "1003",
          code: "nvklal433",
          name: "Carmen Maria",
          lastname: "Hurtado Perales",
          phone: "964870573",
          email: "luisperez@hotmail.com",
          dish: "Sancocho",
          numdish: "3",
          dateini: "20-01-2024",
          idroom: "1",
        },
        {
          id: "1004",
          code: "nvklal433",
          name: "Luis Pedro",
          lastname: "Espinoza Morales",
          phone: "964870573",
          email: "luisperez@hotmail.com",
          dish: "Carne Oreada",
          numdish: "2",
          dateini: "20-01-2024",
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
  