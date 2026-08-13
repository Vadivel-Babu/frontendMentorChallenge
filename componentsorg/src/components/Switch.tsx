import React, { useEffect, useState } from "react";
import { getSwitchSize } from "../helpers/switchHelper";

interface Switchprops {
  active: boolean;
  size: "sm" | "md" | "lg" | "xl";
  onSwitch: () => void;
}

const Switch = ({ active, onSwitch, size = "sm" }: Switchprops) => {
  const switchSize = getSwitchSize(size);

  return (
    <div
      onClick={onSwitch}
      style={{ width: switchSize?.width, height: switchSize?.height }}
      className={`relative rounded-full ${active ? "bg-gray-300" : "bg-amber-300"} hover:cursor-pointer`}
    >
      <div
        style={{
          width: switchSize?.thumbSize,
          height: switchSize?.thumbSize,
          top: switchSize?.position,
          left: switchSize?.position,
          transform: ` ${active ? "translateX(0)" : `translateX(${switchSize?.onPosition})`}`,
        }}
        className={`absolute  transition-transform duration-200 ease-in-out  ${active ? "translate-x-0 bg-white" : "translate-x-0 bg-black"}  rounded-full`}
      ></div>
    </div>
  );
};

export default Switch;
