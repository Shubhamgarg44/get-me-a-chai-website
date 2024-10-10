import React from 'react'

const username = ({params}) => {
  return (
    <>
    <div className=' w-full relative'>
      <img className='object-cover w-full h-[350px]' src="cover.jpg" alt="" />
     <div className='absolute -bottom-12 right-[46%] border-white border-2 rounded-full'>
      <img className='rounded-full' width={120} height={120} src="cat.jpg" alt="" />
     </div>
    </div>

    <div className=' info flex justify-center item-center my-[4%] flex-col gap-3'>
      <div className='font-bold text-lg flex justify-center item-center '>
      @{params.username}

      </div>

      <div className='flex justify-center item-center text-slate-400'>
     Welocme to the crowd funding website
      </div>

     <div className='flex justify-center item-center text-slate-400'>
     9,719 members 82 post $15,450/release
     </div>
    </div>

    </>
  )
}

export default username