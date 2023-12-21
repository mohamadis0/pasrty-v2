import React from 'react'

function Card() {
  return (
    <div className='flex flex-col'>
       {/* //realtive */}
      <div className='h-12 w-12 bg-black z-50 flex relative'></div>
      <div className='z-20 relative flex border-4 rounded-md border-teal-700 h-52 w-32 lg:h-64 lg:w-52'>
      {/* <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" >
    <path d="M0, 100 C150, 200 350, 0 500, 100 L500, 0 L0, 0 Z" style={{ stroke: 'none', fill: 'teal' }} />
  </svg> */}
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" >
    <path d="M0, 300 C100, 350 500, 50 600, 400 L500, 0 L0, 0 Z" style={{ stroke: 'none', fill: 'teal' }} />
  </svg>

      </div>
    </div>
  )
}

export default Card