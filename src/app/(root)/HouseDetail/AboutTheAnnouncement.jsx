import Image from 'next/image'
import PrimarySimpleButton from '@/components/ui/PrimarySimpleButton'
import ConnectionButton from '@/components/ui/ConnectionButton'
import HouseDetailsMetro from "../../../../public/icons/HouseDetailsMetro.svg"
import HouseDetailsRoom from "../../../../public/icons/HouseDetailsRoom.svg"
import HouseDetailsFloor from "../../../../public/icons/HouseDetailsFloor.svg"
import HouseDetailsSquare from "../../../../public/icons/HouseDetailsSquare.svg"
import HouseDetailsPaint from "../../../../public/icons/HouseDetailsPaint.svg"
import HouseDetailsDocument from "../../../../public/icons/HouseDetailsDocument.svg"
import HouseDetailAgent from "../../../../public/icons/HouseDetailAgent.svg"
import Elevator from "../../../../public/icons/elevator.svg"
import Security from "../../../../public/icons/security.svg"
import Parking from "../../../../public/icons/parking.svg"
import WaterHeater from "../../../../public/icons/water-heater.svg"
import AirConditioner from "../../../../public/icons/air-conditioner.svg"

const AboutTheAnnouncement = () => {
  return (
    <>
      {/* Top Section */}
      <div className="w-full px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row items-start justify-between gap-10 mt-[62px]">
        {/* Left Side */}
        <div className="w-full lg:max-w-[708px] flex flex-col items-start justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold">Elan haqqında</h1>

          <div className="flex flex-wrap gap-4 sm:gap-6 mt-6">
            <PrimarySimpleButton icon={HouseDetailsMetro} name="N.Nərimanov" />
            <PrimarySimpleButton icon={HouseDetailsRoom} name="3 Otaq" />
            <PrimarySimpleButton icon={HouseDetailsFloor} name="3/12" />
            <PrimarySimpleButton icon={HouseDetailsSquare} name="160 m2" />
            <PrimarySimpleButton icon={HouseDetailsPaint} name="Tam Təmirli" />
            <PrimarySimpleButton icon={HouseDetailsDocument} name="Çıxarışı var" />
          </div>

          <p className="text-black text-base sm:text-lg leading-[28px] tracking-[0.2px] mt-5">
            Nəsimi rayonu Fətəli xan Xoyski küçəsi Nərimanov metrosunun yaxınlığı, 12 mərtəbəli binanın 3-cü mərtəbəsi ümumi
            sahəsi 160 kv m olan 3 otaqlı dubleks təmirli əşyalı mənzil. Mənzildə üç geniş yataq otağı, zal, mətbəx, sanuzel,
            sanitar qovşağı mövcuddur. Mənzilin balkonunda yay mətbəxi mövcuddur. Böyük terası var. Ətrafında market, məktəb,
            baxçabir sıra iaşə obyektləri var. Maraqlanan şəxslər buyurub müraciət edə bilər.
          </p>
        </div>

        {/* Right Side (Agent Card) */}
        <div className="w-full lg:w-[411px] h-auto rounded-[20px] bg-white shadow-[0px_2px_10px_0px_rgba(2,131,111,0.15)] flex flex-col px-6 py-6">
          <h1 className="text-[28px] sm:text-[32px] font-medium">
            280,000 AZN
          </h1>

          <p className="text-[18px] sm:text-[20px]">
            1781 AZN / m2
          </p>

          <div className="flex flex-row items-center gap-4 mt-[42px]">
            <Image
              src={HouseDetailAgent}
              alt="agent"
              width={62}
              height={62}
            />
            <div className="flex flex-col">
              <p className="text-[#111] text-lg font-medium">Əli Bağırov</p>
              <p className="text-black text-sm font-medium">Agent</p>
              <p className="text-black/50 text-xs font-medium mt-1">1 saat əvvəl</p>
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mt-[22px]">
            <ConnectionButton name="Zəng et" />
            <ConnectionButton name="Mesaj yaz" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full px-4 sm:px-8 lg:px-20 mt-10 mb-[64px]">
        <h1 className="text-[#111] text-[24px] sm:text-[28px] font-medium mb-8">
          Xüsusiyyətlər
        </h1>

        <div className="flex flex-col gap-4">
          {[ 
            { icon: Elevator, label: "Lift" },
            { icon: Security, label: "Təhlükəsizlik" },
            { icon: Parking, label: "Parkinq" },
            { icon: WaterHeater, label: "İstilik sistemi" },
            { icon: AirConditioner, label: "Soyutma sistemi" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-row gap-3 items-center text-[#2B2B2B] text-base sm:text-[20px]">
              <Image src={item.icon} alt={item.label} width={24} height={24} />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutTheAnnouncement;
