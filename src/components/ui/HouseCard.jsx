"use client";

import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { LuHeart } from "react-icons/lu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import HoverLabel from "../../app/(root)/Home/HomeTypes/HoverLabel";
import Link from "next/link";

const Imagesvg = "/icons/image.svg";
const PaintIcon = "/icons/paint.svg";
const ClipboardIcon = "/icons/clipboard.svg";
const MetroIcon = "/images/metro.png";
const SquareMetersIcon = "/icons/Square Meters.svg";
const ShareSvg = "/icons/share.svg";
const BedIcon = "/icons/guidance_hotel-room.svg";
const FloorIcon = "/icons/ph_building-light.svg";
const Manat = "/icons/fa6-solid_manat-sign.svg";
const VideoSvg = "/icons/lets-icons_video-fill.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HouseCard = ({ house }) => {
  const [fav, setFav] = useState([]);

  const isFavorite = fav.includes(house.id);

  const handleFavToggle = (e) => {
    e.preventDefault();
    if (isFavorite) {
      setFav(fav.filter((favId) => favId !== house.id));
    } else {
      setFav([...fav, house.id]);
    }
  };

  // const { t } = useTranslation();

  return (
    <>
      <Link href={`/house-detail/${house.id}`}>
        <div className="h-full w-full mb-3 card shadow-[0_2px_8px_rgba(0,0,0,0.15)] overflow-hidden rounded-[8px] select-none cursor-pointer">
          <div className="img-container overflow-hidden rounded-[8px]">
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                loop={true}
                speed={500}
                navigation={{
                  nextEl: `.custom-next-${house.id}`,
                  prevEl: `.custom-prev-${house.id}`,
                }}
                pagination={{
                  el: `.custom-pagination-${house.id}`,
                  clickable: true,
                  renderBullet: function (index, className) {
                    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 425;
                    const size = isMobile ? 5 : 8;
                    const margin = isMobile ? 2 : 4;

                    return (`
                    <span 
                        class="${className} bullet-dot" 
                        style="
                          margin: 0 ${margin}px; 
                          width: ${size}px; 
                          height: ${size}px; 
                          border-radius: 50%; 
                          display: inline-block; 
                          background-color: #D9D9D9CC;">
                      </span>`
                    );

                  }
                }}
                className="w-full"

              >
                {house.images.map((img, index) => {
                  return (
                    <>
                      <SwiperSlide key={index}>
                        <Image
                          src={img}
                          alt="house_image"
                          layout="responsive"
                          width={272}
                          height={236}
                        />
                      </SwiperSlide>
                    </>
                  )
                })}
              </Swiper>
              <div onClick={handleFavToggle} className="cursor-pointer max-[426px]:w-[24px] max-[426px]:h-[24px] w-[30px] h-[30px] flex items-center justify-center absolute bg-[rgba(246,246,246,0.62)] z-[10] rounded-full top-[13px] right-[11px]">
                <LuHeart
                  className={`${isFavorite ? "fill-red-500 text-red-500" : "fill-transparent"
                    } text-[20px] max-[426px]:text-[16px]`}
                />
              </div>
              <div onClick={(e) => e.preventDefault()} className="z-1 icons top-[12px] left-[8px] absolute flex flex-col max-[426px]:flex-row gap-[9px]">
                <HoverLabel iconSrc={PaintIcon} label="Təmirli" bgColor={"#FFC700"} />
                <HoverLabel iconSrc={ClipboardIcon} label="Çıxarış" bgColor={"#5DAA7E"} />
              </div>
              <div className="flex items-center gap-[7px] z-1 max-[769px]:bottom-[7px] bottom-[12px] max-[769px]:right-[50%] max-[769px]:translate-x-[50%] right-[8px] absolute arrow-dot-container">
                <div onClick={(e) => e.preventDefault()} className={`flex items-center custom-pagination-${house.id}`}></div>
                <div onClick={(e) => { e.preventDefault(); alert("im clicked!") }} className="max-[769px]:hidden flex items-center gap-[3px]">
                  <Image src={VideoSvg} alt="Invest Home" width={18} height={18} />
                  <span className="text-white text-[10px]">
                    1
                  </span>
                </div>
              </div>
              <div className="z-1 metro bottom-[12px] left-[8px] absolute max-[769px]:hidden flex items-center gap-[3px] bg-white py-[2.5px] px-[10px] rounded-[8px]">
                <div className="metro-icon">
                  <Image src={MetroIcon} alt="Invest Home" width={18} height={18} className="w-[18px]" />
                </div>
                <div className="flex metro-location">
                  <span className="font-[400] text-[var(--text-color-3)] text-[10px] whitespace-nowrap">N.Nərimanov</span>
                </div>
              </div>
            </div>

          </div>
          <div className="overflow-hidden content-container max-[769px]:mx-[5px] mx-[8px] max-[769px]:py-[14px] py-[16px] flex flex-col gap-[6px] max-[769px]:border-b-[0px] border-b-[1px] border-[rgba(0,0,0,0.2)]">
            <div className="flex justify-between items-center gap-[16px]">
              <div className="hidden max-[769px]:flex items-center gap-[5px]">
                <span className="text-[14px] font-[600]">{house.price}</span>
                <Image src={Manat} alt="Manat" width={10} height={10} />
              </div>
              <div className="name max-[769px]:hidden shrink min-w-0 overflow-hidden">
                <h3 className="whitespace-nowrap font-[500] text-[16px] text-[#111111]">
                  {house.title}
                </h3>
              </div>
              <div className="shrink-0 share cursor-pointer">
                <Image src={ShareSvg} alt="Invest Home" width={20} height={20} />
              </div>
            </div>
            <div className="flex items-center gap-[11px]">
              <div className="flex location-icon max-[769px]:hidden">
                <span className="text-[var(--text-color-3)] inline-block">
                  <CiLocationOn />
                </span>
              </div>
              <div className="location max-[769px]:hidden shrink min-w-0 overflow-hidden">
                <span className="font-[500] text-[var(--text-color-3)] text-[14px] whitespace-nowrap">{house.location}</span>
              </div>
              <div className="metro-icon hidden max-[769px]:block">
                <Image src={MetroIcon} alt="Invest Home" width={18} height={18} className="w-[18px]" />
              </div>
              <div className="metro-location hidden max-[769px]:block">
                <span className="font-[500] text-[var(--text-color-3)] text-[10px] whitespace-nowrap">N.Nərimanov</span>
              </div>
            </div>
            <div className="flex max-[769px]:gap-[8px] gap-[12px] items-center font-[300] text-[12px]">
              <div className="beds flex max-[769px]:gap-[4px] gap-[6px] items-center">
                <Image src={BedIcon} alt="Invest Home" width={10} height={10} />
                <span className="max-[769px]:text-[8px] font-[400] whitespace-nowrap">{house.beds} <span className="max-[769px]:hidden">beds</span></span>
              </div>
              <div className="floor flex max-[769px]:gap-[4px] gap-[6px] items-center">
                <Image src={FloorIcon} alt="Invest Home" width={10} height={10} />
                <span className="max-[769px]:text-[8px] font-[400] whitespace-nowrap">{house.floor}</span>
              </div>
              <div className="field flex max-[769px]:gap-[4px] gap-[6px] items-center">
                <Image src={SquareMetersIcon} alt="Invest Home" width={10} height={10} />
                <span className="max-[769px]:text-[8px] font-[400] whitespace-nowrap">{house.field}</span>
              </div>
            </div>
          </div>
          <div className="max-[769px]:hidden px-[8px] py-[16px] flex justify-between gap-[8px]">
            <div className="flex items-center gap-[8px] shrink min-w-0 overflow-hidden">
              <Image className="max-[1024px]:hidden" src={Imagesvg} alt="Invest Home" width={35} height={35} />
              <span className="whitespace-nowrap text-[14px] text-[#111] font-[500]">
                Əli Bağırov
              </span>
            </div>
            <div className="flex items-center gap-[5px] shrink min-w-0 overflow-hidden">
              <span className="text-[24px] font-[600] max-[1200]:text-[18px]">{house.price}</span>
              <Image src={Manat} alt="Manat" width={18} height={18} />
            </div>
          </div>
        </div>
      </Link >
    </>
  );
};

export default HouseCard;  