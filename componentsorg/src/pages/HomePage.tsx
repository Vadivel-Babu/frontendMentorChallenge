import React from "react";
import NavCard from "../components/NavCard";

const navArr: any = [{ name: "switch" }, { name: "tab" }, { name: "modal" }];

const HomePage = () => {
  return (
    <div className="flex gap-1 w-full h-full bg-transparent p-5">
      {navArr.map((nav: any) => (
        <NavCard key={nav} text={nav.name} />
      ))}
    </div>
  );
};

export default HomePage;
