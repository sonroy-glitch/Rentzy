import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CategoryPage from "./Pages/CategoryPage";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:categoryId" element={<CategoryPage />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
