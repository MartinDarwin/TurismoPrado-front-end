export const UserService = {
    getProductsData() {
      return [
        {
          id: "1001",
          code: "nvklal433",
          name: "Luis Mateo",
          lastname: "Perez Gonzales",
          phone: "964870573",
          email: "luisperez@hotmail.com",
          user: "admin",
          password: "12345",
          type: "administrador",
          inventoryStatus: "Activo",
          idroom: "1",
        },
        {
          id: "1002",
          code: "nvklal433",
          name: "Carlos",
          lastname: "Torres Perales",
          phone: "964870573",
          email: "carlostorres@hotmail.com",
          user: "ctorres",
          password: "12345",
          type: "empresario",
          inventoryStatus: "Activo",
          idroom: "1",
        },
        {
          id: "1003",
          code: "nvklal433",
          name: "Maria",
          lastname: "Gamboa Ortiz",
          phone: "964870573",
          email: "mariagamboa@hotmail.com",
          user: "mgamboa",
          password: "12345",
          type: "cliente",
          inventoryStatus: "No activo",
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
  