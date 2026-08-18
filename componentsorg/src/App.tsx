import { Route, Routes } from "react-router-dom";
import "./App.css";

import ModalPage from "./pages/ModalPage";
import SwitchPage from "./pages/SwitchPage";
import TabPage from "./pages/TabPage";
import HomePage from "./pages/HomePage";
import AccordionPage from "./pages/AccordionPage";
import PaginationPage from "./pages/PaginationPage";
import NotFoundPage from "./pages/NotFoundPage";
import Carasol from "./components/Carasol";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <main className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accordion" element={<AccordionPage />} />
        <Route path="/modal" element={<ModalPage />} />
        <Route path="/tab" element={<TabPage />} />
        <Route path="/switch" element={<SwitchPage />} />
        <Route path="/pagination" element={<PaginationPage />} />
        <Route path="/carsoul" element={<Carasol />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App;
