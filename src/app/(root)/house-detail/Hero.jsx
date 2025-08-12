"use client"

import React, { useState } from 'react'
import { houseData } from "@/components/core/house";
import ShareWhite from "../../../../public/icons/ShareWhite.svg"
import Image from 'next/image'
import RoundedBlackButton from '@/components/ui/RoundedBlackButton'
import { LuHeart } from "react-icons/lu"
import Loading from './Loading';
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from '@/hooks/useMediaQuery';

const Hero = ({ id }) => {

  const isMobile = useMediaQuery('(max-width: 430px)');

  const house = houseData.find(h => h.id === Number(id));

  if (!house) {
    return Loading()
  }

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
    <section className='max-w-[1600px] mx-[auto]'>
      <div className='px-[80px] max-[1025px]:px-[20px] max-[431px]:px-[0]'>
        <div className='min-[431px]:p-[20px] min-[430px]:rounded-[20px] min-[431px]:bg-[rgba(255,255,255,0.50)] min-[431px]:shadow-[0px_4px_10px_0px_rgba(2,131,111,0.10)] flex flex-col gap-[30px] mt-[20px]'>
          {/* Title & buttons */}
          <div className='max-[431px]:px-[16px] flex justify-between items-start gap-4'>
            <h1 className='text-[#111] text-[24px] lg:text-[32px] leading-[1.2] font-medium max-[431px]:text-[14px]'>
              Satılır, yeni tikili, 3 otaq, 160 m2, Nərimanov
            </h1>

            <div className='flex flex-row items-center gap-[14px] max-[431px]:hidden'>
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

          {isMobile
            ?
            <div>
              <Swiper
                loop={false}
                slidesPerView={1}
                speed={500}
                spaceBetween={8}
              >
                {house.images.map((image) => {

                  return (
                    <SwiperSlide key={image.id}>
                      <div className='relative w-full h-[233px]'>
                        <Image
                          alt={"house_image"}
                          src={image}
                          fill={true}
                          className={`object-cover`}
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}

              </Swiper>
            </div>
            :
            <div className="grid grid-cols-4 grid-rows-2 gap-x-[20px] gap-y-[14px] max-[769px]:gap-x-[10px] max-[769px]:gap-y-[7px] w-full max-h-[434px]">
              {house.images.map((image, idx) => {
                return (
                  <>
                    <div key={idx} className={` ${idx === 0 ? "col-span-2 row-span-2" : ""} overflow-hidden relative rounded-[8px]`}>
                      <div className='aspect-[3/2]'>
                        <Image
                          alt={"house_image"}
                          src={image}
                          fill
                          className={`object-cover`}
                        />
                      </div>
                    </div>
                  </>
                )
              })}
            </div>}
        </div>
      </div>
    </section>
  );
};

export default Hero;