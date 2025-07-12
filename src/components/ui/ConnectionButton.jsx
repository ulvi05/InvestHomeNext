import React from 'react'

const ConnectionButton = ({ name}) => {
  return (
    <>
      <button className='w-[150px] h-[48px] p-[10px] flex items-center justify-center rounded-[12px] border border-solid border-primary
      text-primary text-base font-medium cursor-pointer'>
        {name}
      </button>
    </>
  )
}

export default ConnectionButton
