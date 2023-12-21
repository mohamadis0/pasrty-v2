"use client";
import React from "react";
import Carousel from "react-multi-carousel";

function Middle() {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    // height: "70vh",
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
    <div className="grid place-content-center mx-8 sm:mx-12 md:mx-16 lg:mx-24">
      <Carousel
       className="lg:h-[400px] lg:w-[1000px] "
        autoPlay={true}
        swipeable={true}
        arrows={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        customTransition={"transform 300ms ease-in-out "}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        transitionDuration={1000}
      >
        {slideImages.map((slideImage, index) => (
          <div key={index} className="flex flex-row h-[200px] md:h-[300px] lg:h-[500px]">
           
            <div className="basis-3/4"
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url}) `,
              }}
            >
                
            </div>
            <div className="basis-1/4 bg-gray-200 grid place-content-center ">
                <div >
                    <p className="font-semibold font-mono lg:text-4xl text-pink-400  " 
                    sytle={{
                       shadow: `2px 2px 5px red`,
                    }}
                    >
                       Every thing is fresh
                    </p></div>
                </div>
            </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Middle;
