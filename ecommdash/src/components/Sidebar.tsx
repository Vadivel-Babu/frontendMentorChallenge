import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const Sidebar = () => {
  return (
    <div className="bg-red-300 w-full md:max-w-max md:h-screen flex md:flex-col md:justify-between md:py-3 ">
      <div className=" md:flex md:flex-col space-y-1">
        <Avatar size="lg" className="m-auto">
          <AvatarImage src="https://github.com/shadcn.pn" />
          <AvatarFallback className="bg-orange-800 text-md text-white">
            u
          </AvatarFallback>
        </Avatar>
        <NavLink className={"hover:bg-yellow-500 px-1"} to={"/"}>
          dash
        </NavLink>

        <NavLink className={"hover:bg-yellow-500 px-1"} to={"/products"}>
          Products
        </NavLink>
        <NavLink className={"hover:bg-yellow-500 px-1"} to={"/create-product"}>
          Create Product
        </NavLink>
        <NavLink className={"hover:bg-yellow-500 px-1"} to={"/orders"}>
          Orders
        </NavLink>
        <NavLink className={"hover:bg-yellow-500 px-1"} to={"/setting"}>
          Setting
        </NavLink>
      </div>
      <div className="px-3">
        <Button>Logout</Button>
      </div>
    </div>
  );
};

export default Sidebar;
