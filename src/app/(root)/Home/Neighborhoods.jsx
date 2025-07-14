import Image from "next/image";
import mardakanImg from "../../../../public/images/Mardakan.jpg";
import masazirImg from "../../../../public/images/masazir.jpg";
import melissaImg from "../../../../public/images/melissa.jpg";
import buzovnaImg from "../../../../public/images/buzovna.jpg";
import breezeImg from "../../../../public/images/seabreeze.jpg";
// import { useTranslation } from "react-i18next";

const Neighborhoods = () => {
  // const {t} = useTranslation()
  return (
    <div className="max-w-full w-auto px-[80px] max-[1115px]:px-[20px]">
    {/* Changed background color to transparent and adjusted padding for better responsiveness */}
    <div className=" pb-[10rem] flex flex-col items-center gap-[60px] bg-transparent max-[768px]:pb-[5rem]">
      <div className="text-center flex flex-col gap-[10px] ">
        <h4 className="text-[var(--primary-color)] text-[1.5rem] font-400">
          {/* {t("Şəhərə böyük sahələr")} */}
          Şəhərə böyük sahələr
        </h4>
        <h2 className="text-var[var(--text-color-2)] font-600 text-[1.9rem] max-[768px]:text-[1.5rem]">
          {/* {t("Qonşuluq Əmlakları")} */}
          Qonşuluq Əmlakları

        </h2>
      </div>
      <div className=" flex flex-row flex-wrap justify-between items-center gap-y-[60px]">
          {/* 1st image */}
          <div className="group relative w-[411px] h-[300px] rounded-[30px] overflow-hidden shadow-[4px_10px_30px_0_rgba(0,0,0,0.06)] text-white transition-all duration-400 ease-in max-[1365px]:w-[calc(50%-30px)] max-[800px]:w-full max-[768px]:rounded-[15px]"> 
            <Image
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
              width={411}
              height={300}
              src={mardakanImg}
              alt="Mardakan Invest Home"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]"></div>
            <div className="absolute bottom-4 left-8 font-[500]">
              <h4 className="opacity-60 group-hover:opacity-90 group-hover:text-[var(--yellow)] text-[3.6rem]">
                216 
              </h4>
              <p className="opacity-60 group-hover:opacity-90 group-hover:text-white text-[1.25rem]">
                Mardakan, Baku
              </p>
            </div>
          </div>
 
          {/* 2nd image */}
<div className="group relative w-[414px] h-[300px] rounded-[30px] overflow-hidden shadow-[4px_10px_30px_0_rgba(0,0,0,0.06)] text-white transition-all duration-400 ease-in max-[1365px]:w-[calc(50%-30px)] max-[800px]:w-full max-[768px]:rounded-[15px]">
  <Image
    className="w-full h-full object-cover scale-125 group-hover:scale-135 transition-transform duration-300 ease-in-out"
    fill
    src={melissaImg}
    alt="Melissa Invest Home"
  />
  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]"></div>
  <div className="absolute bottom-4 left-6 sm:left-8 font-[500]">
    <h4 className="opacity-60 group-hover:opacity-90 group-hover:text-[var(--yellow)] text-[2.5rem] sm:text-[3rem] md:text-[3.6rem]">
      141
    </h4>
    <p className="opacity-60 group-hover:opacity-90 group-hover:text-white text-[1rem] sm:text-[1.125rem] md:text-[1.25rem]">
      Melissa Park
    </p>
  </div>
</div>

          {/* 3rd image */}
          <div className="group relative w-[413px] h-[300px] rounded-[30px] overflow-hidden shadow-[4px_10px_30px_0_rgba(0,0,0,0.06)] text-white transition-all duration-400 ease-in max-[1365px]:w-[calc(50%-30px)] max-[800px]:w-full max-[768px]:rounded-[15px]"> 
            <Image
              className="w-full h-full object-cover scale-125 group-hover:scale-135 transition-transform duration-300 ease-in-out"
              width={413}
              height={300}
              src={buzovnaImg}
              alt="Buzovna Invest Home"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]"></div>
            <div className="absolute bottom-4 left-8 font-[500]">
              <h4 className="opacity-60 group-hover:opacity-90 group-hover:text-[var(--yellow)] text-[3.6rem]">
                212
              </h4>
              <p className="opacity-60 group-hover:opacity-90 group-hover:text-white text-[1.25rem]">
                Buzovna, Baku
              </p>
            </div>
          </div>

          {/* 4th image */}
          <div className="group relative w-[521px] h-[300px] rounded-[30px] overflow-hidden shadow-[4px_10px_30px_0_rgba(0,0,0,0.06)] text-white transition-all duration-400 ease-in  max-[1435px]:w-[calc(50%-30px)]  max-[800px]:w-full max-[768px]:rounded-[15px] mx-auto-1414-1450">
            <Image
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
              width={521}
              height={300}
              src={masazirImg}
              alt="Masazir Invest Home"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]"></div>
            <div className="absolute bottom-4 left-8 font-[500]">
              <h4 className="opacity-60 group-hover:opacity-90 group-hover:text-[var(--yellow)] text-[3.6rem]">
                183
              </h4>
              <p className="opacity-60 group-hover:opacity-90 group-hover:text-white text-[1.25rem]">
                Masazır, Baku
              </p>
            </div>
          </div>

          {/* 5th image */}
          <div className="group relative w-[738px] h-[300px] rounded-[30px] overflow-hidden shadow-[4px_10px_30px_0_rgba(0,0,0,0.06)] text-white transition-all duration-400 ease-in max-[1365px]:w-[calc(50%-30px)] max-[1435px]:mx-auto max-[800px]:w-full"> 
            <Image
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
              width={738}
              height={300}
              src={breezeImg}
              alt="Seabreeze Invest Home"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]"></div>
            <div className="absolute bottom-4 left-8 font-[500]">
              <h4 className="opacity-60 group-hover:opacity-90 group-hover:text-[var(--yellow)] text-[3.6rem]">
                112
              </h4>
              <p className="opacity-60 group-hover:opacity-90 group-hover:text-white text-[1.25rem]">
                Sea Breeze
              </p>
            </div>
          </div>
      </div>
    </div>
  </div>
  );
};

export default Neighborhoods;
