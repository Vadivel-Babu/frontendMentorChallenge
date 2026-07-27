import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Topbar = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  return (
    <div className="w-full md:inline-block p-6 shadow">
      <div
        className={`max-w-100 flex justify-center gap-1 ${(pathname === "" || pathname === "setting") && "invisible"}`}
      >
        <Input name="search" placeholder="search" />
        <Button className="bg-primary-blue">search</Button>
      </div>
    </div>
  );
};

export default Topbar;
