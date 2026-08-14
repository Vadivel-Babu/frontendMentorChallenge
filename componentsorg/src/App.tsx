import { Route, Routes } from "react-router-dom";
import "./App.css";

import ModalPage from "./pages/ModalPage";
import SwitchPage from "./pages/SwitchPage";
import TabPage from "./pages/TabPage";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1>this is home page</h1>
      <Routes>
        <Route path="/modal" element={<ModalPage />} />
        <Route path="/tab" element={<TabPage />} />
        <Route path="/switch" element={<SwitchPage />} />
      </Routes>
    </>
  );
}

export default App;
