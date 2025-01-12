import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <>
      <div className="flex justify-center px-4">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-28 pt-16 pb-32">
          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src="/assest/s3.jpg"
              width={600}
              height={600}
              alt="Shoe"
              className="max-w-full h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-[380px] space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center lg:text-left">
              Nike Air Force 1 PLT.AF.ORM
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-justify">
              Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its
              "inside out"-inspired construction, including unique layering and exposed foam accents,
              ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching
              on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of
              materials and aged midsole aesthetic give this release an artisan finish.
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-center lg:text-left">
              ₹ 8,695.00
            </p>

            {/* Button Section */}
            <div className="bg-black text-white px-6 py-3 w-full sm:w-48 flex items-center justify-center gap-3 rounded-full mx-auto lg:mx-0">
              <Image src="/store2.svg" width={24} height={24} alt="store" />
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
