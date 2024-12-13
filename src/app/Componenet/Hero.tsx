import Image from 'next/image'
import React from 'react'


const Hero = () => {
  return (

    //hero Section 
    <main className="">

      {/* first Heading */}
      <div className="text-center bg-[#F5F5F5] border-2 border-[#eeeef0] py-3">
        <h6 className='text-lg font-bold'>Hello Nike App</h6>
        <p className='text-sm'>Download the app to access everything Nike. Get Your Great</p>
      </div>
      <div className="flex flex-col text-center items-center justify-center  ">

        {/* Hero Image */}
        <Image src="/assest/image.svg" width={1200} height={750} alt='HeroPic ' />

        {/*Description*/}
        <div className="w[580px] h-[350p] space-y-6 p-20">
          <p className='font-bold'>First Look</p>
          <h1 className='text-5xl uppercase font-semibold '>Nike Air Max Pulse</h1>
          <p>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
—designed to push you past your limits and help you go to the max.</p>

        {/* Button  */}
          <div className="">
            <button className="bg-black text-white px-6 py-2 rounded-full">Notify Me </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero