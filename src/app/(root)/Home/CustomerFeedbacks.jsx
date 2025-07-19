'use client';


import React, { useState } from "react";
import Feedback from "@/components/ui/Feedback";
import CustomerFirangiz from "../../../../public/icons/CustomerFirangiz.svg";
import CustomerMusa from "../../../../public/icons/CustomerMusa.svg";
import CustomerMaryam from "../../../../public/icons/CustomerMaryam.svg";
import FourStars from "../../../../public/icons/4stars.svg"
import FiveStars from "../../../../public/icons/5stars.svg"

const feedbacks = [
  <Feedback key={0} name="Firəngiz Babayeva" image={CustomerFirangiz} stars={FourStars}
    description="Mən çox tövsiyə edirəm İnvesthome.az Onlar ehtiyaclarımıza diqqət yetirirdi və bizə mükəmməl evi tapmaq üçün yorulmadan çalışırdılar. Yeni məkanımızdan daha xoşbəxt ola bilməzdik!" />,
  <Feedback key={1} name="Musa Kazimov" image={CustomerMusa} stars={FiveStars}
    description="Mən çox tövsiyə edirəm İnvesthome.az Onlar ehtiyaclarımıza diqqət yetirirdi və bizə mükəmməl evi tapmaq üçün yorulmadan çalışırdılar. Yeni məkanımızdan daha xoşbəxt ola bilməzdik!" />,
  <Feedback key={2} name="Məryəm Mammadli" image={CustomerMaryam} stars={FourStars}
    description="Mən çox tövsiyə edirəm İnvesthome.az Onlar ehtiyaclarımıza diqqət yetirirdi və bizə mükəmməl evi tapmaq üçün yorulmadan çalışırdılar. Yeni məkanımızdan daha xoşbəxt ola bilməzdik!" />,
];

