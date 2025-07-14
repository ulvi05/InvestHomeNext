'use client';

import AgentCard from '../../../components/ui/AgentsCard';
import agentsData from '../../../components/core/AgentsData';

export default function Agents() {
  return (
    <section id="group" className="max-w-full w-auto flex flex-col gap-[70px] px-[80px]">
      <div className="text-center flex flex-col gap-[15px]">
        <h5 className="text-primary text-[20px] font-medium tracking-[3px] uppercase">
          ÖZÜNÜZÜ TƏQDİM EDİN
        </h5>
        <h2 className="text-black text-[49px] font-semibold">
          Mütəxəssislər Qrupumuz
        </h2>
      </div>

      <div className="h-auto flex flex-row justify-between items-center flex-wrap  mb-[120px]">
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
