'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AgentCard({ id, name, role, image, description }) {
  // For debugging: let's see what `id` is being received.
  console.log(`AgentCard for "${name}" received id:`, id);

  return (
    <Link href={`/about/${id}`} className="group">

    <div className="w-[305px] h-[404px] flex flex-col items-center text-center">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="mb-[40px] rounded-full object-cover"
      />
      <h3 className="text-black text-[28px] font-normal">{name}</h3>
      <h4 className="text-primary text-[24px] font-medium mb-[10px]">{role}</h4>
      <p className="leading-[22.763px] w-[220px]">{description}</p>
    </div>
    </Link>
  );
}
