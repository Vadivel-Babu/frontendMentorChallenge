import "./App.css";
import Sidebar from "./components/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import DashBoardPage from "./pages/DashBoardPage";
import SettingPage from "./pages/SettingPage";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPage from "./pages/AuthPage";
import BlogsPage from "./pages/BlogsPage";
import UsersPage from "./pages/UsersPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  return (
    <div className="flex flex-col md:flex-row">
      {pathname !== "auth" && pathname !== "forgetpassword" && <Sidebar />}

      <div className="p-2 md:w-full">
        <Routes>
          <Route path="/" element={<DashBoardPage />} />
          <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
