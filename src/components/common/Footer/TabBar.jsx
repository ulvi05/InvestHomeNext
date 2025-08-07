'use client';
import React from 'react'
import Image from 'next/image'
import { useMediaQuery } from '@/hooks/useMediaQuery';
import TabBarBg from '../../../../public/images/tab-bar.svg'

const TabBar = () => {
    const isMobile = useMediaQuery('(max-width: 425px)');

    return (
        <>
            {isMobile ?
                <section className="relative z-99 h-[125px]">
                    <div className="fixed bottom-0 w-full">
                        <button
                            className="absolute rounded-full w-[60px] h-[60px] bg-[#02836F] border-none left-1/2 translate-x-[-50%] top-[-30px]">
                            <i className="text-white text-[40px] fa-solid fa-plus"></i>
                        </button>
                        <div className="flex justify-center">
                            <div className="bg-[#02836F] w-full h-[95px]"></div>
                            <Image
                                src={TabBarBg}
                                alt=""
                                width={0}
                                height={0}
                                className='max-w-none'
                            />
                            <div className="bg-[#02836F] w-full h-[95px]"></div>
                        </div>
                        <div
                            className="gap-[60px] box-border p-[16px] flex justify-between absolute top-0 h-[95px] w-full">
                            <div class="flex justify-between w-[146px]">
                                <div class="gap-[5px] flex flex-col items-center w-[63px]">
                                    <i class="text-white text-[24px] fa-solid fa-house"></i>
                                    <span class="text-white text-[12px]">Home</span>
                                </div>
                                <div class="gap-[5px] flex flex-col items-center w-[63px]">
                                    <i class="text-white text-[24px] fa-regular fa-heart"></i>
                                    <span class="text-white text-[12px]">Sevimlilər</span>
                                </div>
                            </div>
                            <div class="flex justify-between w-[127px]">
                                <div class="gap-[5px] flex flex-col items-center">
                                    <i class="text-white text-[24px] fa-regular fa-bell"></i>
                                    <span class="text-white text-[12px]">Əlaqe</span>
                                </div>
                                <div class="gap-[5px] flex flex-col items-center w-[63px]">
                                    <i class="text-white text-[24px] fa-regular fa-user"></i>
                                    <span class="text-white text-[12px]">Profil</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                : ''}
        </>
    )
}

export default TabBar