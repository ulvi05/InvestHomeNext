"use client"
import ConnectionButton from '@/components/ui/ConnectionButton'
import PrimarySimpleButton from '@/components/ui/PrimarySimpleButton'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import HouseDetailsMetro from "../../../../public/icons/HouseDetailsMetro.svg"
import HouseDetailsRoom from "../../../../public/icons/HouseDetailsRoom.svg"
import HouseDetailsFloor from "../../../../public/icons/HouseDetailsFloor.svg"
import HouseDetailsSquare from "../../../../public/icons/HouseDetailsSquare.svg"
import HouseDetailsPaint from "../../../../public/icons/HouseDetailsPaint.svg"
import HouseDetailsDocument from "../../../../public/icons/HouseDetailsDocument.svg"
import Elevator from "../../../../public/icons/elevator.svg"
import Security from "../../../../public/icons/security.svg"
import Parking from "../../../../public/icons/parking.svg"
import WaterHeater from "../../../../public/icons/water-heater.svg"
import AirConditioner from "../../../../public/icons/air-conditioner.svg"

const Details = () => {

    const [showMore, setShowMore] = useState(false);

    const [isOverflowing, setIsOverflowing] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            // Temporarily remove clamp to measure full height
            const el = textRef.current;
            const currentClamp = el.classList.contains("line-clamp-4");

            if (currentClamp) el.classList.remove("line-clamp-4");

            const isOver = el.scrollHeight > el.clientHeight;
            setIsOverflowing(isOver);

            // Restore clamp
            if (currentClamp) el.classList.add("line-clamp-4");
        }
    }, []);


    return (
        <>
            <section className='max-w-[1600px] mx-[auto]'>
                <div className='mt-[60px] max-[431px]:mt-[20px] relative flex max-[769px]:flex-col-reverse gap-[20px] justify-between items-start px-[80px] max-[1025px]:px-[20px] max-[431px]:px-[16px]'>
                    <div className='basis-[708px]'>
                        <div className="w-full flex flex-col items-start justify-center">
                            <h1 className="text-2xl sm:text-3xl font-bold">Elan haqqında</h1>

                            <div className="flex flex-wrap gap-4 sm:gap-6 mt-6">
                                <PrimarySimpleButton icon={HouseDetailsMetro} name="N.Nərimanov" />
                                <PrimarySimpleButton icon={HouseDetailsRoom} name="3 Otaq" />
                                <PrimarySimpleButton icon={HouseDetailsFloor} name="3/12" />
                                <PrimarySimpleButton icon={HouseDetailsSquare} name="160 m2" />
                                <PrimarySimpleButton icon={HouseDetailsPaint} name="Tam Təmirli" />
                                <PrimarySimpleButton icon={HouseDetailsDocument} name="Çıxarışı var" />
                            </div>

                            <p
                                ref={textRef}
                                className={`text-black text-base sm:text-lg leading-[28px] tracking-[0.2px] mt-5 ${showMore ? "" : "max-[431px]:line-clamp-4"}`}>
                                Nəsimi rayonu Fətəli xan Xoyski küçəsi Nərimanov metrosunun yaxınlığı, 12 mərtəbəli binanın 3-cü mərtəbəsi ümumi
                                sahəsi 160 kv m olan 3 otaqlı dubleks təmirli əşyalı mənzil. Mənzildə üç geniş yataq otağı, zal, mətbəx, sanuzel,
                                sanitar qovşağı mövcuddur. Mənzilin balkonunda yay mətbəxi mövcuddur. Böyük terası var. Ətrafında market, məktəb,
                                baxçabir sıra iaşə obyektləri var. Maraqlanan şəxslər buyurub müraciət edə bilər.
                            </p>
                            {isOverflowing && (
                                <div className="flex justify-end w-full">
                                    {!showMore ? (
                                        <button
                                            onClick={() => setShowMore(true)}
                                            className="text-[12px] text-[#450CCB]"
                                        >
                                            daha çox
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => setShowMore(false)}
                                            className="text-[12px] text-[#450CCB]"
                                        >
                                            daha az
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="w-full mt-10 mb-[64px]">
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
                                        <Image
                                            src={item.icon}
                                            alt={item.label}
                                            width={24}
                                            height={24}
                                            unoptimized
                                        />
                                        <p>{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-[769px]:sticky min-[768px]:basis-[411px] top-[95px] max-[769px]:w-full rounded-[20px] bg-white shadow-[0px_2px_10px_0px_rgba(2,131,111,0.15)] max-[431px]:px-[16px] max-[431px]:py-[20px] px-[34px] py-[32px] flex flex-col gap-[41px]">
                        <div className='max-[431px]:items-center flex flex-col min-[431px]:gap-[41px] max-[431px]:flex-row-reverse max-[431px]:justify-between'>
                            <div className='flex flex-col gap-[16px]'>
                                <h1 className="max-[431px]:text-[20px] text-[32px] font-[500] leading-none">
                                    280,000 AZN
                                </h1>

                                <p className="max-[431px]:text-[14px] text-[20px] font-[400] leading-none">
                                    1781 AZN / m2
                                </p>
                            </div>

                            <div className="flex gap-[14px] max-h-[62px]">
                                <div className='relative h-[62px] w-[62px] max-[431px]:h-[50px] max-[431px]:w-[50px]'>
                                    <Image
                                        src={"/icons/HouseDetailAgent.svg"}
                                        alt="agent"
                                        fill
                                        className='h-full w-full'
                                    />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <p className="text-[#111] max-[431px]:text-[16px] text-[20px] font-[500] leading-none ">Amin Bağırov</p>
                                    <p className="text-black max-[431px]:text-[12px] text-[14px] font-[500] leading-none">Agent</p>
                                    <p className="text-black/50 max-[431px]:text-[10px] text-[12px] font-[500] leading-none text-[rgba(0, 0, 0, 0.5)]">1 saat əvvəl</p>
                                </div>
                            </div>
                        </div>

                        <div className="max-[431px]:hidden w-full flex justify-between items-stretch gap-4">
                            <ConnectionButton name="Zəng et" />
                            <ConnectionButton name="Mesaj yaz" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Details