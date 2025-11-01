import HomePage from "../pages/HomePage";
import "./styles";
import.meta.glob("@/shared/assets/icons/**/*.svg", {
  eager: true,
});

const App = () => {
  return <HomePage />;
};

export default App;
