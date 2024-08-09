import { Link } from "react-router-dom";

export const WaterMask = ({url}) => {
    return (
      <Link
        to={url}
        className="absolute right-[-5px] top-[-5px] h-[105px] w-[105px] overflow-hidden bg-transparent z-20"
      >
        <div className="tag relative h-full w-full">
          <div className="absolute left-[-32px] top-[19.2px] flex h-fit w-[200px] rotate-45 flex-col items-center justify-center gap-1 bg-primary-color px-3 py-1 uppercase">
            <span className="text-[8px] font-normal leading-3 text-[#fff]">
              powered by
            </span>
            <span className="text-xs font-bold leading-4 text-[#fff]">
              Exchange Car
            </span>
          </div>
        </div>
      </Link>
    );
  };