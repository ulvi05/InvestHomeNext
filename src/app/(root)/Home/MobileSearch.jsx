"use client"

import React, { useState } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Image from 'next/image';

const MobileSearch = () => {
  const isMobile = useMediaQuery('(max-width: 425px)');

  const [value, setValue] = useState("");

  return (
    <>
      {
        isMobile ?
          <section>
            <div className='px-[16px] py-[20px]'>
              <form action="">
                <div className='flex justify-between gap-[15px]'>
                  <Image
                    src={"/icons/sort-by-down.svg"}
                    alt='sort-down'
                    width={24}
                    height={24}
                  />
                  <div className='relative w-full shadow-[0px_1px_4px_0px_rgba(93,93,93,0.25)] rounded-[4px] overflow-hidden'>
                    <input
                      value={value}
                      onChange={(e) => { setValue(e.target.value) }}
                      id="custom-placeholder"
                      type="search"
                      className='w-full px-[8px] py-[12px] bg-[#E7E7E780] outline-0' />
                    {
                      !value &&
                      (<div className='flex gap-[2px] absolute top-[50%] translate-y-[-50%] left-[8px]'>
                        <Image
                          src={"/icons/search-thin.svg"}
                          alt='sort-down'
                          width={16}
                          height={16}
                        />
                        <label htmlFor="custom-placeholder" className='text-[#888888] text-[16px]'>Axtarış</label>
                      </div>)
                    }
                  </div>
                  <button type='submit' className='text-[var(--primary-color)] font-[400] text-[16px]'>
                    Filter
                  </button>
                </div>
              </form>
            </div>
          </section>
          : ""
      }
    </>
  )
}

export default MobileSearch