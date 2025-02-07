'use client';
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import Arrow from "./Arrow";
import GearCard from "./GearCard";
import Hero from "./Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Navigation } from "swiper/modules";
import { client } from "@/sanity/lib/client";
import { products } from "@/sanity/lib/queries";
import { productType } from "../../../types/type";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const HomeBody = () => {
  const [productList, setProductList] = useState<productType[]>([]);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: productType[] = await client.fetch(products);
      setProductList(fetchedProducts);
    }
    fetchProducts();
  }, []);

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
        {/* Slideshow Section */}
        <section className="mx-5">
          {/* Header Section */}
          <div className="flex justify-between mx-5">
            <h1 className="text-2xl font-medium">Best of Air Max</h1>
            <Arrow onPrevChange={handlePrevClick} onNextChange={handleNextClick} />
          </div>

          {/* Swiper Section */}
          <Swiper
  ref={swiperRef}
  slidesPerView={3}
  spaceBetween={30}
  modules={[Navigation]}
  className="py-6"
>
  {productList.map((product) => (
    <SwiperSlide key={product._id} className="flex justify-center">
      <Link href={`/product/${product.slug.current}`} className="group">
        <div className="relative bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl shadow-xl p-6 transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-2xl">
          
          {/* Product Image with Overlay */}
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={urlFor(product.image).url()}
              width={400}
              height={400}
              alt={product.productName}
              className="rounded-xl object-cover group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </div>

          {/* Product Details */}
          <div className="mt-4 text-center space-y-2">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {product.productName}
            </h3>
            <p className="text-gray-600 text-sm uppercase tracking-wide">{product._type}</p>
            <p className="text-2xl font-bold text-black mt-2">₹ {product.price}</p>
          </div>
          
          {/* Hover Button */}
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Details
          </button>
        </div>
      </Link>
    </SwiperSlide>
  ))}
</Swiper>

        </section>

        {/* Features Section */}
        <div className="p-6 h-[1000px] flex justify-evenly flex-col mt-10">
          <h1 className="font-medium text-lg">Features</h1>
          <div className="flex justify-center items-center mt-3">
            <Image src="/assest/walk.jpg" width={1300} height={750} alt="Features" />
          </div>

          {/* Description */}
          <div className="text-center space-y-7 mt-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">STEP INTO WHAT FEELS GOOD</h1>
            <p className="text-[#757575]">Cause everyone should know the feeling of running in that perfect pair.</p>
            <button className="bg-black text-white px-6 py-2 rounded-full">Find Your Shoe</button>
          </div>
        </div>

        {/* Gear Up Section */}
        <div className="p-4 mt-5 font-medium">
          <h1 className="text-2xl py-6">Gear Up</h1>

          <div className="grid grid-cols-1 xl:flex justify-evenly">
            <div className="">
              <div className="mr-14">
                <Arrow name="Shop Men's" />
              </div>
              <div className="flex gap-2 sm:justify-evenly">
                <GearCard Link="/assest/man1.jpg" alt="clothes pic" d1="Nike Dri-FIT ADV TechKnit Ultra" d2="Men's Short-Sleeve Running Top" rate="₹ 3 895" />
                <GearCard Link="/assest/man2.jpg" alt="clothes pic" d1="Nike Dri-FIT Challenger" d2="Men's 18cm (approx.) 2-in-1 Versatile Shorts" rate="₹ 2 495" />
              </div>
            </div>

            {/* Women's shop */}
            <div className="">
              <div className="mr-14">
                <Arrow name="Shop Women's" />
              </div>
              <div className="flex gap-2 ">
                <GearCard Link="/assest/woman1.png" alt="clothes pic" d1="Nike Dri-FIT ADV Run Division" d2="Women's Long-Sleeve Running Top" rate="₹ 5 295" />
                <GearCard Link="/assest/woman2.jpg" alt="clothes pic" d1="Nike Fast" d2="Women's Mid-Rise 7/8 Running Leggings with Pockets" rate="₹ 3 795" />
              </div>
            </div>
          </div>
        </div>

        {/* Flight Essential */}
        <div className="px-10 mt-20">
          <h1 className="font-medium text-xl">Don't Miss</h1>
          <div className="flex content-center my-7">
            <Image src="/assest/essential.jpg" width={1256} height={655} alt="Essential" />
          </div>
          <div className="text-center space-y-7">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mt-16">FLIGHT ESSENTIALS</h1>
            <p>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
            <button className="bg-black text-white px-6 py-2 rounded-full">Shop</button>
          </div>
        </div>

        {/* Essential Section */}
        <div className="my-20 px-14">
          <h1 className="font-medium text-2xl">The Essential</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-3 py-6 w-full">
            <div className="relative">
              <Image src="/assest/mens_pic.jpg" width={400} height={550} alt="Essential" />
              <button className="bg-white text-black px-5 py-2 rounded-full absolute bottom-10 left-8">Men's</button>
            </div>
            <div className="relative">
              <Image src="/assest/women_pic.jpg" width={400} height={550} alt="Essential" />
              <button className="bg-white text-black px-5 py-2 rounded-full absolute bottom-10 left-8">Women's</button>
            </div>
            <div className="relative md:col-span-2 lg:col-span-1 lg:place-self-center w-fit mx-auto">
              <Image src="/assest/kid_pic.jpg" width={400} height={550} alt="Essential" />
              <button className="bg-white text-black px-5 py-2 rounded-full absolute bottom-10 left-8">Kid's</button>
            </div>
          </div>
        </div>
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
