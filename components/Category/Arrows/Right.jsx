import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function Right({ onClick, ...rest }) {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
      } = rest;
  return (<>
    <IoIosArrowForward  className='absolute h-12 w-12  lg:h-24 lg:w-8 right-0'  onClick={() => onClick()} /></>
  )
}

export default Right