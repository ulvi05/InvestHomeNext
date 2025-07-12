import React from 'react'

const roundedBlackButton = ({icon}) => {
  return (
    <>
      <button className='w-8 h-8 p-x-[6px] p-y-[5px] flex items-center justify-center aspect-square cursor-pointer rounded-full bg-black hover:bg-primary transition-colors duration-200'>
        <div className="hover:scale-110 transition-transform duration-200">
          {icon}
        </div>
      </button>
    </>
  )
}

export default roundedBlackButton
