import UpIcon from "../public/icon-up.svg";
import DownIcon from "../public/icon-down.svg";

function TrendIndicator({ changeType, number, unit }) {
  return (
    <div
      className={`flex items-center ${
        changeType === "up"
          ? "text-primary-limeGreen"
          : "text-primary-brightRed"
      }`}
    >
      {changeType === "up" ? <UpIcon /> : <DownIcon />}
      <span className="ml-2 font-bold">
        {number} {unit}
      </span>
    </div>
  );
}

export default TrendIndicator;
