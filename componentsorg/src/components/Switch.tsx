import React from "react";

interface Switchprops {
  active: boolean;
  onSwitch: () => void;
}

const Switch = ({ active, onSwitch }: Switchprops) => {
  return (
    <div
      className={`relative w-20 h-10 rounded-full ${active ? "bg-gray-300" : "bg-amber-300"}`}
    >
      <div
        onClick={onSwitch}
        className={`absolute  transition-transform duration-200 ease-in-out   top-1 left-1  ${active ? "translate-x-0 bg-white" : "translate-x-10 bg-black"} hover:cursor-pointer size-8  rounded-full`}
      ></div>
    </div>
  );
};

export default Switch;
