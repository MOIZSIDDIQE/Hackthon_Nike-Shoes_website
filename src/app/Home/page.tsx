'use client';
import Image from "next/image";
import React, { useRef } from "react";
import Arrow from "./Arrow";
import GearCard from "./GearCard";
import Hero from "./Hero";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";

const HomeBody = () => {



  const swiperRef = useRef<any>(null);

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };



  return (
    <>
      <section className="">
        <Hero />
        {/* slid show  Section*/}
        <section>
          {/* Header Section */}
          <div className="flex justify-between mx-5">
            <h1 className="text-2xl font-medium">Best of Air Max</h1>
            {/*<div className="flex gap-5 justify-end my-4 ">
              <div onClick={handlePrevClick} className="bg-[#F5F5F5] rounded-full w-12 h-12 flex-center cursor-pointer swiper-button-prev swiper-button-disabled">
                <Image src="/less.svg" width={10} height={10} alt='less' />
              </div>
              <div onClick={handleNextClick} className="bg-[#E5E5E5] rounded-full w-12 h-12 flex-center cursor-pointer swiper-button-next swiper-button-disabled">
                <Image src="/greater.svg" width={10} height={10} alt='greater' />
              </div>
            </div>*/}
            <Arrow onPrevChange={handlePrevClick} onNextChange={handleNextClick}/>
          </div>

          {/* Swiper Section */}
          <Swiper
            ref={swiperRef}
            slidesPerView={4}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Navigation]}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div>
                <Image
                  src="/assest/Max_shoes.jpg"
                  width={400}
                  height={400}
                  alt="Shoes"
                />
                <div className="flex justify-between mt-3">
                  <h3 className="font-medium">Nike Air Max Pulse</h3>
                  <p>₹ 13 995</p>
                </div>
                <p className="text-[#757575] mt-1">Women's Shoes</p>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div>
                <Image
                  src="/assest/Max_shoes.jpg"
                  width={400}
                  height={400}
                  alt="Shoes"
                />
                <div className="flex justify-between mt-3">
                  <h3 className="font-medium">Nike Air Max Pulse</h3>
                  <p>₹ 13 995</p>
                </div>
                <p className="text-[#757575] mt-1">Men's Shoes</p>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div>
                <Image
                  src="/assest/max_shoes2.jpg"
                  width={400}
                  height={400}
                  alt="Shoes"
                />
                <div className="flex justify-between mt-3">
                  <h3 className="font-medium">Nike Air Max Pulse</h3>
                  <p>₹ 16 995</p>
                </div>
                <p className="text-[#757575] mt-1">Men's Shoes</p>
              </div>
            </SwiperSlide>
            {/* Slide 3 */}
            <SwiperSlide>
              <div>
                <Image
                  src="/assest/max_shoes2.jpg"
                  width={400}
                  height={400}
                  alt="Shoes"
                />
                <div className="flex justify-between mt-3">
                  <h3 className="font-medium">Nike Air Max Pulse</h3>
                  <p>₹ 16 995</p>
                </div>
                <p className="text-[#757575] mt-1">Men's Shoes</p>
              </div>
            </SwiperSlide>
            {/* Slide 3 */}
            <SwiperSlide>
              <div>
                <Image
                  src="/assest/max_shoes2.jpg"
                  width={400}
                  height={400}
                  alt="Shoes"
                />
                <div className="flex justify-between mt-3">
                  <h3 className="font-medium">Nike Air Max Pulse</h3>
                  <p>₹ 16 995</p>
                </div>
                <p className="text-[#757575] mt-1">Men's Shoes</p>
              </div>
            </SwiperSlide>

            {/* Add more slides similarly */}
          </Swiper>
        </section>

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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">STEP INTO WHAT FEELS GOOD</h1>
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

          <div className="grid grid-cols-1 xl:flex justify-evenly  ">
            <div className="">

              {/* Mens shop */}
              <div className="mr-14 ">
                <Arrow name="Shop Men's" />
              </div>
              <div className="flex gap-2 sm:justify-evenly ">
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mt-16">FLIGHT ESSENTIALS</h1>
            <p className="">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>

            <button className="bg-black text-white px-6 py-2 rounded-full">
              Shop
            </button>
          </div>
        </div>


        {/* Essential section  */}
        <div className="my-20 px-14">
          <h1 className="font-medium text-2xl">The Essential</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-3 py-6 w-full border">
            <div className="relative">
              <Image src="/assest/mens_pic.jpg" width={400} height={550} alt="Essential" />
              <button className="bg-white text-black px-5 py-2 rounded-full absolute bottom-10 left-8">
                Men's
              </button>
            </div>
            <div className="relative">
              <Image src="/assest/women_pic.jpg" width={400} height={550} alt="Essential" />
              <button className="bg-white text-black px-5 py-2 rounded-full absolute bottom-10 left-8">
                Women's
              </button>
            </div>
            <div className="relative md:col-span-2 lg:col-span-1 lg:place-self-center w-fit mx-auto">
              <Image src="/assest/kid_pic.jpg" width={400} height={550} alt="Essential" />
              <button className="bg-white text-black px-5 py-2 rounded-full absolute bottom-10 left-8">
                Kid's
              </button>
            </div>
          </div>

        </div>

        {/* Links  */}
        <div className="flex justify-center items-center pb-20">
          <div className="grid  grid-cols-2 lg:grid-cols-4 justify-between items-center gap-28">
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
    </>
  );
};

export default HomeBody;
