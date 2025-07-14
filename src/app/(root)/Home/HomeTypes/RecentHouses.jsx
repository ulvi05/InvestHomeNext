'use client';

import 'slick-carousel/slick/slick.css';
import { useEffect, useMemo, useState, useRef } from "react";
import Slider from "react-slick";
import { houseData } from "../../../../components/core/house";
import HousesList from "../../../../components/ui/HouseCardSmaller";
import HouseTypeSelector from "./HouseTypeSelector";
import Link from "next/link";
// import { useTranslation } from "react-i18next";

const RecentHouses = () => {
  // const {t}=useTranslation()
  const [activeType, setActiveType] = useState("enSon");
  const [filteredData, setFilteredData] = useState([]);
  const [sliderMoved, setSliderMoved] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (activeType === "enSon") {
      setFilteredData(houseData);
    } else {
      setFilteredData(houseData.filter((house) => house.type === activeType));
    }
    setSliderMoved(false);
  }, [activeType]);

  const settings = useMemo(
    () => ({
      infinite: true,
      arrows: false,
      swipeToSlide: true,
      slidesToShow: 4.55,
      beforeChange: () => setSliderMoved(true),
        responsive: [
        {
          breakpoint: 1470, // xl
          settings: {
            slidesToShow: 4.2,
          },
        },
        {
          breakpoint: 1360, // lg
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1290, // md
          settings: {
            slidesToShow: 3.5,
          },
        },
        {
          breakpoint: 1150, // md
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1050, // md
          settings: {
            slidesToShow: 2.5,
          },
        },
        {
          breakpoint: 870, // md
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    }),
    [sliderMoved]
  );


  return (
    <div>
      <div>
        <HouseTypeSelector
          activeType={activeType}
          setActiveType={setActiveType}
        />
      </div>
      <div className="py-8 flex flex-col px-[80px] overflow-hidden">
        <div className="relative overflow-hidden">
          <div className="transition-all duration-300 gap-[24px]">
            <Slider ref={sliderRef} {...settings}>
              {filteredData.map((house, index) => (
                <div
                  key={house.id}
                  className={` ${!sliderMoved && index === 0 ? "" : ""}`}
                >
                  <HousesList house={house} 
                  customWidth={272}/>
                  {/* <TypeOfHousesList house={house} /> */}
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="flex cursor-pointer justify-center items-center my-[3rem]  hover:text-[var(--primary-color)] transition-all duration-300 ease-in">
          <Link
            href={`/${activeType}`}
            className="text-[var(--primary-color)] border border-[var(--primary-color)] w-[10rem] h-[3rem] flex justify-center items-center rounded-[6.25rem] hover:bg-[var(--primary-color)] hover:text-[var(--white)] transition-all duration-300 ease-in"
          >
            {/* {t("Hamısına bax")} */}
            Hamısına bax
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentHouses;
