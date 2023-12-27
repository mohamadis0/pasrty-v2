import Card from "../SliderCard";

function Container({ data }){
    
        
  return (
    <div className="grid  place-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-fill overflow-hidden">
      {data.map((card, index) => (
     <Card key={index} image={card.imageSrc} name={card.title}/>
    
      ))}
    </div>
  );
}

export default Container;
