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
} from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const [theme, setTheme] = useState("light");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const pathname = location.pathname.split("/")[1];
  console.log(pathname);

  return (
    <div
      className={`bg-whiteblue text-lightblue capitalize md:text-lg transition-all duration-100 ease-in-out  ${!isSideBarOpen ? "md:w-[15%]" : "md:w-[5%]"}  md:h-screen flex md:flex-col md:justify-between md:py-3 `}
    >
      <div className=" md:flex md:flex-col">
        <h1 className="md:text-center md:text-3xl text-primary-blue font-bold md:mb-4">
          {!isSideBarOpen ? "KaRt" : "K"}
        </h1>
        <div className="flex md:flex-col md:gap-3">
          <NavLink
            className={`flex gap-2 items-center ${isSideBarOpen && "justify-center"} ${pathname === "" && "bg-white text-[#2A4178] border-r-4 border-[#2A4178]"} hover:text-[#2A4178] px-3`}
            to={"/"}
          >
            <LayoutDashboard />
            <span className={`${!isSideBarOpen ? "inline" : "hidden"}`}>
              dashboard
            </span>
          </NavLink>

          <NavLink
            className={`flex gap-2 items-center ${isSideBarOpen && "justify-center"} ${pathname === "products" && "bg-white text-[#2A4178] border-r-4 border-[#2A4178]"} hover:text-[#2A4178]  px-3`}
            to={"/products"}
          >
            <ShoppingBasket />
            <span className={`${!isSideBarOpen ? "inline" : "hidden"}`}>
              Products
            </span>
          </NavLink>
          <NavLink
            className={`flex gap-2 items-center ${isSideBarOpen && "justify-center"} ${pathname === "create-product" && "bg-white text-[#2A4178] border-r-4 border-[#2A4178]"} hover:text-[#2A4178]  px-3`}
            to={"/create-product"}
          >
            <Plus />
            <span className={`${!isSideBarOpen ? "inline" : "hidden"}`}>
              Add Product
            </span>
          </NavLink>
          <NavLink
            className={`flex gap-2 items-center ${isSideBarOpen && "justify-center"} ${pathname === "orders" && "bg-white text-[#2A4178] border-r-4 border-[#2A4178]"} hover:text-[#2A4178]  px-3`}
            to={"/orders"}
          >
            <Truck />
            <span className={`${!isSideBarOpen ? "inline" : "hidden"}`}>
              Orders
            </span>
          </NavLink>
          <NavLink
            className={`flex gap-2 items-center ${isSideBarOpen && "justify-center"} ${pathname === "setting" && "bg-white text-[#2A4178] border-r-4 border-[#2A4178]"} hover:text-[#2A4178]  px-3`}
            to={"/setting"}
          >
            <Settings />
            <span className={`${!isSideBarOpen ? "inline" : "hidden"}`}>
              Setting
            </span>
          </NavLink>
        </div>
      </div>
      <div className="px-3 md:flex md:flex-col justify-center md:gap-y-3">
        <Avatar size="lg" className="m-auto">
          <AvatarImage src="https://github.com/shadcn.pn" />
          <AvatarFallback className="bg-primary-blue text-md text-white">
            u
          </AvatarFallback>
        </Avatar>
        <Button
          onClick={() =>
            setTheme((theme) => {
              const newTheme = theme === "light" ? "dark" : "light";
              return newTheme;
            })
          }
          className="m-auto bg-primary-blue"
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </Button>
        <Button
          onClick={() => setIsSideBarOpen((is) => !is)}
          className="m-auto bg-primary-blue"
        >
          <MoveHorizontal />
          {!isSideBarOpen && "Minimize"}
        </Button>
        <Button className="m-auto bg-primary-blue">
          <LogOut />
          <span className={`${!isSideBarOpen ? "inline" : "hidden"}`}>
            Logout
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
