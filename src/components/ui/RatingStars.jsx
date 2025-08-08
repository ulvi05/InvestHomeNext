"use client";


import WhiteStar from "../../../public/icons/whiteStar.svg"
import YellowStar from "../../../public/icons/yellowStar.svg"
import { useState } from 'react';
import Image from 'next/image';

const RatingStars = () => {

const [rating, setRating] = useState(0)


  return (
    <>
    <div className='flex flex-row items-center gap-[12px]'>
     {Array.from({ length: 5 }).map((_, index) => {
     const starValue = index + 1;
     return (
     <Image
     key={index}
     src={starValue <= rating ? YellowStar : WhiteStar}
     alt={starValue <= rating ? "Yellow Star" : "White Star"}
     width={24}
     height={24}
     onClick={() => setRating(starValue)}
     style={{ cursor: 'pointer' }}
     />
     );
     })}

     <p className="text-black text-[16px]/[26px]">( {rating}/5 )</p>
    </div>

    </>
  )
}

export default RatingStars
