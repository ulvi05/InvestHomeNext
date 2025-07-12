"use client";


import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { LuHeart } from "react-icons/lu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import HoverLabel from "../../app/(root)/Home/HomeTypes/HoverLabel";

// Import SVGs as React components if your setup supports it (e.g., with @svgr/webpack)
// Otherwise, use the public folder for static assets and reference them by path
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

const HousesList = ({ house, customWidth }) => {
  const [fav, setFav] = useState([]);

  const isFavorite = fav.includes(house.id);

  const handleFavToggle = () => {
    if (isFavorite) {
      setFav(fav.filter((favId) => favId !== house.id));
    } else {
      setFav([...fav, house.id]);
    }
  };

  // const { t } = useTranslation();

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-next-arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-prev-arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };

  const sliderSettings = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    draggable: false,
    swipe: false,
    dotsClass: "custom-dots",
    customPaging: () => <div className="dot-circle"></div>,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <style>{`
        .custom-dots {
          display: flex !important;
          justify-content: center;
          align-items: center;
          gap: 4px;
          position: absolute;
          right: 40px;
          bottom: 12px;
          list-style: none;
        }

        .custom-dots li {
          display: inline-block;
        }

        .dot-circle {
          width: 0.5rem;
          height: 0.5rem;
          cursor: pointer;
          background-color: rgba(217, 217, 217, 0.5);
          border-radius: 50%;
          transition: background-color 0.3s ease;
        }

        .custom-dots li.slick-active .dot-circle {
          background-color: #d9d9d9cc;
        }
        .custom-next-arrow,
        .custom-prev-arrow {
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .custom-next-arrow {
          right: 10px !important;
        }
        .custom-prev-arrow {
          left: 10px !important;
          z-index: 10000;
        }

        .slider-container:hover .custom-next-arrow,
        .slider-container:hover .custom-prev-arrow {
          opacity: 1;
          pointer-events: auto;
        }

        .custom-next-arrow::before,
        .custom-prev-arrow::before {
          color: white;
          font-size: 20px;
        }
      `}</style>

      <div className={` mb-2 slider-container relative rounded-[0.5rem] shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.15)]`}
      style={{ width: customWidth }}>
        <Slider {...sliderSettings} className="rounded-t-[0.5rem]">
          {house.images.map((imgSrc, index) => (
            <div className="outline-none" key={index}>
              <Image
 src={imgSrc}
                alt={`${house.title} image`}
                width={customWidth}
                height={200}
                className="w-full h-[200px] object-cover rounded-t-[0.5rem]"
                priority={index === 0}
              />
            </div>
          ))}
        </Slider>

        <div
          onClick={handleFavToggle}
          className="cursor-pointer w-[30px] h-[30px] flex items-center justify-center absolute bg-[rgba(246,246,246,0.62)] z-[10] rounded-full top-[13px] right-[11px]"
        >
          <LuHeart
            className={`${
              isFavorite ? "fill-red-500 text-red-500" : "fill-transparent"
            } text-[1.2rem]`}
          />
        </div>

        <div className="absolute z-[10] top-[13px] left-[11px] flex flex-col gap-[6px]">
          {/* <HoverLabel iconSrc={PaintIcon}  label={t("Təmirli")} bgColor={"#FFC700"}/> */}
          <HoverLabel iconSrc={PaintIcon} label="Təmirli" bgColor={"#FFC700"} />

          {/* <HoverLabel iconSrc={ClipboardIcon} label={t("Çıxarış")} bgColor={"#5DAA7E"} /> */}
          <HoverLabel iconSrc={ClipboardIcon} label="Çıxarış" bgColor={"#5DAA7E"} />

        </div>

        <div className="absolute z-[10] top-[170px] left-[11px] px-[10px] py-[3px] rounded-[0.5rem] bg-[#fff] flex items-center gap-[3px] justify-center w-max">
          <Image src={MetroIcon} alt="Invest Home" width={18} height={18} className="w-[18px]" />
          <span className="text-[10px] font-[400] text-[#808080]">
 N.Nərimanov
          </span>
        </div>
        <div className="absolute z-[10] top-[182px] right-[11px] flex items-center gap-[4px]">
          <Image src={VideoSvg} alt="Invest Home" width={18} height={18} />
          <span className="text-white text-[10px] font-medium leading-[15px]">
            1
          </span>
 </div>

        <div className="px-[8px]">
          <div className="flex items-center justify-between py-[12px]">
            <p className="font-[500] text-[#111]">{house.title}</p>
            <Image src={ShareSvg} alt="Invest Home" width={18} height={18} />
          </div>

          <div className="flex items-center gap-[6px] py-[3px]">
            <span className="text-[var(--text-color-3)]">
              <CiLocationOn />
            </span>
            <span className="font-[500] text-[var(--text-color-3)] text-[14px]">
              {house.location}
            </span>
          </div>

          <div className="text-[0.75rem] font-[300] text-[var(--text-color-6)] flex justify-between w-full py-[12px] leading-[16px]">
            <div className="flex justify-between w-[73%]">
              <div className="flex items-center gap-[6px]">
                <Image src={BedIcon} alt="Invest Home" width={18} height={18} />
                <span>{house.beds} beds</span>
              </div>
              <div className="flex items-center gap-[6px]">
                <Image src={FloorIcon} alt="Invest Home" width={18} height={18} />
                <span>{house.floor}</span>
              </div>
              <div className="flex items-center gap-[6px]">
                <Image src={SquareMetersIcon} alt="Invest Home" width={18} height={18} />
                <span>{house.field}</span>
              </div>
            </div>
            <div>
              <span className="text-[0.75rem] text-[var(--text-color-6)]">
                {house.time}
              </span>
            </div>
          </div>
        </div>

        <hr className="w-[92%] mx-[11px] border-[0.05rem] border-[#E5E5E5]" />

        <div className="flex items-center justify-between px-[16px] pb-[16px] pt-[8px]">
          <div className="flex items-center gap-[0.5rem]">
            <Image src={Imagesvg} alt="Invest Home" width={18} height={18} />
            <span className="text-[12px] text-[#111] font-[500]">
              Əli Bağırov
            </span>
          </div>
          <div className="font-[600] text-[24px] text-black gap-[6px] flex items-center  ">
            {house.price}
            <Image src={Manat} alt="Manat" width={18} height={18} />
 </div>
        </div>
      </div>
    </>
  );
};

export default HousesList;
