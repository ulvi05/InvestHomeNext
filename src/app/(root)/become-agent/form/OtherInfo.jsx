import React from 'react'
import Image from "next/image";

const OtherInfo = () => {
  return (
    <>
      <div className='flex gap-[95px] pb-[16px] border-b-[1px] border-[rgba(0,0,0,0.2)]'>
        <div className='basis-[50%]'>
          <form action="">
            <div className='flex flex-col gap-[16px]'>
              <div className='flex flex-col gap-[8px]'>
                <label htmlFor="">Təhsil</label>
                <input placeholder='Education' className='outline-none px-[14px] py-[10px] text-[14px] border-[1px] border-[black] rounded-[8px]' type="text" />
              </div>
              <div className='flex flex-col gap-[8px]'>
                <label htmlFor="">Yaşınız</label>
                <input placeholder='28' className='outline-none px-[14px] py-[10px] text-[14px] border-[1px] border-[black] rounded-[8px]' type="text" />
              </div>
              <div className='flex flex-col gap-[8px]'>
                <label htmlFor="">Yaşadığınız Ünvan</label>
                <input placeholder='Xəzər ray., Mərdəkan qəs., Əli İsazade küç.' className='outline-none px-[14px] py-[10px] text-[14px] border-[1px] border-[black] rounded-[8px]' type="phone" />
              </div>
              <div className='flex flex-col gap-[8px]'>
                <label htmlFor="">CV-nizi yükləyin</label>
                <input placeholder='www.example.com' className='outline-none px-[14px] py-[10px] text-[14px] border-[1px] border-[black] rounded-[8px]' type="text" />
              </div>
            </div>
          </form>
        </div>
        <div className='flex items-center basis-[50%]'>
          <Image
            src="/gifs/team.gif"
            alt=""
            width={440}
            height={220}
          />
        </div>
      </div>
    </>
  )
}

export default OtherInfo