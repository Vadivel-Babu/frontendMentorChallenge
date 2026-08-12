import React from "react";

interface Switchprops {
  active: boolean;
  onSwitch: () => void;
}

const Switch = ({ active, onSwitch }: Switchprops) => {
  return (
    <div className="relative w-fit">
      <div
        className={`w-20 h-10 rounded-full ${active ? "bg-gray-300" : "bg-amber-300"}`}
      ></div>
      <div
        onClick={onSwitch}
        className={`absolute transition-transform duration-300  top-1  ${active ? "translate-x-0" : "translate-x-full"} hover:cursor-pointer size-8 bg-black rounded-full`}
      ></div>
    </div>
  );
};

export default Switch;
