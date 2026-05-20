import { Baby } from "lucide-react";
import "./App.css";
import { Button } from "./components/ui/button";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Button
        className="bg-amber-400 hover:bg-black hover:text-blue-400"
        size={"lg"}
      >
        hello
        <Baby />
      </Button>{" "}
      <Sidebar />
    </>
  );
}

export default App;
