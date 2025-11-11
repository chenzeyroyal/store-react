import useProducts from "@/shared/hooks/useProducts";
import { createContext } from "react";

export const ProductsContext = createContext({});

export const ProductsProvider = (props) => {
  const { children } = props;

  const { products, toggleToFavorite, removedProductId, favoritesCount } =
    useProducts();

  return (
    <ProductsContext.Provider
      value={{
        products,
        toggleToFavorite,
        removedProductId,
        favoritesCount,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
