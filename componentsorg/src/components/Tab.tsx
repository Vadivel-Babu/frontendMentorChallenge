import React from "react";

interface TabProps {
  active: string;
  tabs: string[];
  onChange: (tab: string) => void;
}

const Tab = ({ active, tabs, onChange }: TabProps) => {
  return (
    <div className="flex border rounded-xl max-w-fit mx-auto  overflow-hidden">
      {tabs.map((tab, i) => (
        <p
          key={i}
          onClick={() => onChange(tab)}
          className={`${i !== 0 && "border-l"} p-3  ${active === tab && "bg-amber-200"} cursor-pointer`}
        >
          {tab}
        </p>
      ))}
    </div>
  );
};

export default Tab;
