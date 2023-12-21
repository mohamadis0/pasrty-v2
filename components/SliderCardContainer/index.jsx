import React, { useEffect } from "react";
import Card from "../SliderCard";

function Container({ data }){
    
        
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-fill overflow-hidden">
      {data.map((card, index) => (
     <Card key={index} image={card.imageSrc} name={card.title}/>
    
      ))}
    </div>
  );
}

export default Container;
