'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AgentCard({ id, name, role, image, description }) {
  // For debugging: let's see what `id` is being received.
  console.log(`AgentCard for "${name}" received id:`, id);

  return (
    <Link href={`/about/${id}`} className="group block">
      <div className="flex flex-col items-center gap-[40px] h-full">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="rounded-full"
        />
        <div className='flex flex-col gap-[20px] h-full justify-between'>
          <div className='flex flex-col text-center gap-[16px] '>
            <h3 className="text-black text-[28px] font-normal">{name}</h3>
            <h4 className="text-primary text-[24px] font-medium block">{role}</h4>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}
