import Iphone15Pro from "../../../../public/images/Iphone15Pro.png";
import CircleText from "../../../../public/images/circle-text.svg";
import Image from "next/image";

const InfoDiv = ({ icon, header, text }) => {
  return (
    <div className="px-[34px] py-[42px] rounded-[30px] shadow-[4px_10px_30px_0px_rgba(0,_0,_0,_0.06)] flex flex-row gap-[26px] bg-white mt-[60px] border-[3px] border-solid border-primary">
      <div className="h-full flex justify-center items-center">
        {icon}
      </div>
      <div className="flex flex-col justify-center items-start pr-[30px]">
        <h4 className="text-primary text-[19.4px] font-medium line-clamp-1">{header}</h4>
        <p className="text-3 text-[16px]/[26px] font-normal line-clamp-2">{text}</p>
      </div>
    </div>
  );
};

const WhoAreWe = () => {
  return (
    <>
      <section className="mt-[140px] max-[431px]:hidden max-w-[1600px] mx-auto">
        <div className="px-[80px] max-[1025px]:px-[20px] max-[431px]:px-[16px]">
          <div>
            <span className="text-primary text-[20px] font-[400] leading-[24px]">
              BİZ KİMİK ?
            </span>
            <div>
              <h2 className="text-2 text-[34px] font-semibold mt-[20px]">
                Müvafiq daşınmaz əmlakın tapılmasında fiziki şəxslərə köməklik.
              </h2>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="max-[769px]:basis-full basis-1/2 flex flex-col justify-between">
              <InfoDiv
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="none"
                  >
                    <path
                      d="M30.531 39.7251H19.1277C18.3736 39.7251 17.7483 39.0947 17.7483 38.3346C17.7483 37.5745 18.3736 36.9441 19.1277 36.9441H30.531C32.4989 36.9441 34.4301 35.2939 34.7612 33.3287L37.2074 18.5712C37.4281 17.2363 36.6926 15.3265 35.6626 14.4922L22.9165 4.22128C21.4451 3.03474 18.9989 3.03472 17.546 4.20273L4.80009 14.4922C3.75172 15.345 3.03442 17.2363 3.25513 18.5712L3.77012 21.7042C3.89886 22.4643 3.38389 23.1874 2.62981 23.2986C1.87572 23.4469 1.17683 22.9093 1.04808 22.1492L0.533097 19.0347C0.146858 16.7357 1.25042 13.7878 3.07126 12.3232L15.8171 2.03349C18.2816 0.0311937 22.1624 0.049752 24.6454 2.05205L37.3913 12.3232C39.1938 13.7878 40.2973 16.7357 39.9295 19.0347L37.4833 33.7922C36.9315 37.0737 33.8232 39.7251 30.531 39.7251Z"
                      fill="#02836F"
                    />
                    <path
                      d="M7.35738 40.0773C6.60329 40.0773 5.99634 39.4655 5.97795 38.7239C5.92277 36.221 4.28587 34.571 1.80291 34.5153C1.04882 34.4968 0.441854 33.8665 0.460246 33.0878C0.478638 32.3276 1.08559 31.7344 1.83967 31.7344H1.87644C5.8308 31.8271 8.66324 34.6637 8.7368 38.6497C8.7552 39.4099 8.14823 40.0588 7.39415 40.0773C7.37575 40.0773 7.37577 40.0773 7.35738 40.0773Z"
                      fill="#02836F"
                    />
                    <path
                      d="M12.8751 40.0777C12.121 40.0777 11.4956 39.4659 11.4956 38.7058C11.4772 37.4821 11.2749 36.3141 10.9071 35.2203C9.96906 32.5135 7.9643 30.511 5.27901 29.5469C4.19386 29.1576 3.03515 28.9538 1.82125 28.9538C1.06716 28.9538 0.441842 28.3235 0.460235 27.5448C0.460235 26.7847 1.08557 26.1729 1.83966 26.1729H1.85805C3.38462 26.1914 4.8376 26.4509 6.19863 26.933C9.67479 28.1752 12.2681 30.7893 13.5004 34.2933C13.9786 35.6652 14.2361 37.1484 14.2545 38.6687C14.2545 39.4474 13.6476 40.0777 12.8751 40.0777Z"
                      fill="#02836F"
                    />
                    <path
                      d="M1.83924 40.541C0.809264 40.541 0 39.7067 0 38.687C0 37.6673 0.827656 36.833 1.83924 36.833C2.85082 36.833 3.67847 37.6673 3.67847 38.687C3.67847 39.7067 2.86921 40.541 1.83924 40.541Z"
                      fill="#02836F"
                    />
                  </svg>
                }
                header="Ev tapmaq bu qədər asan!"
                text="İstədiyiniz əmlak növünü seçərək, sizə uyğun variantları sürətli şəkildə əldə edin."
              />
              <InfoDiv
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                  >
                    <path
                      d="M42 15.2362V28.9162C42 31.1562 40.6791 33.2362 38.5437 34.3762L25.4672 41.2362C23.3318 42.3562 20.6901 42.3562 18.5327 41.2362L5.45625 34.3762C3.32086 33.2562 2 31.1762 2 28.9162V15.2362C2 12.9962 3.32086 10.9162 5.45625 9.77615L18.5327 2.91617C20.6681 1.79617 23.3098 1.79617 25.4672 2.91617L38.5437 9.77615C40.6791 10.9162 42 12.9762 42 15.2362Z"
                      stroke="#02836F"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.011 20.0764C24.844 20.0764 27.1403 17.9899 27.1403 15.4162C27.1403 12.8426 24.844 10.7563 22.011 10.7563C19.1782 10.7563 16.8817 12.8426 16.8817 15.4162C16.8817 17.9899 19.1782 20.0764 22.011 20.0764Z"
                      stroke="#02836F"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30.8167 31.3965C30.8167 27.7965 26.8761 24.8765 22.0109 24.8765C17.1458 24.8765 13.2052 27.7965 13.2052 31.3965"
                      stroke="#02836F"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                header="Peşəkar dəstək ilə asan!"
                text="Təkliflərinizin daha geniş auditoriyaya çatması üçün fərdi yanaşma."
              />
            </div>
            <div className="relative basis-1/2 max-[769px]:hidden">
              <div>
                <Image
                  className="w-full h-full relative z-2"
                  src={Iphone15Pro}
                  alt="Iphone 15 Pro"
                  width={0}
                  height={0} />
              </div>
              <div className="absolute top-[10%] left-[10%] z-1 text-[16px] font-medium text-primary">
                <Image
                  className="w-full h-full"
                  src={CircleText}
                  alt="text-circle"
                  width={0}
                  height={0} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoAreWe;
