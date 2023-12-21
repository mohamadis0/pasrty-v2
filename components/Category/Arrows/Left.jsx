import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

function Left({ onClick, ...rest }) {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
      } = rest;
  return (<>
    <IoIosArrowBack className='h-12 w-12 lg:h-24 lg:w-8 absolute  left-0 ' onClick={() => onClick()} /></>
  )
}

export default Left