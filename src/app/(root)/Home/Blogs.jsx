"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// const BlogCard = ({ image, title, description, day, weekday }) => {
//   return (
//     <div className="flex-shrink-0 w-1/3 h-[500px] flex flex-col relative">
//       <div className="w-full h-[240px] rounded-[30px] relative overflow-hidden">
//         <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-[30px]" />
//         <div className="absolute inset-0 bg-black opacity-30 rounded-[30px]" />
//       </div>
//       <div className="w-[45px] h-[50px] rounded-b-[10px] flex flex-col justify-center items-center bg-white shadow-[4px_4px_15px_0px_rgba(0,0,0,0.25)] absolute left-[50px]">
//         <h4 className="text-[19.4px] font-medium">{day}</h4>
//         <p className="text-[16px] leading-tight font-normal">{weekday}</p>
//       </div>
//       <h3 className="text-white text-[27.6px] font-medium mt-[30px]">{title}</h3>
//       <p className="text-white text-[16px]/[26px] font-normal mt-[20px]">{description}</p>
//     </div>
//   );
// };

export const BlogCard = ({ image, title, description, day, weekday }) => {
  return (
    <div className=" h-[500px] flex flex-col relative">
      <div className=" h-[240px] rounded-[30px] relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-[30px]"
        />
        <div className="absolute inset-0 bg-black opacity-30 rounded-[30px]"></div>
      </div>
      <div className=" h-[50px]  rounded-[0px_0px_10px_10px] flex flex-col justify-center items-center bg-white shadow-[4px_4px_15px_0px_rgba(0,0,0,0.25)] absolute left-[50px]">
        <h4 className="h-5 text-2 text-[19.4px] font-medium">{day}</h4>
        <p className="text-3 text-[16px] leading-tight font-normal">
          {weekday}
        </p>
      </div>
      <div className="flex items-center">
        <h3 className=" text-white text-[27.6px] font-medium">
          {title}
        </h3>
        <div className="group">
          <svg
            className='inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-200"  '
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="24.5" fill="white" stroke="black" />
            <path
              d="M15 24C14.4477 24 14 24.4477 14 25C14 25.5523 14.4477 26 15 26V24ZM35.7071 25.7071C36.0976 25.3166 36.0976 24.6834 35.7071 24.2929L29.3431 17.9289C28.9526 17.5384 28.3195 17.5384 27.9289 17.9289C27.5384 18.3195 27.5384 18.9526 27.9289 19.3431L33.5858 25L27.9289 30.6569C27.5384 31.0474 27.5384 31.6805 27.9289 32.0711C28.3195 32.4616 28.9526 32.4616 29.3431 32.0711L35.7071 25.7071ZM15 25V26H35V25V24H15V25Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <p className=" text-5 text-[16px]/[26px] font-normal mt-[20px]">
        {description}
      </p>
    </div>
  );
};

const blogData = [
  {
    image: "/images/BlogPhoto1.jpg",
    title: "Ev alarkən qaçınmaq üçün ən yaxşı 10 səhv",
    description:
      "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
    day: "28",
    weekday: "Ç.A",
  },
  {
    image: "/images/BlogPhoto2.jpg",
    title: "Tez Satış üçün Evinizi Necə Hazırlamaq olar",
    description:
      "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
    day: "08",
    weekday: "B.E",
  },
  {
    image: "/images/BlogPhoto3.jpg",
    title: "İlk dəfə ev satanlar üçün 5 məsləhət",
    description:
      "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
    day: "26",
    weekday: "C",
  },
];

const Blogs = () => {
  const scrollRef = useRef(null);
  const [scrollStep, setScrollStep] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const updateScrollStep = () => {
      const container = scrollRef.current;
      if (!container) return;

      const card = container.querySelector("div");
      if (card) {
        const cardWidth = card.getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(container).gap || "0");
        setScrollStep(cardWidth + gap);
      }
    };

    updateScrollStep();
    window.addEventListener("resize", updateScrollStep);
    return () => window.removeEventListener("resize", updateScrollStep);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || scrollStep === 0) return;

    const interval = setInterval(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      let newIndex = index + 1;
      const nextScroll = newIndex * scrollStep;

      if (nextScroll > maxScrollLeft) {
        newIndex = 0;
      }

      container.scrollTo({
        left: newIndex * scrollStep,
        behavior: "smooth",
      });

      setIndex(newIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [index, scrollStep]);

  return (
    <>
      <section className="max-[426px]:hidden [background:linear-gradient(180deg,_#02836F_0%,_#001D19_100%)]">
        <div className="max-w-[1600px] mx-[auto] w-full items-center pt-[140px] px-[80px] max-[1025px]:px-[20px]">
          <p className="text-white text-[19.4px] font-medium tracking-[2.91px] uppercase">
            Trenddə nədir ?
          </p>
          <h2 className="mb-[40px] text-white text-[39.8px]/[47px] font-semibold mt-[30px]">
            Ən son Bloqlar və Yazılar
          </h2>

          <div>
            <Swiper
              loop={true}
              slidesPerView={2}
              speed={500}
              spaceBetween={20}
              breakpoints={{
                425: {
                  slidesPerView: 1
                },
                768: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 3
                }
              }}
            >
              {blogData.map((data, index) => (
                <>
                  <SwiperSlide key={index}>
                    <BlogCard
                      image={data.image}
                      title={data.title}
                      description={data.description}
                      day={data.day}
                      weekday={data.weekday}
                    />
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
        </div>
      </section >
    </>
  );
};

export default Blogs;
