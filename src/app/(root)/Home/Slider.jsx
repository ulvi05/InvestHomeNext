'use client';


import { useRef, useEffect } from "react";
// import { useTranslation, Trans } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Filter from "../../../components/ui/Filter";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import slider1 from "../../../../public/images/slider1.png";
import slider2 from "../../../../public/images/slider2.png";
import slider3 from "../../../../public/images/slider3.png";
import slider4 from "../../../../public/images/slider4.png";


const Slider = () => {
  const swiperRef = useRef(null);
  // const { t } = useTranslation();

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;

    if (swiperInstance) {
      swiperInstance.on("slideChangeTransitionStart", () => {
        const currentSlide = swiperInstance.slides[swiperInstance.activeIndex];
        const img = currentSlide.querySelector(".img");
        if (img) {
          img.style.transition = "transform 0.3s ease-out";
          img.style.transform = "translateX(-30px)";
        } 
      });

      swiperInstance.on("slideChangeTransitionEnd", () => {
        const currentSlide = swiperInstance.slides[swiperInstance.activeIndex];
        const img = currentSlide.querySelector(".img");
        if (img) {
          img.style.transition = "transform 0.5s ease-in";
          img.style.transform = "translateX(0px)";
        }
      });
    }
  }, []);

  return (
    <section id="slider" className="max-[426px]:hidden overflow-hidden">
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        speed={1800}
        spaceBetween={0}
        className="slider-header w-full h-[400px]
          [&_.swiper-pagination-bullet-active]:!w-[38px]
          [&_.swiper-pagination-bullet]:!w-[20px]
          [&_.swiper-pagination-bullet]:!h-[5px]
          [&_.swiper-pagination-bullet]:opacity-80
          [&_.swiper-pagination-bullet]:!rounded-full
          [&_.swiper-pagination]:!absolute
          [&_.swiper-pagination]:!top-[24px]
          [&_.swiper-pagination-bullet]:!bg-white
          [&_.swiper-pagination-bullet]:transition-all
          [&_.swiper-pagination-bullet]:duration-1500
          [&_.swiper-pagination-bullet]:ease-linear
          [&_.swiper-pagination-bullet-active]:!bg-[#3A0CA3]
          max-xl:h-[300px] max-lg:h-[250px] max-md:h-[200px] max-sm:h-[150px]"
      >
        {[
          slider1.src,
          slider2.src,
          slider3.src,
          slider4.src,
        ].map((src, index) => (
          <SwiperSlide key={index} className="sw-slide overflow-hidden ">
            <div
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.14) 9.13%, rgba(32, 32, 32, 0.70) 100%), url(${src})`, // Removed !important
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full h-full object-fill transition-transform duration-500 ease-in-out img"
            ></div>
          </SwiperSlide>
        ))}
        <div className="absolute top-[40px] left-[80px] z-10 text-white max-xl:top-[30px] max-xl:left-[60px] max-lg:top-[20px] max-lg:left-[40px] max-md:top-[15px] max-md:left-[20px] max-sm:top-[10px] max-sm:left-[10px]">
          <h5 className="font-medium text-[24px] tracking-[3.6px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] max-sm:tracking-[2px]">
            {/* <Trans i18nKey="slider.title" /> */}
          </h5>
          <h6 className="font-semibold text-[32px] leading-[34px] max-xl:text-[28px] max-xl:leading-[30px] max-lg:text-[24px] max-lg:leading-[26px] max-md:text-[20px] max-md:leading-[22px] max-sm:text-[16px] max-sm:leading-[18px]">
            {/* <Trans i18nKey="slider.subtitle"> */}
              Sevdiyiniz mükəmməl bir ev <br /> tapın..!
            {/* </Trans> */}
          </h6>
          <p className="text-[16px] leading-[26px] max-xl:text-[14px] max-xl:leading-[22px] max-lg:text-[12px] max-lg:leading-[20px] max-md:text-[10px] max-md:leading-[18px] max-sm:text-[8px] max-sm:leading-[14px]">
            {/* <Trans i18nKey="slider.description"> */}
              Bizimlə birlikdə, rahat və təhlükəsiz əməliyyatlar <br /> üçün
              etibarlı tərəfdaş əldə edirsiniz.
            {/* </Trans> */}
          </p>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 max-xl:w-[80%] max-lg:w-[90%] max-md:w-[95%] max-sm:w-[98%]">
          <Filter />
        </div>
      </Swiper>
    </section>
  );
};

export { Slider };
