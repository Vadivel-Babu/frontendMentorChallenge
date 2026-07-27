import "./App.css";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import DashBoardPage from "./pages/DashBoardPage";
import SettingPage from "./pages/SettingPage";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPage from "./pages/AuthPage";
import BlogsPage from "./pages/BlogsPage";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="p-2 md:w-full">
        <Routes>
          <Route path="/" element={<DashBoardPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
