import React from 'react'

const ConnectionButton = ({ name}) => {
  return (
    <>
    <div className='relative w-[50%]'>
      
      <div className='absolute bottom-0 left-0 right-0 hidden w-0 h-full transition-all duration-1000 ease-in hover:w-full hover:block rounded-[12px] border border-solid border-primary'
      style={{ background: 'linear-gradient(90deg, #02836F 0%, #1A1919 100%)' }}></div>   
      <button className='w-[150px] h-[48px] p-[10px] flex items-center justify-center rounded-[12px] border border-solid border-primary
      text-primary text-base font-medium cursor-pointer hover:text-white'>
        {name}
      </button>     
      </div>
    </>
  )
}

export default ConnectionButton
