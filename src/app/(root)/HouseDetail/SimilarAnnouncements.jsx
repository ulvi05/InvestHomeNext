import { houseData } from '@/components/core/house';
import HouseCard from '@/components/ui/HouseCard';

const SimilarAnnouncements = () => {
  return (
    <>
    <div className='max-w-full w-auto px-[80px] flex flex-col items-start justify-center'>
      <h1 className="text-[#111] text-[24px] sm:text-[28px] font-medium">
        Oxşar elanlar
      </h1>


      <div className='w-full h-auto flex flex-row items-center justify-between gap-y-10 flex-wrap mt-[62px] mb-[544px]'>
        {houseData.map((house) => (
          <HouseCard
            key={house.id}
            house={house}
          />
        ))}
      </div>
    </div>


    </>
  )
}

export default SimilarAnnouncements
