import SweetCard from "@/components/SweetCard";
import SweetCarousel from "@/components/SweetCarousel";
import SweetCategories from "@/components/SweetCategories";


function page() {
  
 
  return (
    <div>
      <div className="font-bold font-serif mt-6 text-pink-500 text-4xl flex justify-center">
        Our Sweet Sections
      </div>

      <SweetCategories/>
      <SweetCarousel/>
      <SweetCard/>
    </div>
  );
}

export default page;
