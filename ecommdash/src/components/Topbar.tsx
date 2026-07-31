import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

const Topbar = () => {
  const { theme, toggleTheme } = useContext(AppContext);
  return (
    <div className="hidden p-6 shadow md:flex justify-end items-center">
      <Button onClick={() => toggleTheme()} className="bg-primary-blue">
        {theme === "light" ? <Moon /> : <Sun />}
      </Button>
      <Avatar size="lg" className="ml-2">
        <AvatarImage src="https://github.com/shadcn.pn" />
        <AvatarFallback className="bg-primary-blue text-md text-white">
          u
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Topbar;
