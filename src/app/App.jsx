import HomePage from "@/pages/HomePage";
import StorePage from "@/pages/StorePage";
import FavoritesPage from "@/pages/FavoritesPage";
import Router from "./routing/Router";
import "./styles";
import { ProductsProvider } from "@/entities/model/ProductsContext";
import.meta.glob("@/shared/assets/icons/**/*.svg", {
  eager: true,
});

const App = () => {
  const routes = {
    "/": HomePage,
    "/store": StorePage,
    "/favorites": FavoritesPage,
    "*": () => <div>404</div>,
  };

  return (
    <ProductsProvider>
      <Router routes={routes} />
    </ProductsProvider>
  );
};

export default App;
