import Image from "next/image";
import UpOrDown from "./UpOrDown";

function TodayCard({ logoPath, label, type, number, upOrDown, percentage }) {
  return (
    <section
      className={`h-40 p-8 flex flex-col justify-between items-center bg-theme-dark-darkDesaturatedBlue rounded-md text-theme-dark-desaturatedBlue`}
    >
      <div className="w-[100%] flex justify-between">
        <span className="font-bold">{label}</span>
        <Image src={logoPath} alt={`${type} icon`} width={20} height={20} />
      </div>
      <div className="w-[100%] flex justify-between items-end">
        <span className="text-primary-white text-4xl font-bold">{number}</span>
        <UpOrDown upOrDown={upOrDown} number={percentage} unit="%" />
      </div>
    </section>
  );
}

export default TodayCard;
