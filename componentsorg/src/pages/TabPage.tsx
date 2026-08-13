import React, { useState } from "react";
import Tab from "../components/Tab";

const TabPage = () => {
  const [active, setActive] = useState<string>("not");
  const tabs = ["not", "ongoing", "done"];
  return (
    <div>
      <Tab active={active} tabs={tabs} onChange={setActive} />
    </div>
  );
};

export default TabPage;