const CustomerFeedbacks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <section className="max-w-[1600px] mx-auto">
        <div className="w-auto m-auto h-auto mt-[267px] mb-[127px] flex flex-row justify-between px-[80px]">
          <div className="w-[415px] h-auto flex flex-col justify-center items-start">
            <h2 className="text-2 text-[39.8px]/[47px] font-semibold mt-[44px]">
              Baxın Müştərilərimiz Nə Deyir!
            </h2>
            <p className="text-2 text-[16px]/[26px] font-normal mt-[30px]">
              Fusce venenatis tellus a felis scelerisque, non pulvinar est
              pellentesque.{" "}
            </p>

            {/* Controls */}
            <div className="w-full h-auto flex flex-row items-center gap-[31.62px] mt-[60px]">
              {/* Previous Slide Button */}
              <button
                type="button"
                onClick={prevSlide}
                className="z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
              >
                <div className="group relative inline-block w-[50px] h-[50px]">
                  {/* Default SVG */}
                  <svg
                    className="opacity-100 group-hover:opacity-0 transition-opacity duration-200 absolute top-0 left-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <circle
                      cx="25"
                      cy="25"
                      r="24.5"
                      transform="rotate(180 25 25)"
                      fill="white"
                      stroke="#02836F"
                    />
                    <path
                      d="M35 26C35.5523 26 36 25.5523 36 25C36 24.4477 35.5523 24 35 24V26ZM14.2929 24.2929C13.9024 24.6834 13.9024 25.3166 14.2929 25.7071L20.6569 32.0711C21.0474 32.4616 21.6805 32.4616 22.0711 32.0711C22.4616 31.6805 22.4616 31.0474 22.0711 30.6569L16.4142 25L22.0711 19.3431C22.4616 18.9526 22.4616 18.3195 22.0711 17.9289C21.6805 17.5384 21.0474 17.5384 20.6569 17.9289L14.2929 24.2929ZM35 24H15V26H35V24Z"
                      fill="#02836F"
                    />
                  </svg>

                  {/* Hover SVG */}
                  <svg
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-0 left-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <circle
                      cx="25"
                      cy="25"
                      r="24.5"
                      transform="rotate(180 25 25)"
                      fill="#02836F"
                      stroke="#02836F"
                    />
                    <path
                      d="M35 26C35.5523 26 36 25.5523 36 25C36 24.4477 35.5523 24 35 24V26ZM14.2929 24.2929C13.9024 24.6834 13.9024 25.3166 14.2929 25.7071L20.6569 32.0711C21.0474 32.4616 21.6805 32.4616 22.0711 32.0711C22.4616 31.6805 22.4616 31.0474 22.0711 30.6569L16.4142 25L22.0711 19.3431C22.4616 18.9526 22.4616 18.3195 22.0711 17.9289C21.6805 17.5384 21.0474 17.5384 20.6569 17.9289L14.2929 24.2929ZM35 25V26H15V25V24H35V25Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </button>

              {/* Next Slide Button */}
              <button
                type="button"
                onClick={nextSlide}
                className="z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
              >
                <div className="group relative inline-block w-[50px] h-[50px]">
                  {/* Default SVG */}
                  <svg
                    className="opacity-100 group-hover:opacity-0 transition-opacity duration-200 absolute top-0 left-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <circle
                      cx="25"
                      cy="25"
                      r="24.5"
                      fill="white"
                      stroke="#02836F"
                    />
                    <path
                      d="M15 24C14.4477 24 14 24.4477 14 25C14 25.5523 14.4477 26 15 26V24ZM35.7071 25.7071C36.0976 25.3166 36.0976 24.6834 35.7071 24.2929L29.3431 17.9289C28.9526 17.5384 28.3195 17.5384 27.9289 17.9289C27.5384 18.3195 27.5384 18.9526 27.9289 19.3431L33.5858 25L27.9289 30.6569C27.5384 31.0474 27.5384 31.6805 27.9289 32.0711C28.3195 32.4616 28.9526 32.4616 29.3431 32.0711L35.7071 25.7071ZM15 26H35V24H15V26Z"
                      fill="#02836F"
                    />
                  </svg>

                  {/* Hover SVG */}
                  <svg
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-0 left-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <circle
                      cx="25"
                      cy="25"
                      r="24.5"
                      fill="#02836F"
                      stroke="#02836F"
                    />
                    <path
                      d="M15 24C14.4477 24 14 24.4477 14 25C14 25.5523 14.4477 26 15 26V24ZM35.7071 25.7071C36.0976 25.3166 36.0976 24.6834 35.7071 24.2929L29.3431 17.9289C28.9526 17.5384 28.3195 17.5384 27.9289 17.9289C27.5384 18.3195 27.5384 18.9526 27.9289 19.3431L33.5858 25L27.9289 30.6569C27.5384 31.0474 27.5384 31.6805 27.9289 32.0711C28.3195 32.4616 28.9526 32.4616 29.3431 32.0711L35.7071 25.7071ZM15 25V26H35V25V24H15V25Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div
            id="indicators-carousel"
            className="relative w-full mt-[20px]"
            data-carousel="static"
          >
            {/* Carousel wrapper */}
            <div className="relative overflow-hidden bg-transparent md:h-96">
              {feedbacks.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === activeIndex ? "opacity-100 z-20" : "opacity-0 z-10"
                    }`}
                >
                  <div className="absolute block right-[20px] ">{img}</div>
                </div>
              ))}
            </div>

            {/* Indicators */}
            <div className="absolute top-89 right-65 z-30 flex flex-col gap-[10px] rotate-270">
              {feedbacks.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="40"
                    viewBox="0 0 4 40"
                    fill="none"
                  >
                    <path
                      d="M2 142L2 2"
                      stroke={idx === activeIndex ? "#808080" : "#AAAAAA"}
                      strokeWidth="4"
                      strokeLinecap="round"
                      opacity={idx === activeIndex ? "1" : "0.5"}
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerFeedbacks;
