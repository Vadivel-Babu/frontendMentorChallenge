import { NavLink, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  console.log(pathname);

  return (
    <div className="bg-whiteblue text-lightblue capitalize md:text-lg w-full md:w-[10%]  md:h-screen flex md:flex-col md:justify-between md:py-3 ">
      <div className=" md:flex md:flex-col">
        <h1 className="md:text-center md:text-3xl text-primary-blue font-bold md:mb-4">
          KaRt
        </h1>
        <div className="flex md:flex-col md:gap-3">
          <NavLink
            className={` ${pathname === "" && "bg-white text-[#2A4178] border-r-4 border-[#2A4178]"} hover:text-[#2A4178] px-3`}
            to={"/"}
          >
            dash
          </NavLink>

          <NavLink
            className={` ${pathname === "products" && "bg-white text-[#2A4178] border-r-4 border-[#2A4178]"} hover:text-[#2A4178]  px-3`}
            to={"/products"}
          >
            Products
          </NavLink>
          <NavLink
            className={` ${pathname === "create-product" && "bg-white text-[#2A4178] border-r-4 border-[#2A4178]"} hover:text-[#2A4178]  px-3`}
            to={"/create-product"}
          >
            Create Product
          </NavLink>
          <NavLink
            className={` ${pathname === "orders" && "bg-white text-[#2A4178] border-r-4 border-[#2A4178]"} hover:text-[#2A4178]  px-3`}
            to={"/orders"}
          >
            Orders
          </NavLink>
          <NavLink
            className={`${pathname === "setting" && "bg-white text-[#2A4178] border-r-4 border-[#2A4178]"} hover:text-[#2A4178]  px-3`}
            to={"/setting"}
          >
            Setting
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
        <Button className="m-auto bg-primary-blue">Logout</Button>
      </div>
    </div>
  );
};

export default Sidebar;
