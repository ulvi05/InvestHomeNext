import React, {memo}from "react";
import { GiBackwardTime } from "react-icons/gi";
import { AiFillFire } from "react-icons/ai";
import { TbCirclePercentageFilled } from "react-icons/tb";
// import { useTranslation } from "react-i18next";

const HouseTypeSelector = memo(({ activeType, setActiveType }) => {
  // const {t} =useTranslation()
  // const headingText =
  //   activeType === "enSon"
  //     ? t   ("Ən son siyahıya alınmış əmlaklar")
  //     : activeType === "popular"
  //     ? t("Popular əmlaklar")
  //     : t("Endirimli evlər")

    const headingText =
    activeType === "enSon"
      ? "Ən son siyahıya alınmış əmlaklar"
      : activeType === "popular"
      ? "Popular əmlaklar"
      : "Endirimli evlər"


  const descriptionText =
    "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.";

  return (
    <div className="flex px-[80px] m-auto justify-between items-center mb-6">
      <div>
        <p className="text-[var(--text-color-2)] text-[2.1rem] font-[700] leading-[2.9rem] py-[1rem]">
          {headingText}
        </p>
        <p className="text-[var(--text-color-3)] font-[400] w-[31rem] leading-[1.6rem]">
          {descriptionText}
        </p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => setActiveType("enSon")}
          className={`cursor-pointer flex items-center gap-[10px]  px-[24px] py-[12px] rounded-[6.25rem]  border border-[var(--primary-color)] transition-colors  duration-300 ease-in-out 
          ${
            activeType === "enSon"
              ? "bg-[var(--primary-color)] text-[var(--white)]"
              : "bg-[var(--white)] text-[var(--primary-color)]"
          }
          hover:bg-[var(--primary-color)] hover:text-[var(--white)] focus:bg-[var(--primary-color)] focus:text-[var(--white)] active:bg-[var(--primary-color)] active:text-[var(--white)]`}
        >
          <span className="text-[1.5rem] font-[500]"><GiBackwardTime/></span>
          <span className="font-[500] leading-[24px]">
             {/* {t("Ən son")} */}
             Ən son

          </span>
        </button>
        <button
          onClick={() => setActiveType("popular")}
          className={`cursor-pointer flex items-center gap-[10px] px-[24px] py-[12px] rounded-[6.25rem]  border border-[var(--primary-color)] transition-colors duration-300 ease-in-out 
          ${
            activeType === "popular"
              ? "bg-[var(--primary-color)] text-[var(--white)]"
              : "bg-[var(--white)] text-[var(--primary-color)] "
          }
          hover:bg-[var(--primary-color)] hover:text-[var(--white)] focus:bg-[var(--primary-color)] focus:text-[var(--white)] active:bg-[var(--primary-color)] active:text-[var(--white)]`}
        >
          <span>
          <AiFillFire className="text-[1.5rem]" /> 
          </span>
          <span  className="font-[500] leading-[24px]">
           {/* {t("Popular")} */}
           Popular

          </span>
        </button>
        <button
          onClick={() => setActiveType("endirimli")}
          className={`cursor-pointer flex items-center gap-[10px] px-[24px] py-[12px] rounded-[6.25rem]  border border-[var(--primary-color)] transition-colors duration-300 ease-in-out 
          ${
            activeType === "endirimli"
              ? "bg-[var(--primary-color)] text-[var(--white)]"
              : "bg-[var(--white)] text-[var(--primary-color)]"
          }
          hover:bg-[var(--primary-color)] hover:text-[var(--white)] focus:bg-[var(--primary-color)] focus:text-[var(--white)] active:bg-[var(--primary-color)] active:text-[var(--white)]`}
        >
          <span>
          <TbCirclePercentageFilled className="text-[1.5rem]" />
          </span>
          <span className="font-[500] leading-[24px]" >
             {/* {t("Endirimli")} */}
             Endirimli


          </span>
        </button>
      </div>
    </div>
  );
});

export default HouseTypeSelector;
