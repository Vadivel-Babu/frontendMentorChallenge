import { NavLink, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  LayoutDashboard,
  Moon,
  Plus,
  Settings,
  ShoppingBasket,
  Sun,
  Truck,
  MoveHorizontal,
  LogOut,
  Menu,
} from "lucide-react";
import { useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";

const Sidebar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(AppContext);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const pathname = location.pathname.split("/")[1];

  return (
    <div
      className={`bg-whiteblue text-lightblue capitalize md:text-lg transition-all duration-100 ease-in-out  ${!isSideBarOpen ? "md:w-[15%]" : "md:w-[5%]"}  md:h-screen flex md:flex-col justify-between md:py-3 `}
    >
      <div className="flex flex-row justify-center items-center  p-3 md:p-0 md:flex-col">
        <h1 className="hidden md:block md:text-center md:text-xl lg:text-3xl text-primary-blue font-bold md:mb-4">
          {!isSideBarOpen ? "KaRt" : "K"}
        </h1>
        <h1 className="block md:hidden text-lg  sm:text-xl text-primary-blue font-bold">
          Kart
        </h1>
        <Button className="block md:hidden ml-2">
          <Menu />
        </Button>
        <div className="md:flex-col  w-full md:gap-3 hidden md:flex md:text-base lg:text-lg">
          <NavLink
            className={`flex gap-2 items-center ${isSideBarOpen && "justify-center"} ${pathname === "" && "bg-white text-[#2A4178] border-r-4 border-[#2A4178]"} hover:text-[#2A4178] px-3`}
            to={"/"}
          >
            <LayoutDashboard className="hidden lg:inline" />
            <span className={`${!isSideBarOpen ? "inline" : "hidden"} `}>
              dashboard
            </span>
          </NavLink>

          <NavLink
            className={`flex gap-2 items-center ${isSideBarOpen && "justify-center"} ${pathname === "products" && "bg-white text-[#2A4178] border-r-4 border-[#2A4178]"} hover:text-[#2A4178]  px-3`}
            to={"/products"}
          >
            <ShoppingBasket className="hidden lg:inline" />
            <span className={`${!isSideBarOpen ? "inline" : "hidden"}`}>
              Products
            </span>
          </NavLink>
          <NavLink
            className={`flex gap-2 items-center ${isSideBarOpen && "justify-center"} ${pathname === "create-product" && "bg-white text-[#2A4178] border-r-4 border-[#2A4178]"} hover:text-[#2A4178]  px-3`}
            to={"/create-product"}
          >
            <Plus className="hidden lg:inline" />
            <span className={`${!isSideBarOpen ? "inline" : "hidden"}`}>
              Add Product
            </span>
          </NavLink>
          <NavLink
            className={`flex gap-2 items-center ${isSideBarOpen && "justify-center"} ${pathname === "orders" && "bg-white text-[#2A4178] border-r-4 border-[#2A4178]"} hover:text-[#2A4178]  px-3`}
            to={"/orders"}
          >
            <Truck className="hidden lg:inline" />
            <span className={`${!isSideBarOpen ? "inline" : "hidden"}`}>
              Orders
            </span>
          </NavLink>
          <NavLink
            className={`flex gap-2 items-center  ${isSideBarOpen && "justify-center"} ${pathname === "setting" && "bg-white text-[#2A4178] border-r-4 border-[#2A4178]"} hover:text-[#2A4178]  px-3`}
            to={"/setting"}
          >
            <Settings className="hidden lg:inline" />
            <span className={`${!isSideBarOpen ? "inline" : "hidden"} `}>
              Setting
            </span>
          </NavLink>
        </div>
      </div>
      <div className="p-3 md:px-3 flex flex-row-reverse gap-1 md:flex-col justify-center md:gap-y-3">
        <Avatar size="lg" className="m-auto">
          <AvatarImage src="https://github.com/shadcn.pn" />
          <AvatarFallback className="bg-primary-blue text-md text-white">
            u
          </AvatarFallback>
        </Avatar>
        <Button
          onClick={() => toggleTheme()}
          className=" m-auto bg-primary-blue"
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </Button>
        <Button
          onClick={() => setIsSideBarOpen((is) => !is)}
          className="hidden lg:flex m-auto bg-primary-blue "
        >
          <MoveHorizontal />
          {!isSideBarOpen && "Minimize"}
        </Button>
        <Button className="m-auto text-white bg-red-500">
          <LogOut className="hidden lg:inline" />
          <span className={`${!isSideBarOpen ? "md:inline" : "md:hidden"}`}>
            Logout
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
