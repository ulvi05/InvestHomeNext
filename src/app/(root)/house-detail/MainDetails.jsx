"use client"

import React, { useState } from 'react'
import ShareWhite from "../../../../public/icons/ShareWhite.svg"
import Image from 'next/image'
import RoundedBlackButton from '@/components/ui/RoundedBlackButton'
import { LuHeart } from "react-icons/lu"
import HouseDetailsPhoto1 from "../../../../public/images/HouseDetailsPhoto1.png"
import HouseDetailsPhoto2 from "../../../../public/images/HouseDetailsPhoto2.png"
import HouseDetailsPhoto3 from "../../../../public/images/HouseDetailsPhoto3.png"
import HouseDetailsPhoto4 from "../../../../public/images/HouseDetailsPhoto4.png"
import HouseDetailsPhoto5 from "../../../../public/images/HouseDetailsPhoto5.png"

const MainDetails = (house) => {
  const [fav, setFav] = useState([]);
  const isFavorite = fav.includes(house.id);

  const handleFavToggle = () => {
    if (isFavorite) {
      setFav(fav.filter((favId) => favId !== house.id));
    } else {
      setFav([...fav, house.id]);
    }
  };

  return (
    <div className='max-w-full mx-[20px] lg:mx-[80px] rounded-[20px] bg-[rgba(255,255,255,0.50)] shadow-[0px_4px_10px_0px_rgba(2,131,111,0.10)] px-[20px] py-[20px] flex flex-col gap-[30px] mt-[20px]'>

      {/* Title & buttons */}
      <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4'>
        <h1 className='text-[#111] text-[24px] lg:text-[32px] leading-[1.2] font-medium'>
          Satılır, yeni tikili, 3 otaq, 160 m2, Nərimanov
        </h1>

        <div className='flex flex-row items-center gap-[14px]'>
          <RoundedBlackButton
            icon={<Image src={ShareWhite} alt="Share" width={20} height={20} />}
            backgroundColor="#02836F"
          />
          <div onClick={handleFavToggle}>
            <RoundedBlackButton
              icon={
                <LuHeart
                  className={`${isFavorite ? "fill-red-500 text-red-500" : "fill-transparent"} text-[1.2rem]`}
                />
              }
              backgroundColor="#02836F"
            />
          </div>
        </div>
      </div>

      {/* Image layout */}
      <div className="w-full flex flex-row lg:flex-row justify-between gap-[24px]">
        {/* Main big image */}
        <div className="relative w-full lg:w-[604px] h-[300px] md:h-[400px] lg:h-[434px] rounded-xl overflow-hidden ">
          <Image
            src={HouseDetailsPhoto1}
            alt="Main house"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex flex-col gap-y-[20px] justify-between w-[55%] h-[300px] md:h-[400px] lg:h-[434px]">
          <div className="grid grid-cols-2 gap-[20px] h-1/2">
            {[HouseDetailsPhoto2, HouseDetailsPhoto3].map((src, i) => (
              <div key={i} className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-[20px] h-1/2">
            {[HouseDetailsPhoto4, HouseDetailsPhoto5].map((src, i) => (
              <div key={i} className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt={`Thumbnail ${i + 3}`}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDetails;
