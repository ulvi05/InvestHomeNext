import React from 'react'
import Image from "next/image";
import LawyerImage from "../../../../../public/images/Lawyer.png"
import ConnectionButton from '../../../../components/ui/ConnectionButton';
import RoundedBlackButton from '../../../../components/ui/RoundedBlackButton';
import FacebookIcon from "../../../../../public/icons/facebook.svg"
import XIcon from "../../../../../public/icons/XIcon.svg"
import InstagramIcon from "../../../../../public/icons/Instagram.svg"
import { houseData } from '@/components/core/house';
import HouseCard from '@/components/ui/HouseCard';

const Page = () => {

console.log(houseData)

  return (
    <>
      <div className='max-w-full w-auto h-auto py-6 px-6 bg-white rounded-2xl border-0.2 border-solid border-[rgba(2,131,111,0.5)]
      shadow-[4px_16px_50px_0px_rgba(2,131,111,0.05)] flex flex-row items-center justify-center gap-[34px] mx-[80px] max-[1100px]:flex-col max-[1100px]:mx-[20px]'>

        <Image 
        src={LawyerImage}
        alt='LawyerImage'
        width={386}
        height={360}
        className='flex-shrink-0 max-[1100px]:w-[250px] max-[1100px]:h-[250px]'
        />

        <div className='flex flex-1 flex-col items-start justify-start'>
          <p className='text-[#000] text-2xl/[32px] font-medium'>
            Commercial Real Estate Specialist
          </p>
          <p className='text-azure text-base/[24px] italic font-medium tracking-[1.024px] mt-5'>
            ali.bagirov@investhome.az
          </p>
          <p className='text-black text-[22px]/[28px] font-normal mt-8'>
            "İnvestHome" şirkəti olaraq 2025-ci ildən bəri ölkəmizin daşınmaz əmlak bazarında həm fiziki
            həm də hüquqi şəxslər üçün yüksəkkeyfiyyətli xidmətlər təqdim edirik. Sözsüz ki, bu keyfiyyətin arxasında peşəkar
            mütəxəssislərimiz, böyük müştəri bazamız və çoxillik təcrübəmiz dayanır. Məqsədimiz alqı-satqıdan qiymətləndirməyə
          </p>

          <div className='w-full h-auto flex flex-row items-center justify-between mt-[85px]'>
            <div className='w-auto h-auto flex flex-row items-center justify-center gap-[38px]'>
              <ConnectionButton name='Zəng et' />
              <ConnectionButton name='Mesaj yaz' />
            </div>

            <div className='w-auto h-auto flex flex-row items-center justify-center gap-[20px]'>
                <RoundedBlackButton 
                icon={
                 <Image src={FacebookIcon} alt="Facebook" width={20} height={20} />
                } />
                <RoundedBlackButton 
                icon={
                 <Image src={XIcon} alt="Facebook" width={20} height={20} />
                } />
                <RoundedBlackButton 
                icon={
                 <Image src={InstagramIcon} alt="Facebook" width={18} height={18} />
                } />
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-full w-auto h-auto mx-[80px] mt-6 flex flex-col items-start justify-start gap-5 mb-[85px]'>
        <p className='text-black text-center text-[32px]/[48px] font-medium'>
          Əmlaklarım
        </p>

        <div className='w-full h-auto flex flex-row items-center justify-center gap-x-6 gap-y-10 flex-wrap'>
          {houseData.map((house) => (
            <HouseCard
              key={house.id}
              house={house}
              customWidth={302}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Page
