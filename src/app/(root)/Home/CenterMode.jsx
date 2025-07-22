'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import {
  All,
  Building,
  Garden,
  Land,
  Neighbour,
  Office,
  Popular,
  Rent,
  Sale,
  Store,
} from "../../../components/core/Svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

export const SampleNextArrow = ({ swiperRef }) => {
  return (
    <button
      className="cursor-pointer" onClick={() => swiperRef.current?.slideNext()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="42"
        viewBox="0 0 21 42"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.7746 22.2442L7.87489 32.144L5.40039 29.6695L14.0629 21.007L5.40039 12.3445L7.87489 9.87L17.7746 19.7697C18.1027 20.0979 18.287 20.543 18.287 21.007C18.287 21.471 18.1027 21.9161 17.7746 22.2442Z"
          fill="#02836F"
        />
      </svg>
    </button>
  );
}

export const SamplePrevArrow = ({ swiperRef }) => {
  return (
    <button
      className="cursor-pointer" onClick={() => swiperRef.current?.slidePrev()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="42"
        viewBox="0 0 21 42"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.22536 19.7558L13.1251 9.856L15.5996 12.3305L6.93711 20.993L15.5996 29.6555L13.1251 32.13L3.22536 22.2303C2.89729 21.9021 2.71298 21.457 2.71298 20.993C2.71298 20.529 2.89729 20.0839 3.22536 19.7558Z"
          fill="#02836F"
        />
      </svg>
    </button>
  );
}

const categories = [
  { id: 1, label: "Bütün", icon: All },
  { id: 2, label: "Satılıq", icon: Sale },
  { id: 3, label: "Kirayə", icon: Rent },
  { id: 4, label: "Populyar elanlar", icon: Popular },
  { id: 5, label: "Qonşuluq əmlakları", icon: Neighbour },
  { id: 6, label: "Mənzil", icon: Building },
  { id: 7, label: "Bağ Evi", icon: Garden },
  { id: 8, label: "Obyekt", icon: Store },
  { id: 9, label: "Torpaq", icon: Land },
  { id: 10, label: "Ofis", icon: Office },
];

function CenterMode() {
  const [activeId, setActiveId] = useState(1);
  const swiperRef = useRef(null);

  const settings = {
    className: "center-btns",
    infinite: true,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    variableWidth: true,
  };

  return (
    <>
      <section className="max-w-[1600px] mx-auto max-[426px]:hidden px-[80px] max-[1024]:px-[40px] max-[426]:px-[16px]">
        <div className="w-full flex justify-start mb-10 md:mb-[63px] mt-8 md:mt-12">
          <div className="flex gap-[12px] items-center relative w-full max-w-full md:max-w-[902px]">
            <SamplePrevArrow swiperRef={swiperRef} />
            <Swiper
              loop={false}
              slidesPerView="auto"
              speed={500}
              spaceBetween={8}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {categories.map((cat) => {
                const isActive = activeId === cat.id;
                const Icon = cat.icon;

                return (
                  <SwiperSlide key={cat.id} className="!w-auto">
                    <div
                      onClick={() => setActiveId(cat.id)}
                      className={`border border-[#FAFAFA] rounded-[8px] py-[11px] px-[20px] flex items-center gap-[8px] cursor-pointer select-none
            ${isActive
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-black border-[#E9E9E9] hover:bg-primary hover:text-white hover:border-primary"
                        }
          `}
                    >
                      <Icon isActive={isActive} />
                      <span className="font-[500] text-[12px] md:text-[14px] whitespace-nowrap">
                        {cat.label}
                      </span>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <SampleNextArrow swiperRef={swiperRef} />
          </div>
        </div>
      </section>
    </>
  );
}

export default CenterMode;
