'use client';
import React from 'react'
import Image from 'next/image'
import { useMediaQuery } from '@/hooks/useMediaQuery';

const MobileNav = () => {
    const isMobile = useMediaQuery('(max-width: 425px)');

    return (
        <>
            {isMobile ?
                <section className='h-[100px] w-full'>
                    <div className="fixed bottom-0 left-0 right-0 z-50">
                        <div className="p-[16px] relative w-full flex justify-between items-center bg-[url(/images/tab-bar.svg)] bg-no-repeat bg-cover">
                            <button className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 z-50 w-[clamp(50px,10vw,61px)] h-[clamp(50px,10vw,61px)] rounded-full bg-[var(--primary-color)] flex items-center justify-center shadow-lg border-4 border-[transparent]">
                                <i className="fa-solid fa-plus text-white text-xl"></i>
                            </button>
                            <div className="left flex items-center text-[12px] font-[700] text-[white] gap-[40px] max-[321px]:gap-[30px]">
                                <div className='flex flex-col items-center justify-center'>
                                    <Image
                                        src={'/icons/home.svg'}
                                        alt='home'
                                        width={24}
                                        height={24}
                                    />
                                    <span>Home</span>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <Image
                                        src={'/icons/heart.svg'}
                                        alt='home'
                                        width={24}
                                        height={24}
                                    />
                                    <span>Sevimlilər</span>
                                </div>
                            </div>
                            <div className="right flex items-center text-[12px] font-[700] text-[white] gap-[40px] max-[321px]:gap-[30px]">
                                <div className='flex flex-col items-center justify-center'>
                                    <Image
                                        src={'/icons/notification.svg'}
                                        alt='home'
                                        width={24}
                                        height={24}
                                    />
                                    <span>Əlaqə</span>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <Image
                                        src={'/icons/user.svg'}
                                        alt='home'
                                        width={24}
                                        height={24}
                                    />
                                    <span>Profil</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                : ''}
        </>
    )
}

export default MobileNav