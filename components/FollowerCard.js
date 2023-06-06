import Image from "next/image";
import TrendIndicator from "./TrendIndicator";

function FollowerCard({
  logoPath,
  type,
  account,
  follower,
  changeType,
  count,
  borderTopColor,
}) {
  return (
    <section>
      <div className={`w-full pt-1.5 rounded-md ${borderTopColor}`}>
        <div
          className="w-full h-56 p-6 flex flex-col justify-between items-center rounded-b-md 
        bg-theme-light-lightGrayishBlue dark:bg-theme-dark-darkDesaturatedBlue text-theme-light-darkGrayishBlue dark:text-theme-dark-desaturatedBlue
       transition duration-500"
        >
          <div className="flex items-center">
            <Image src={logoPath} alt={`${type} icon`} width={20} height={20} />
            <span className="ml-3 text-sm font-bold">{account}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-theme-light-veryDarkBlue dark:text-primary-white text-6xl font-bold">
              {follower}
            </span>
            <span className="tracking-wide">{`${
              type === "instagram"
                ? "S U B S C R I B E R S"
                : "F O L L O W E R S"
            }`}</span>
          </div>
          <TrendIndicator changeType={changeType} number={count} unit="Today" />
        </div>
      </div>
    </section>
  );
}

export default FollowerCard;
