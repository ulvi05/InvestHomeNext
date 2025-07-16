import React from 'react'
import Image from "next/image";

const PrivateInfo = () => {
    return (
        <>
            <div className='flex gap-[95px] pb-[16px] border-b-[1px] border-[rgba(0,0,0,0.2)]'>
                <div className='basis-[50%]'>
                    <form action="">
                        <div className='flex flex-col gap-[16px]'>
                            <div className='flex flex-col gap-[8px]'>
                                <label htmlFor="">Ad/Soyad</label>
                                <input placeholder='Full Name' className='outline-none px-[14px] py-[10px] text-[14px] border-[1px] border-[black] rounded-[8px]' type="text" />
                            </div>
                            <div className='flex flex-col gap-[8px]'>
                                <label htmlFor="">Email</label>
                                <input placeholder='investhomeaz@gmail.com' className='outline-none px-[14px] py-[10px] text-[14px] border-[1px] border-[black] rounded-[8px]' type="email" />

                            </div>
                            <div className='flex flex-col gap-[8px]'>
                                <label htmlFor="">Telefon</label>
                                <input placeholder='' className='outline-none px-[14px] py-[10px] text-[14px] border-[1px] border-[black] rounded-[8px]' type="phone" />
                            </div>
                            <div className='flex flex-col gap-[8px]'>
                                <label htmlFor="">Haqqınızda 1</label>
                                <input placeholder='İş Təcrübəniz' className='outline-none px-[14px] py-[10px] text-[14px] border-[1px] border-[black] rounded-[8px]' type="text" />
                            </div>
                            <div className='flex flex-col gap-[8px]'>
                                <label htmlFor="">Haqqınızda 2</label>
                                <input placeholder='İş Təcrübəniz' className='outline-none px-[14px] py-[10px] text-[14px] border-[1px] border-[black] rounded-[8px]' type="text" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='flex items-center basis-[50%]'>
                    <Image
                        src="/gifs/phone.gif"
                        alt=""
                        width={440}
                        height={330}
                    />
                </div>
            </div>
        </>
    )
}

export default PrivateInfo