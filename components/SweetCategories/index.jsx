"use client";
import Button from "@/components/SweetButton";
import { cardsData } from "@/components/data/Data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function SweetCategories() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  return (
    
        <div  
        className="z-20"
        style={{
        position: "-webkit-sticky",
        position: "sticky",
        top: "4rem",
        backgroundColor: " white",
      }}>
    <div
      className="mt-10  flex justify-center mx-2 lg:mx-80"
     
    >
      <Carousel
        className="fixed  m-2 p-4 sm:m-6 md:m-8 "
        swipeable={true}
        draggable={true}
        showDots={false}
        arrows={false}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        customTransition={"transform 300ms ease-in-out "}
        transitionDuration={1000}
        centerMode={false}
      >
        {cardsData.map((card, index) => (
          <Button key={index} name={card.title} />
        ))}
      </Carousel>
    </div></div>
  );
}

export default SweetCategories;
