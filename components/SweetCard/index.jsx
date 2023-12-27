import React from 'react'

function SweetCard() {
  return (
    <div className='grid h-fit mx-10 md:mx-16 lg:mx-32 m-12 border-2 border-gray-400 overflow-hidden'>
       
        <div className='flex gap-5 mx-8 lg:mx-20 my-8 h-fit '>
        <div className='w-1/2 md:w-2/6 lg:w-1/6 border border-pink-500 h-40'>
            

        </div>
        <div className='relative w-1/2 md:w-4/6 lg:w-5/6 flex-col '>
            <div><p className='font-serif font-semibold'>Brownie <span className='font-semibold font-mono text-pink-500'>7.00 USD</span> </p></div>
            <div className='absolute inset-x-0 bottom-0  h-fit grid gap-y-4'>
                <div className='flex justify-between  '>
                    <div className='flex w-12 lg:w-20 bg-red-400 h-12'></div>
                    <div className='flex w-12 lg:w-20 bg-red-400 h-12'></div>
                </div>
                <div className='h-12 bg-slate-500'>

                </div>

            </div>

        </div>
        </div>
        <div className="border-t border-pink-200 "></div>
        <input type="text" placeholder='Any Extra Notes' className='placeholder:font-serif placeholder:text-gray-500 placeholder:text-sm placeholder:lg:text-lg focus:outline-none rounded mx-10 md:mx-28 lg:mx-40 my-12 h-20 md:h-32 lg:h-40 pb-12 lg:pb-20 pl-5 '
        style={{ boxShadow: '0 0 10px  rgba(0, 0, 0, 0.2)',  
         }}/>

        

    </div>
  )
}

export default SweetCard