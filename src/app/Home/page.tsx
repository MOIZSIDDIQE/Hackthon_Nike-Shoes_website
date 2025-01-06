import Image from "next/image";
import React from "react";
import Arrow from "./Arrow";
import GearCard from "./GearCard";
import Hero from "./Hero";

const HomeBody = () => {
  return (
    <section>
      <Hero />
      {/* slid show  Section*/}
      <div className="">
        {/* Next Button */}
        <div className="flex justify-between mx-5">
          <h1 className="text-2xl font-medium">Best of Air Max</h1>
          <Arrow name="Shop" />
        </div>

        {/* Shoping Card  */}

        <div className="flex justify-around gap-5 mt-3 ">
          <div className="">
            <Image
              src="/assest/Max_Shoes.jpg"
              width={400}
              height={400}
              alt="Shoes "
            />

            <div className="flex justify-between mt-3">
              <h3 className="font-medium">Nike Air Max Pulse</h3>
              <p>₹ 13 995</p>
            </div>

            <p className="text-[#757575] mt-1">Women's Shoes</p>
          </div>

          <div className="">
            <Image
              src="/assest/Max_Shoes.jpg"
              width={400}
              height={400}
              alt="Shoes "
            />

            <div className="flex justify-between mt-3">
              <h3 className="font-medium">Nike Air Max Pulse</h3>
              <p>₹ 13 995</p>
            </div>

            <p className="text-[#757575] mt-1">Men's Shoes</p>
          </div>

          <div className="">
            <Image
              src="/assest/max_Shoes2.jpg"
              width={400}
              height={400}
              alt="Shoes "
            />

            <div className="flex justify-between mt-3">
              <h3 className="font-medium">Nike Air Max Pulse</h3>
              <p>₹ 16 995</p>
            </div>

            <p className="text-[#757575] mt-1">Men's Shoes</p>
          </div>
        </div>
      </div>

      {/* Features */}

      <div className="p-6 h-[1000px] flex justify-evenly flex-col mt-10">
        <h1 className="font-medium text-lg">Features</h1>
        <div className="flex justify-center items-center mt-3">
          <Image
            src="/assest/walk.jpg"
            width={1300}
            height={750}
            alt="Features "
          />
        </div>

        {/* Description */}
        <div className="text-center space-y-7 mt-8 ">
          <h1 className="text-5xl font-semibold">STEP INTO WHAT FEELS GOOD</h1>
          <p className="text-[#757575]">
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-full">
            Find Your Shoe
          </button>
        </div>
      </div>

      {/* Gear Up Section */}
      <div className="p-4 mt-5 font-medium">
        <h1 className="text-2xl py-6">Gear Up</h1>

        <div className="flex justify-evenly  ">
          <div className="">

            {/* Mens shop */}
            <div className="mr-14">
              <Arrow name="Shop Men's" />
            </div>
            <div className="flex gap-2 ">
              <GearCard
                Link="/assest/man1.jpg"
                alt="clothes pic"
                d1="Nike Dri-FIT ADV TechKnit Ultra"
                d2="Men's Short-Sleeve Running Top"
                rate="₹ 3 895"
              />
              <GearCard
                Link="/assest/man2.jpg"
                alt="clothes pic"
                d1="Nike Dri-FIT Challenger"
                d2="Men's 18cm (approx.) 2-in-1 Versatile Shorts"
                rate="₹ 2 495"
              />

            </div>

          </div>

          {/* wom ens shop */}
          <div className="">
            <div className="mr-14">
              <Arrow name="Shop Men's" />
            </div>
            <div className="flex gap-2 items-en">
              <GearCard
                Link="/assest/woman1.png"
                alt="clothes pic"
                d1="Nike Dri-FIT ADV Run Division"
                d2="Women's Long-Sleeve Running Top"
                rate="₹ 5 295"
              />
              <GearCard
                Link="/assest/woman2.jpg"
                alt="clothes pic"
                d1="Nike Fast"
                d2="Women's Mid-Rise 7/8 Running Leggings with Pockets"
                rate="₹ 3 795"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Flight Essential */}
      <div className="px-10 mt-20">
        <h1 className="font-medium text-xl ">Don't Miss</h1>
        <div className=" flex content-center my-7 ">
          <Image src="/assest/essential.jpg" width={1256} height={655} alt='Esential ' />
        </div>
        <div className="text-center space-y-7 ">
          <h1 className="text-5xl font-semibold mt-16">FLIGHT ESSENTIALS</h1>
          <p className="">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>

        <button className="bg-black text-white px-6 py-2 rounded-full">
          Shop
        </button>
        </div>
      </div>


      {/* Essential section  */}
      <div className="my-20 px-14">
        <h1 className="font-medium text-2xl">The Essential</h1>
        <div className="flex justify-center gap-3 py-6">
        <div className="relative">
        <Image src="/assest/mens_pic.jpg" width={400} height={550} alt='Esential ' />
                <button className="bg-white text-black px-5 py-2 rounded-full absolute bottom-10 left-8">Men's</button>
        </div>
        <div className="relative">
        <Image src="/assest/women_pic.jpg" width={400} height={550} alt='Esential ' />
                <button className="bg-white text-black px-5 py-2 rounded-full absolute bottom-10 left-8">Women's</button>
        </div>
        <div className="relative">
        <Image src="/assest/kid_pic.jpg" width={400} height={550} alt='Esential ' />
                <button className="bg-white text-black px-5 py-2 rounded-full absolute bottom-10 left-8">Kid's</button>
        </div>
        </div>
      </div>

      {/* Links  */}
      <div className="flex justify-center items-center pb-20">
        <div className="flex justify-between gap-28">
          <div className="">
            <p className="font-medium mb-10">Icons</p>
            <div className="text-[#757575] space-y-3">
              <p>Air Force 1</p>
              <p>Huarache</p>
              <p>Air Max 90</p>
              <p>Air Max 95</p>
            </div>
          </div>
          <div className="">
            <p className="font-medium mb-10">Shoes</p>
            <div className="text-[#757575] space-y-3">
              <p>All Shoes</p>
              <p>Custom Shoes</p>
              <p>Jordan Shoes</p>
              <p>Running Shoes</p>
            </div>
          </div>
          <div className="">
            <p className="font-medium mb-10">Clothing</p>
            <div className="text-[#757575] space-y-3">
              <p>All Clothing</p>
              <p>Modest Wear</p>
              <p>Hoodies & Pullovers</p>
              <p>Shirts & Tops</p>
            </div>
          </div>
          <div className="">
            <p className="font-medium mb-10">Kids'</p>
            <div className="text-[#757575] space-y-3">
              <p>Infant & Toddler Shoes</p>
              <p>Kids' Shoes</p>
              <p>Kids' Jordan Shoes</p>
              <p>Kids' Basketball Shoes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBody;
