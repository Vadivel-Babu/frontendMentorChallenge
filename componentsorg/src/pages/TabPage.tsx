import React, { useState } from "react";
import Tab from "../components/Tab";
import Backbtn from "../components/Backbtn";

const TabPage = () => {
  const [active, setActive] = useState<string>("not");
  const tabs = ["not", "ongoing", "done"];
  return (
    <div className="p-5">
      <Backbtn />
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-2xl text-center my-2">Tab</h1>
        <Tab active={active} tabs={tabs} onChange={setActive} />
      </div>
    </div>
  );
};

export default TabPage;
