"use client"
import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Left from '../Category/Arrows/Left';
import Right from '../Category/Arrows/Right';
import { cardsData } from '../data/Data';
import MenuCard from '../MenuCard';
import Link from 'next/link';

function Menu() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
      };
  return (
    <div className=''>

        <p className='font-mono font-bold text-xl grid justify-items-center text-pink-400'>Menu</p>
        <Carousel
        className=" m-12 p-12 sm:m-8 sm:p-8 md:m-12 md:p-12 lg:m-16 "
        swipeable={true}
        draggable={true}
        showDots={true}
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
        {cardsData.map((item, index) => (
            <MenuCard key={index} name={item.title} price={item.price} img={item.imageSrc}/>
        ))}
      </Carousel>
    </div>
  )
}

export default Menu