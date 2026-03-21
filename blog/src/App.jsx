import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import SettingPage from "./pages/SettingPage";
import CreatePostPage from "./pages/CreatePostPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element="home" />
        <Route path="/login" element="login" />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </>
  );
}

export default App;
