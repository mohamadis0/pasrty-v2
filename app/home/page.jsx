import Hero from "@/components/Hero"
import Category from "@/components/Category"
import Day from "@/components/ItemOfTheDay"
import Middle from "@/components/MiddleBanner"
import Third from "@/components/ThirdBanner"
import Menu from "@/components/Menu"


function page() {
  return (
    <div>
      <Hero/>
     <Category/>
     <Middle/>
     <Day/>
     <Third/>
     <Menu/>
    </div>
  )
}

export default page
