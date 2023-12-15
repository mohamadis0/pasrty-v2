
import React from 'react'
import backgroundImage from "../../public/images/hero.jpg";
import Link from 'next/link';

function Hero() {
  return (
    <Link href="/sweets">
     <div
      className="bg-cover bg-center flex justify-between lg:h-[77vh]"
      style={{
        backgroundImage:`url(${backgroundImage.src})`,
        width:"full"
      }}
    >
        <div className='mx-24 my-12 w-32 h-24 md:mx-44 md:my-12 md:w-40 md:h-32 lg:mx-64 lg:my-20  lg:w-96 lg:h-36 '>
        <p className="text-pink-600 font-mono text-xl md:text-3xl lg:text-5xl font-black">Unleash Your Sweet Fanatasies</p>
        </div>
        </div>

        </Link>
  )
}

export default Hero