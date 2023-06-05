import React from "react";
import UpIcon from "../public/icon-up.svg";
import DownIcon from "../public/icon-down.svg";

function UpOrDown({ upOrDown, number, unit }) {
  return (
    <div
      className={`flex items-center ${
        upOrDown === "up" ? "text-primary-limeGreen" : "text-primary-brightRed"
      }`}
    >
      {upOrDown === "up" ? <UpIcon /> : <DownIcon />}
      <span className="ml-2 font-bold">
        {number} {unit}
      </span>
    </div>
  );
}

export default UpOrDown;
