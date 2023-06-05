import Image from "next/image";
import UpOrDown from "./UpOrDown";

function FollowerCard({
  logoPath,
  type,
  account,
  follower,
  upOrDown,
  count,
  borderTopColor,
}) {
  return (
    <section
      className={`h-56 p-6 flex flex-col justify-between items-center bg-theme-dark-darkDesaturatedBlue border-t-4 border-solid ${borderTopColor} rounded-md text-theme-dark-desaturatedBlue`}
    >
      <div className="flex">
        <Image src={logoPath} alt={`${type} icon`} width={20} height={20} />
        <span className="ml-3 text-sm font-bold">{account}</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-primary-white text-6xl font-bold">
          {follower}
        </span>
        <span className="tracking-wide">{`${
          type === "instagram" ? "S U B S C R I B E R S" : "F O L L O W E R S"
        }`}</span>
      </div>
      <UpOrDown upOrDown={upOrDown} number={count} unit="Today" />
    </section>
  );
}

export default FollowerCard;
