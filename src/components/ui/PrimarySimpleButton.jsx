import Image from 'next/image'
import React from 'react'

const PrimarySimpleButton = ({ icon, name }) => {
  return (
    <>
     <button className='w-[98px] h-[76px] p-[10px] flex flex-col justify-center items-center gap-2 rounded-[8px] border border-solid border-primary text-primary text-[12px]/[16px] font-normal'>
     <Image
        src={icon}
        alt={name}
        width={24}
        height={24} /> {/* Added closing tag for Image component */}
      {name}
    </button> 
    </>
  )
}

export default PrimarySimpleButton
