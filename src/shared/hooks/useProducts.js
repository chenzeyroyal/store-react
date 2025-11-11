import productsAPI from "@/shared/api";
import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [removedProductId, setRemovedProductId] = useState(null);
  const [favoritesCount, setFavoritesCount] = useState(0);

  useEffect(() => {
    productsAPI.getProducts().then(setProducts);
  }, []);

  useEffect(() => {
    setFavoritesCount(products.filter((product) => product.isFavorite).length);
  }, [products]);

  const toggleToFavorite = (id, isFavorite) => {
    productsAPI.toggleToFavorite(id, isFavorite).then(() => {
      setProducts(
        products.map((product) => {
          if (product.id === id) {
            !isFavorite && setRemovedProductId(id);
            setFavoritesCount(
              products.filter((product) => product.isFavorite).length
            );
            return { ...product, isFavorite };
          }
          return product;
        })
      );
    });
  };

  return { products, toggleToFavorite, removedProductId, favoritesCount };
};

export default useProducts;
