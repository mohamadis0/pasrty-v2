"use client"
import React from 'react'
import Carousel from 'react-multi-carousel'
import Left from '../Category/Arrows/Left';
import Right from '../Category/Arrows/Right';
import { cardsData } from '../data/Data';

function Menu() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
  return (
    <div className=''>
        <p className='font-mono font-bold text-xl grid justify-items-center'>Menu</p>
        <Carousel
        className=" m-12 p-12 sm:m-8 sm:p-8 md:m-12 md:p-12 lg:m-16 lg:p-16 "
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} 
        infinite={true}
        customLeftArrow={<Left />}
        customRightArrow={<Right />}
        keyBoardControl={true}
        customTransition={"transform 300ms ease-in-out "}
        transitionDuration={1000}
        centerMode={false}
        // containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        {cardsData.map((chunk, index) => (
            <div></div>
        ))}
      </Carousel>
    </div>
  )
}

export default Menu