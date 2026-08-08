import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import UserProfile from "./UserProfile";

const Topbar = () => {
  const { theme, toggleTheme } = useContext(AppContext);
  return (
    <div className="hidden p-6 shadow md:flex justify-end items-center">
      <Button onClick={() => toggleTheme()} className="bg-primary-blue">
        {theme === "light" ? <Moon /> : <Sun />}
      </Button>
      <UserProfile />
    </div>
  );
};

export default Topbar;
