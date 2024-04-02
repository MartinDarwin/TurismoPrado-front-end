export const ReserveServiceRestaurantUser = {
    getProductsData() {
      return [
        {
          id: "1001",
          code: "nvklal433",
          restaurant: "Restaurante Prado",
          name: "Martin",
          lastname: " Huaman",
          phone: "964870573",
          email: "luisperez@hotmail.com",
          dish: "Sancocho",          
          dateini: "20-01-2024",
          numdish: "2",
          idroom: "1",
        },
        {
          id: "1002",
          code: "nvklal433",
          restaurant: "Miramar Restaurante",
          name: "Martin",
          lastname: " Huaman",
          phone: "964870573",
          email: "luisperez@hotmail.com",
          dish: "Ajiaco",
          dateini: "21-01-2024",
          numdish: "3",
          idroom: "1",
        },
     /*   {
          id: "1003",
          code: "nvklal433",
          restaurant: "Restaurante Prado",
          name: "Luis Mateo",
          lastname: "Perez Gonzales",
          phone: "964870573",
          email: "luisperez@hotmail.com",
          dish: "Sancocho",
          dateini: "22-01-2024",
          numdish: "1",
          idroom: "1",
        },
        {
          id: "1004",
          code: "nvklal433",
          restaurant: "Señor Limón",
          name: "Luis Mateo",
          lastname: "Perez Gonzales",
          phone: "964870573",
          email: "luisperez@hotmail.com",
          dish: "Carne Oreada",
          dateini: "23-01-2024",
          numdish: "2",
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
  