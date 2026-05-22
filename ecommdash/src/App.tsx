import "./App.css";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import DashBoardPage from "./pages/DashBoardPage";
import ProductsPage from "./pages/ProductsPage";
import OrdersPage from "./pages/OrdersPage";
import CreateProductPage from "./pages/CreateProductPage";
import SettingPage from "./pages/SettingPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashBoardPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
