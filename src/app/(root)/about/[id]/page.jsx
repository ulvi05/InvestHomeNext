import React from 'react'
import Image from "next/image";
import LawyerImage from "../../../../../public/images/Lawyer.png"
import ConnectionButton from '../../../../components/ui/ConnectionButton';
import RoundedBlackButton from '../../../../components/ui/RoundedBlackButton';
import InstagramIcon from "../../../../../public/icons/Instagram.svg"
import { houseData } from '@/components/core/house';
import HouseCard from '@/components/ui/HouseCard';
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Page = () => {

  console.log(houseData)

  return (
    <>
      <section className='max-w-[1600px] mx-auto'>
        <div className='py-6 px-6 bg-white rounded-2xl border-0.2 border-solid border-[rgba(2,131,111,0.5)]
      shadow-[4px_16px_50px_0px_rgba(2,131,111,0.05)] flex flex-row items-center justify-center gap-[34px] mx-[80px] max-[1100px]:flex-col max-[1100px]:mx-[20px]'>

          <Image
            src={LawyerImage}
            alt='LawyerImage'
            width={386}
            height={360}
            className='flex-shrink-0 max-[1100px]:w-[250px] max-[1100px]:h-[250px]'
          />

          <div className='flex flex-col'>
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
                    <FaWhatsapp />
                  }
                  backgroundColor="#28E55F" />
                <RoundedBlackButton
                  icon={
                    <Image src={InstagramIcon} alt="Instagram" width={18} height={18} />
                  }
                  backgroundColor="linear-gradient(to right, #8a3ab9, #e95950, #fccc63)" />
                <RoundedBlackButton
                  icon={
                    <FaLinkedinIn />
                  }
                  backgroundColor="#0073AF" />
              </div>
            </div>
          </div>
        </div>

        <div className='px-[80px] max-[1025px]:px-[20px] max-[426px]:px-[16px] mt-6 flex flex-col items-start justify-start gap-5 mb-[85px]'>
          <p className='text-black text-center text-[32px]/[48px] font-medium'>
            Əmlaklarım
          </p>

          <div className='w-full grid grid-cols-4 max-[1025px]:grid-cols-3 max-[769px]:grid-cols-2 max-[426px]:grid-cols-1 gap-[24px]'>
            {houseData.map((house) => (
              <HouseCard
                key={house.id}
                house={house}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
