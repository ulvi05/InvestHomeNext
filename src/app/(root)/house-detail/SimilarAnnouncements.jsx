import { houseData } from '@/components/core/house';
import HouseCard from '@/components/ui/HouseCard';

const SimilarAnnouncements = () => {
  return (
    <>
      <div className='max-w-full w-auto px-[80px] flex flex-col items-start justify-center'>
        <h1 className="text-[#111] text-[24px] sm:text-[28px] font-medium">
          Oxşar elanlar
        </h1>


        <div className='w-full grid grid-cols-4 max-[1025px]:grid-cols-3 max-[769px]:grid-cols-2 max-[426px]:grid-cols-1 gap-[24px]'>
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
