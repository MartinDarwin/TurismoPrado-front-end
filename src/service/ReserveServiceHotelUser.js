export const ReserveServiceHotelUser = {
    getProductsData() {
      return [
        {
          id: "1001",
          code: "nvklal433",
          hotel: "Mansion del Lago",
          name: "Martin",
          lastname: " Huaman",
          phone: "964870573",
          email: "luisperez@hotmail.com",
          dateini: "20-01-2024",
          dateend: "23-01-2024",
          idroom: "1",
        },
        {
          id: "1002",
          code: "nvklal433",
          hotel: "Bellavista Isla del Sol",
          name: "Martin",
          lastname: " Huaman",
          phone: "964870573",
          email: "luisperez@hotmail.com",
          dateini: "23-01-2024",
          dateend: "25-01-2024",
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
  