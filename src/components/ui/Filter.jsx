'use client';

import { useState } from "react";
import { Button } from "./HouseTypesButtons";
import { FilterBtn } from "../core/Svg"; // Make sure this is a valid React component

export default function Filter() {
  const [selectedType, setSelectedType] = useState("Bütün");
  const [showPrice, setShowPrice] = useState(false); // Added state

  return (
    <>
      <div className="max-w-[1600px] mx-auto px-[80px] max-[1025px]:px-[20px] max-[426px]:px-[16px] flex flex-col items-center">
        <div>
          <Button onSelect={(val) => setSelectedType(val)} />
        </div>
        <div className="max-w-[1000px] flex bg-[white] rounded-t-[12px] w-full py-[8.5px] px-[24px] gap-[32px]">

          <div className="flex items-center gap-[16px] justify-between min-w-0 basis-[70%]">
            <div className="cursor-pointer w-[100%] flex flex-col min-w-0">
              <span className="inline-block text-[13px] text-[#969696] whitespace-nowrap overflow-hidden text-ellipsis">Açar söz</span>
              <div className="flex items-center justify-between">
                <span className="inline-block add-text text-[16px] whitespace-nowrap min-w-0 overflow-hidden text-ellipsis">Şəhər, Metro, Qəsəbə, Ünvan</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 24 25">
                  <path
                    d="M12 15a1 1 0 01-.53-.15 1 1 0 01-.47-.57l-3.5-3.5a1 1 0 011.41-1.41L12 12.59l3.09-3.22a1 1 0 111.41 1.41l-3.5 3.5a1 1 0 01-.47.57A1 1 0 0112 15Z"
                    fill="#111111"
                  />
                </svg>
              </div>
            </div>

            <div className="w-[1px] h-[32px] bg-[#D9D9D9]" />

            <div className="cursor-pointer w-[100%] flex flex-col min-w-0">
              <span className="inline-block text-[13px] text-[#969696] whitespace-nowrap overflow-hidden text-ellipsis">Qiymət</span>
              <div className="flex items-center justify-between">
                <span className="inline-block add-text text-[16px] whitespace-nowrap min-w-0 overflow-hidden text-ellipsis">Əlavə et</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 24 25">
                  <path
                    d="M12 15a1 1 0 01-.53-.15 1 1 0 01-.47-.57l-3.5-3.5a1 1 0 011.41-1.41L12 12.59l3.09-3.22a1 1 0 111.41 1.41l-3.5 3.5a1 1 0 01-.47.57A1 1 0 0112 15Z"
                    fill="#111111"
                  />
                </svg>
              </div>
            </div>

            <div className="w-[1px] h-[32px] bg-[#D9D9D9]" />

            <div className="cursor-pointer w-[100%] flex flex-col min-w-0">
              <span className="inline-block text-[13px] text-[#969696] whitespace-nowrap overflow-hidden text-ellipsis">Otaq</span>
              <div className="flex items-center justify-between">
                <span className="inline-block add-text text-[16px] whitespace-nowrap min-w-0 overflow-hidden text-ellipsis">Əlavə et</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 24 25">
                  <path
                    d="M12 15a1 1 0 01-.53-.15 1 1 0 01-.47-.57l-3.5-3.5a1 1 0 011.41-1.41L12 12.59l3.09-3.22a1 1 0 111.41 1.41l-3.5 3.5a1 1 0 01-.47.57A1 1 0 0112 15Z"
                    fill="#111111"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 items-center justify-end gap-[14px] basis-[30%]">
            <div className="cursor-pointer min-w-0 flex text-primary px-[16px] py-[12px] gap-[8px] rounded-[8px] border border-[#E9E9E9]">
              <div>
                <FilterBtn />
              </div>
              <span className="inline-block max-[769px]:hidden whitespace-nowrap text-ellipsis min-w-0 overflow-hidden">Filter</span>
            </div>
            <div className="cursor-pointer min-w-0 flex bg-primary text-white px-[16px] py-[12px] gap-[8px] rounded-[8px]">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M9.5 16C7.7 16 6.2 15.4 5 14.2C3.8 13 3.2 11.5 3.2 9.5C3.2 7.5 3.8 6 5 4.8C6.2 3.6 7.7 3 9.5 3C11.3 3 12.8 3.6 14 4.8C15.2 6 15.8 7.5 15.8 9.5C15.8 10.2 15.7 10.9 15.5 11.5C15.3 12.1 15 12.7 14.6 13.2L20.3 18.9C20.5 19.1 20.6 19.4 20.6 19.7C20.6 20 20.5 20.3 20.3 20.5C20.1 20.7 19.8 20.8 19.5 20.8C19.2 20.8 18.9 20.7 18.7 20.5L13 14.8C12.5 15.2 11.9 15.5 11.3 15.7C10.7 15.9 10.1 16 9.5 16ZM9.5 14C10.6 14 11.6 13.6 12.4 12.8C13.2 12 13.6 11 13.6 9.9C13.6 8.8 13.2 7.8 12.4 7C11.6 6.2 10.6 5.8 9.5 5.8C8.4 5.8 7.4 6.2 6.6 7C5.8 7.8 5.4 8.8 5.4 9.9C5.4 11 5.8 12 6.6 12.8C7.4 13.6 8.4 14 9.5 14Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <span className="inline-block max-[769px]:hidden whitespace-nowrap text-ellipsis min-w-0 overflow-hidden">Search</span>
            </div>
          </div>

        </div>
      </div>
    </>
    // <div className="flex flex-col items-center">
    //   <Button onSelect={(val) => setSelectedType(val)} />

    //   <div className="filter-bar w-[902px] h-[86px] flex bg-white cursor-pointer py-[8.5px] px-[24px] gap-[32px] rounded-t-[12px]">
    //     <div className="flex items-center py-[4px]">
    //       {/* Açar söz */}
    //       <div className="filter-item flex flex-col text-primary px-[10px] h-[69px] py-[6px] w-[242px]">
    //         <span className="text-[13px] text-[#969696]">Açar söz</span>
    //         <div className="flex py-[4px] h-[69px] justify-between">
    //           <span className="add-text text-[16px]">Şəhər, Metro, Ünvan...</span>
    //           <span>
    //             {/* Down Arrow Icon */}
    //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 24 25">
    //               <path
    //                 d="M12 15a1 1 0 01-.53-.15 1 1 0 01-.47-.57l-3.5-3.5a1 1 0 011.41-1.41L12 12.59l3.09-3.22a1 1 0 111.41 1.41l-3.5 3.5a1 1 0 01-.47.57A1 1 0 0112 15Z"
    //                 fill="#111111"
    //               />
    //             </svg>
    //           </span>
    //         </div>
    //       </div>

    //       {/* Divider */}
    //       <div className="w-[1px] h-[32px] bg-[#D9D9D9] mx-[16px]" />

    //       {/* Qiymət */}
    //       <div
    //         className="filter-item dropdown-toggle flex flex-col text-primary px-[10px] h-[69px] py-[6px] w-[140px]"
    //         onClick={() => setShowPrice(!showPrice)}
    //       >
    //         <span className="text-[13px] text-[#969696]">Qiymət</span>
    //         <div className="flex py-[4px] h-[69px] justify-between">
    //           <span className="add-text text-[16px]">Əlavə et</span>
    //           <span>
    //             {/* Arrow SVG */}
    //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 24 25">
    //               <path d="M12 15L8 11h8l-4 4Z" fill="#111111" />
    //             </svg>
    //           </span>
    //         </div>
    //       </div>

    //       {/* Divider */}
    //       <div className="w-[1px] h-[32px] bg-[#D9D9D9] mx-[16px]" />

    //       {/* Otaq */}
    //       <div className="filter-item dropdown-toggle flex flex-col text-primary px-[10px] py-[6px] h-[69px] w-[140px]">
    //         <span className="text-[13px] text-[#969696]">Otaq</span>
    //         <div className="flex py-[4px] justify-between">
    //           <span className="add-text text-[16px]">Əlavə et</span>
    //           <span>
    //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 24 25">
    //               <path d="M12 15L8 11h8l-4 4Z" fill="#111111" />
    //             </svg>
    //           </span>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Buttons */}
    //     <div className="flex gap-[14px] text-[16px] items-center">
    //       <div className="flex w-[105px] h-[48px] items-center justify-center text-primary px-[16px] py-[12px] gap-[8px] rounded-[8px] border border-[#E9E9E9]">
    //         <FilterBtn />
    //         <span>Filter</span>
    //       </div>
    //       <div className="flex w-[105px] h-[48px] bg-primary items-center justify-center text-white px-[16px] py-[12px] gap-[8px] rounded-[8px]">
    //         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    //           <path
    //             d="M9.5 16C7.7 16 6.2 15.4 5 14.2C3.8 13 3.2 11.5 3.2 9.5C3.2 7.5 3.8 6 5 4.8C6.2 3.6 7.7 3 9.5 3C11.3 3 12.8 3.6 14 4.8C15.2 6 15.8 7.5 15.8 9.5C15.8 10.2 15.7 10.9 15.5 11.5C15.3 12.1 15 12.7 14.6 13.2L20.3 18.9C20.5 19.1 20.6 19.4 20.6 19.7C20.6 20 20.5 20.3 20.3 20.5C20.1 20.7 19.8 20.8 19.5 20.8C19.2 20.8 18.9 20.7 18.7 20.5L13 14.8C12.5 15.2 11.9 15.5 11.3 15.7C10.7 15.9 10.1 16 9.5 16ZM9.5 14C10.6 14 11.6 13.6 12.4 12.8C13.2 12 13.6 11 13.6 9.9C13.6 8.8 13.2 7.8 12.4 7C11.6 6.2 10.6 5.8 9.5 5.8C8.4 5.8 7.4 6.2 6.6 7C5.8 7.8 5.4 8.8 5.4 9.9C5.4 11 5.8 12 6.6 12.8C7.4 13.6 8.4 14 9.5 14Z"
    //             fill="#fff"
    //           />
    //         </svg>
    //         <span className="mr-[3px]">Axtar</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
