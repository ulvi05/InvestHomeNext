'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery';
import Image from 'next/image';
import React from 'react'

const MobileCategory = () => {
    const isMobile = useMediaQuery('(max-width: 430px)');

    return (
        <>
            {
                isMobile ?
                    <section>
                        <div className='px-[16px]'>
                            <div className='grid grid-cols-2 grid-rows-2 gap-x-[8px] gap-y-[20px]'>
                                <div className='h-[52px] p-[10px] bg-[rgba(224,245,241,1)] rounded-[8px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)] flex justify-between'>
                                    <span className='text-[12px]'>Ev alqı satqısı</span>
                                    <Image
                                        src={'icons/mobile-category/home.svg'}
                                        alt='home'
                                        width={60}
                                        height={40}
                                    />
                                </div>
                                <div className='h-[52px] p-[10px] bg-[rgba(224,245,241,1)] rounded-[8px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)] flex justify-between'>
                                    <span className='text-[12px]'>Yaşayış Kompleksi</span>
                                    <Image
                                        src={'icons/mobile-category/apartment.svg'}
                                        alt='apartment'
                                        width={60}
                                        height={40}
                                    />
                                </div>
                                <div className='h-[52px] p-[10px] bg-[rgba(224,245,241,1)] rounded-[8px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)] flex justify-between'>
                                    <span className='text-[12px]'>Kirayə</span>
                                    <Image
                                        src={'icons/mobile-category/shop.svg'}
                                        alt='shop'
                                        width={60}
                                        height={40}
                                    />
                                </div>
                                <div className='h-[52px] p-[10px] bg-[rgba(224,245,241,1)] rounded-[8px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)] flex justify-between'>
                                    <span className='text-[12px]'>Günlük</span>
                                    <Image
                                        src={'icons/mobile-category/church.svg'}
                                        alt='church'
                                        width={60}
                                        height={40}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    :
                    ""
            }
        </>
    )
}

export default MobileCategory