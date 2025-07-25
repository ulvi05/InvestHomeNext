'use client';

import AgentCard from '../../../components/ui/AgentsCard';
import agentsData from '../../../components/core/AgentsData';

export default function Agents() {
  return (
    <section id="group" className={`mt-[100px] max-w-[1600px] mx-auto w-auto flex flex-col gap-[70px] px-[80px] max-[1025px]:px-[20px] max-[426px]:px-[16px]`}>
      <div className="text-center flex flex-col gap-[15px]">
        <h5 className="text-primary text-[20px] font-medium">
          ÖZÜNÜZÜ TƏQDİM EDİN
        </h5>
        <h2 className="text-black text-[49px] max-[426px]:text-[20px] font-semibold">
          Mütəxəssislər Qrupumuz
        </h2>
      </div>

      <div className="mb-[120px] grid grid-cols-4 grid-rows-1 max-[1025px]:grid-cols-2 max-[1025px]:grid-rows-2 max-[426px]:grid-cols-1 max-[426px]:grid-rows-1 gap-[20px]">
        {agentsData.slice(0, 4).map((agent, index) => (
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
    </section>
  );
}
