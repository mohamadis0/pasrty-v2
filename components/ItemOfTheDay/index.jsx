import React from 'react'
import Card from '../Card'

function Day() {
  return (
    <div className='grid justify-items-center my-12 mx-8 sm:mx-12 md:mx-20 lg:mx-32'>
      <p className="font-mono font-semibold text-xl md:text-3xl lg:text-4xl text-pink-700 mb-6 md:mb-10 lg:mb-12">
      Items of the day
      </p>
      <div className=' w-full h-[200px] md:h-[300px] lg:h-[500px] flex justify-center'>
    <Card/>
    <Card/>
      </div>
     </div>
  )
}

export default Day