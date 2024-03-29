"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

function Hero() {
  
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
  };
  const slideImages = [
    {
      url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Slide 1",
    },
    {
      url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      caption: "Slide 2",
    },
    {
      url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Slide 3",
    },
  ];
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
    // <Link href="/sweets">
    <div>
      
      <Carousel
      
      //  additionalTransfrom={'scale(2,3)'}
        autoPlay={true}
        swipeable={true}
        arrows={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} 
        infinite={true}
        customTransition={'transform 300ms ease-in-out '}
        // additionalTransfrom={2}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all .5"
        transitionDuration={1000}
        // dotListClass="custom-dot-list-style"
       
      >
        {slideImages.map((slideImage, index) => (
          <div key={index}  >
           
            <div
            className="h-[200px] md:h-[300px] lg:h-[550px]"
              
              // style={{ 
              //   // ...divStyle, 
              //   backgroundImage: `url(${slideImage.url}) ` }}
            >
              <Image
              src={`${slideImage.url}` }
              alt={`url(${slideImage.caption}) `}
              layout='fill'
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>

    // </Link>
  );
}

export default Hero;
