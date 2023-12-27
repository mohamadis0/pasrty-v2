"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cardsData } from "../data/Data";
import Left from "./Arrows/Left";
import Right from "./Arrows/Right";
import Container from "../SliderCardContainer";

function Category() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const updateWindowDimensions = () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    // componentDidMount
    updateWindowDimensions();
    // componentWillUnmount

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []); // empty dependency array to run effect only once

  useEffect(
    () => {
      // componentDidUpdate
      window.addEventListener("resize", updateWindowDimensions);

      // componentWillUnmount
      return () => {
        window.removeEventListener("resize", updateWindowDimensions);
      };
    },
    [
      /* add dependencies if needed */
    ]
  );

  function chunkArray(arr, chunkSize) {
    console.log(dimensions);
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }
  function chunk() {
    var chunkedData;
    if (dimensions.width < 768) {
      chunkedData = chunkArray(cardsData, 1);
    } else if (dimensions.width < 800) {
      chunkedData = chunkArray(cardsData, 2);
     } else if (dimensions.width < 1050) {
        chunkedData = chunkArray(cardsData, 3)
    } else if (dimensions.width < 1200) {
      chunkedData = chunkArray(cardsData, 6);
    } else {
      chunkedData = chunkArray(cardsData, 8);
    }
    return chunkedData;
  }
  const chunkedData = chunk();
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
    <div
    // className="bg-cover bg-center flex justify-between h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] my-8 md:my-16 lg:my-24 "
    className="bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] my-8 md:my-16 lg:my-24 "
      
      // style={{
      //   backgroundImage: `url(${backgroundImage.src})`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   width: "fill",
      //   height: "100vh",
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'center'
      // }}
    >
      <div className=" grid justify-items-center  w-full">
        <p className="mb-12 font-mono text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold ">
          Categories
        </p>
      </div>
      {/* <div className=" bg-slate-200"> */}
      <Carousel
        className=" mx-12"
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
        {chunkedData.map((chunk, index) => (
          <Container key={index} data={chunk} />
        ))}
      </Carousel>
    </div>
    // </div>
  );
}

export default Category;
