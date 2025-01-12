import Image from 'next/image'
import React from 'react'
import {cardData} from './cardData.js'
import Card from './Card'

const page = () => {
    return (
        <>
            <main className="px-12 pt-20">

                {/* Edit  */}
                <div className="flex justify-between font-medium ">
                    <h3 className="text-xl">New (500)</h3>
                    <div className="flex gap-8">
                        <div className="flex gap-3">
                            <p>Hide Filters</p>
                            <Image src="/filter.svg" width={24} height={24} alt='Filter' />
                        </div>
                        <div className="flex gap-2">
                            <p>Sort By</p>
                            <Image src="/option.svg" width={18} height={18} alt='Drop down' />
                        </div>
                    </div>
                </div>

                {/* side bar */}
                <div className="pt-12 flex">
                    <div className="w-[200px] ">
                        <div className="font-semibold space-y-3 pb-16 border-b-2 border-[#E5E5E5]">
                            <p>Shoes</p>
                            <p>Sports Bras</p>
                            <p>Tops & T-Shirts</p>
                            <p>Hoodies & Sweatshirts</p>
                            <p>Jackets</p>
                            <p>Trousers & Tights</p>
                            <p>Shorts</p>
                            <p>Tracksuits</p>
                            <p>Jumpsuits & Rompers</p>
                            <p>Skirts & Dresses</p>
                            <p>Socks</p>
                            <p>Accessories & Equipment</p>
                        </div>

                        {/* Gender */}
                        <div className="pt-4 pb-7 border-b-2 border-[#E5E5E5]">
                            <div className="font-medium flex justify-between">
                                <p className="pb-3">Gender</p>
                                <Image src="/option.svg" width={18} height={18} alt='Drop down' />
                            </div>
                            <div className="">
                                <input type="checkbox" />
                                <label className='ml-1'>Men</label>
                            </div>

                            <div className="">
                                <input type="checkbox" />
                                <label className='ml-1'>women</label>
                            </div>

                            <div className="">
                                <input type="checkbox" />
                                <label className='ml-1'>Unisex</label>
                            </div>
                        </div>

                        {/* Kids */}
                        <div className="pt-4 pb-7 border-b-2 border-[#E5E5E5]">
                            <div className="font-medium flex justify-between">
                                <p className="pb-3">Kids</p>
                                <Image src="/option.svg" width={18} height={18} alt='Drop down' />
                            </div>
                            <div className="">
                                <input type="checkbox" />
                                <label className='ml-1'>Boys </label>
                            </div>

                            <div className="">
                                <input type="checkbox" />
                                <label className='ml-1'>Girls</label>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="pt-4 pb-7 ">
                            <div className="font-medium flex justify-between">
                                <p className="pb-3">Shop By Price</p>
                                <Image src="/option.svg" width={18} height={18} alt='Drop down' />
                            </div>
                            <div className="">
                                <input type="checkbox" />
                                <label className='ml-1'>Under ₹ 2 500.00 </label>
                            </div>

                            <div className="">
                                <input type="checkbox" />
                                <label className='ml-1'>₹ 2 501.00 </label>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col items-end w-full justify-end pb-24 pl-16">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                            {
                                cardData.map((card , index) => (
                                    <Card key={index} {...card} />
                                ))
                            }
                        </div>
                        <div className="border-t-2 border-[#E5E5E5] pt-20">
                            <h1 className="text-2xl font-medium mb-4" >Related Categories</h1>
                            <div className="flex flex-wrap gap-3 text-sm ">
                                <div className="py-2 px-3 border-2 rounded-full border-[#7E7E7E]">Best Selling Products</div>
                                <div className="py-2 px-3 border-2 rounded-full border-[#7E7E7E]">Best Shoes</div>
                                <div className="py-2 px-3 border-2 rounded-full border-[#7E7E7E]">New Baskeball Shoes</div>
                                <div className="py-2 px-3 border-2 rounded-full border-[#7E7E7E]">New Football Shoes</div>
                                <div className="py-2 px-3 border-2 rounded-full border-[#7E7E7E]">New Men's Shoes</div>
                                <div className="py-2 px-3 border-2 rounded-full border-[#7E7E7E]">New Running Shoes</div>
                                <div className="py-2 px-3 border-2 rounded-full border-[#7E7E7E]">Best Men's Shoes</div>
                                <div className="py-2 px-3 border-2 rounded-full border-[#7E7E7E]">New Jordan Shoes</div>
                                <div className="py-2 px-3 border-2 rounded-full border-[#7E7E7E]">Best Women's Shoes</div>
                                <div className="py-2 px-3 border-2 rounded-full border-[#7E7E7E]">Best Training & Gym</div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}

export default page