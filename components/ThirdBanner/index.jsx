"use client"
import React from "react";
import Carousel from "react-multi-carousel";

function Third() {
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
    <div className="border-4 border-y-pink-600 my-10">
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
        customTransition={"transform 300ms ease-in-out "}
        // additionalTransfrom={2}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all .5"
        transitionDuration={1000}
        // dotListClass="custom-dot-list-style"
      >
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className="h-[100px] md:h-[200px] lg:h-[300px] grid justify-items-start content-center"
              style={{
                // ...divStyle,
                backgroundImage: `url(${slideImage.url}) `,
              }}
            >
              <div className="grid place-items-center h-fit mx-20 gap-10">
              <p className="text-5xl text-pink-600">WOMAN DAY!</p>
              <p className="text-3xl text-pink-600">Celebrate with us your special day!</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Third;
