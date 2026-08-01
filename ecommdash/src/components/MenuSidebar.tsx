import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const MenuSidebar = ({ open, handleMenu }) => {
  return (
    <Drawer open={open} onOpenChange={() => handleMenu(!open)} direction="left">
      <DrawerTrigger>
        <Button>
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-primary-blue border-primary-blue">
        <DrawerHeader className="flex-row justify-between items-center">
          <DrawerTitle className="text-xl text-white">Blog</DrawerTitle>
          <DrawerClose>
            <Button className="bg-primary-blue">
              <X />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <div className="text-white flex flex-col gap-2 text-lg  px-5">
          <NavLink
            to={"/"}
            className={"hover:text-lightblue"}
            onClick={() => handleMenu(!open)}
          >
            Home
          </NavLink>
          <NavLink
            to={"/users"}
            className={"hover:text-lightblue"}
            onClick={() => handleMenu(!open)}
          >
            Users
          </NavLink>
          <NavLink
            to={"/blogs"}
            className={"hover:text-lightblue"}
            onClick={() => handleMenu(!open)}
          >
            Blogs
          </NavLink>
          <NavLink
            to={"/blogs"}
            className={"hover:text-lightblue"}
            onClick={() => handleMenu(!open)}
          >
            Setting
          </NavLink>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuSidebar;
