import React from 'react'
import agentsData from "@/components/core/AgentsData";
import AgentCard from "@/components/ui/AgentsCard";
import BeAgent from '../Home/BeAgent';
import AboutPageImage from "../../../../public/images/AboutPagePhoto.jpg";

const page = () => {
  return (
    <>
      <div className='max-w-full w-auto h-[400px] flex flex-col items-start bg-gray-100 px-[80px] pt-[62px] text-start'
      style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.14) 9.13%, rgba(32, 32, 32, 0.70) 100%), url(${AboutPageImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
        <h1 className='text-white text-[40px] italic font-medium'>
            Biz Kimik?
        </h1>

          <p className="mt-10 w-[738px] text-white text-2xl font-medium">
              İnvesthome, daşınmaz əmlak sahəsində güvənli və şəffaf xidmət göstərməyi qarşısına məqsəd qoymuş peşəkar komandadır. İllərin təcrübəsi və bazar bilgiləri ilə biz müştərilərimizə ən uyğun əmlak seçimində dəstək olur, alqı-satqı və kirayə proseslərini asanlaşdırırıq.
          </p>
      </div>

        <div id="group" className="max-w-full w-auto flex flex-col gap-[112px] px-[80px] mt-[92px]">
            <div className="text-center">
                <h2 className="text-black text-[40px] font-semibold">
                    Mütəxəssislər Qrupumuz
                </h2>
            </div>

            <div className="w-full flex flex-row flex-wrap justify-center items-center gap-x-[20px] gap-y-[34px]">
                {agentsData.map((agent, index) => (
                    <AgentCard
                        key={agent.id}
                        id={agent.id}
                        name={agent.name}
                        role={agent.role}
                        image={agent.image}
                        description={agent.description}
                    />
                ))}
            </div>
        </div>

        <div className='mt-[120px]'>
        <BeAgent />
        </div>

    </>
  )
}

export default page
