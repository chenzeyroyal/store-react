const URL = "http://localhost:3001";

const headers = {
  "Content-Type": "application/json",
};

const productsAPI = {
  getCategories: async () => {
    const response = await fetch(`${URL}/categories`);
    return await response.json();
  },

  getProducts: async () => {
    const response = await fetch(`${URL}/products`);
    return await response.json();
  },

  toggleToFavorite: async (id, isFavorite) => {
    const response = await fetch(`${URL}/products/${id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ isFavorite }),
    });

    return await response.json();
  },
};

export default productsAPI;
