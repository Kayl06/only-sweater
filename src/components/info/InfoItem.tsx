import { HiArrowLongRight } from "react-icons/hi2";
import { IInfo } from "../../utils/Info";

function InfoItem({ title, date }: IInfo) {
  return (
    <div>
      <div className="info-item flex justify-between items-center mb-5">
        <div className="info__item_content">
          <h1 className="title text-2xl font-light mb-5">{title}</h1>
          <span className="date text-sm">{date}</span>
        </div>
        <div className="info__item__action hidden md:block relative">
          <span className="text-5xl text-gray-400">
            <HiArrowLongRight />
          </span>

          <div className="top-[2px] bottom-0 left-[18px] absolute rounded-full w-[45px] h-[45px] border border-dashed border-gray-300"></div>
        </div>
      </div>
      <div className="flex flex-row underline border border-gray-200 w-full mb-20"></div>
    </div>
  );
}

export default InfoItem;
