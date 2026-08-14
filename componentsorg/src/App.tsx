import { Route, Routes } from "react-router-dom";
import "./App.css";

import ModalPage from "./pages/ModalPage";
import SwitchPage from "./pages/SwitchPage";
import TabPage from "./pages/TabPage";
import HomePage from "./pages/HomePage";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <main className="bg-gray-50 h-full">
      <h1>this is home page</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/modal" element={<ModalPage />} />
        <Route path="/tab" element={<TabPage />} />
        <Route path="/switch" element={<SwitchPage />} />
      </Routes>
    </main>
  );
}

export default App;
