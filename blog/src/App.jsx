import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import SettingPage from "./pages/SettingPage";
import CreatePostPage from "./pages/CreatePostPage";
import { Avatar } from "@mantine/core";

function App() {
  return (
    <>
      <Navbar />
      <Avatar
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUvEV4qKn_lxckDDd01lspzo2a9djhy4ZqQ&"
        }
        alt="Vitaly Rtishchev"
        color="red"
      >
        VR
      </Avatar>
      <Routes>
        <Route path="/" element="home" />
        <Route path="/login" element="login" />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/post" element="post" />
      </Routes>
    </>
  );
}

export default App;
