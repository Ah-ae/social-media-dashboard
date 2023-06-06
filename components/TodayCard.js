import Image from "next/image";
import TrendIndicator from "./TrendIndicator";

function TodayCard({ logoPath, label, type, number, changeType, percentage }) {
  return (
    <section
      className={`laptop:h-36 h-40 p-8 flex flex-col justify-between items-center bg-theme-light-lightGrayishBlue 
      hover:bg-theme-light-cardHoverBg
      dark:bg-theme-dark-darkDesaturatedBlue dark:hover:bg-theme-dark-cardHoverBg text-theme-light-darkGrayishBlue dark:text-theme-dark-desaturatedBlue cursor-pointer
      transition duration-500 rounded-md`}
    >
      <div className="w-full flex justify-between">
        <span className="font-bold">{label}</span>
        <Image src={logoPath} alt={`${type} icon`} width={20} height={20} />
      </div>
      <div className="w-full flex justify-between items-end">
        <span className="text-theme-light-veryDarkBlue dark:text-primary-white text-4xl font-bold">
          {number}
        </span>
        <TrendIndicator changeType={changeType} number={percentage} unit="%" />
      </div>
    </section>
  );
}

export default TodayCard;
