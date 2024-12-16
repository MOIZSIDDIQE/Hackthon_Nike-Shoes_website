import Image from 'next/image'
import React from 'react'
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

                        <div className="grid grid-cols-3 gap-6 ">
                            {/* Card 1 */}
                            <Card
                                Link="/assest/s1.jpg"
                                tag="Just In"
                                heading="Nike Air Force 1 Mid '07"
                                description="Men's Shoes"
                                color="1"
                                price="MRP : ₹ 10,795.00"
                            />
                            {/* Card 2 */}
                            <Card
                                Link="/assest/s2.jpg"
                                tag="Just In"
                                heading="Nike Court Vision Low Next Nature"
                                description="Men's Shoes"
                                color="1"
                                price="MRP : ₹ 4,695.00"
                            />
                            {/* Card 3 */}
                            <Card
                                Link="/assest/s3.jpg"
                                tag="Just In"
                                heading="Nike Air Force 1 PLT.AF.ORM"
                                description="Women's Shoes"
                                color="1"
                                price="MRP : ₹ 10,295.00"
                            />
                            {/* Card 4 */}
                            <Card
                                Link="/assest/s4.jpg"
                                tag="Just In"
                                heading="Nike Air Force 1 React"
                                description="Men's Shoes"
                                color="1"
                                price="MRP : ₹ 12,295.00"
                            />
                            {/* Card 5 */}
                            <Card
                                Link="/assest/s5.jpg"
                                tag="Promo Exclusive"
                                heading="Air Jordan 1 Elevate Low"
                                description="Women's Shoes"
                                color="1"
                                price="MRP : ₹ 11,895.00"
                            />
                            {/* Card 6 */}
                            <Card
                                Link="/assest/s6.jpg"
                                tag="Just In"
                                heading="Nike Standard Issue"
                                description="Men's Basketball Jersey"
                                color="1"
                                price="MRP : ₹ 3,595.00"
                            />
                            {/* Card 7 */}
                            <Card
                                Link="/assest/s7.jpg"
                                tag="Promo Exclusive"
                                heading="Nike Dunk Low Retro SE"
                                description="Men's Shoes"
                                color="1"
                                price="MRP : ₹ 10,895.00"
                            />
                            {/* Card 8 */}
                            <Card
                                Link="/assest/s8.jpg"
                                tag="Just In"
                                heading="Nike Dri-FIT Victory"
                                description="Men's Polo"
                                color="1"
                                price="MRP : ₹ 4,295.00"
                            />
                            {/* Card 9 */}
                            <Card
                                Link="/assest/s9.jpg"
                                tag="Just In"
                                heading="Nike Court Vision Low"
                                description="Women's Shoes"
                                color="1"
                                price="MRP : ₹ 5,695.00"
                            />
                            {/* Card 10 */}
                            <Card
                                Link="/assest/s10.jpg"
                                tag="Just In"
                                heading="Nike Air Max Pulse"
                                description="Men's Shoes"
                                color="1"
                                price="MRP : ₹ 12,995.00"
                            />
                            {/* Card 11 */}
                            <Card
                                Link="/assest/s11.jpg"
                                tag="Just In"
                                heading="Nike Air Max SC"
                                description="Women's Shoes"
                                color="1"
                                price="MRP : ₹ 5,995.00"
                            />
                            {/* Card 12 */}
                            <Card
                                Link="/assest/s12.jpg"
                                tag="Just In"
                                heading="Nike Dri-FIT UV"
                                description="Men's Shirt"
                                color="1"
                                price="MRP : ₹ 2,895.00"
                            />
                            {/* Card 13 */}
                            <Card
                                Link="/assest/s13.jpg"
                                tag="Just In"
                                heading="Nike Air Max 90"
                                description="Men's Shoes"
                                color="1"
                                price="MRP : ₹ 11,695.00"
                            />
                            {/* Card 14 */}
                            <Card
                                Link="/assest/s14.jpg"
                                tag="Just In"
                                heading="Nike Court Legacy Lift"
                                description="Women's Shoes"
                                color="1"
                                price="MRP : ₹ 7,695.00"
                            />
                            {/* Card 15 */}
                            <Card
                                Link="/assest/s15.jpg"
                                tag="Just In"
                                heading="Nike Dri-FIT Tank"
                                description="Men's Training Tank"
                                color="1"
                                price="MRP : ₹ 1,995.00"
                            />
                            {/* Card 16 */}
                            <Card
                                Link="/assest/s16.jpg"
                                tag="Just In"
                                heading="Nike Dri-FIT UV"
                                description="Men's Shorts"
                                color="1"
                                price="MRP : ₹ 3,295.00"
                            />
                            {/* Card 17 */}
                            <Card
                                Link="/assest/s17.jpg"
                                tag="Just In"
                                heading="Nike Air Zoom Pegasus"
                                description="Running Shoes"
                                color="1"
                                price="MRP : ₹ 12,595.00"
                            />
                            {/* Card 18 */}
                            <Card
                                Link="/assest/s18.jpg"
                                tag="Just In"
                                heading="Nike Blazer Low '77 Jumbo"
                                description="Women's Shoes"
                                color="1"
                                price="MRP : ₹ 8,595.00"
                            />
                            {/* Card 19 */}
                            <Card
                                Link="/assest/s19.jpg"
                                tag="Just In"
                                heading="Nike Zoom Janoski OG"
                                description="Men's Skate Shoes"
                                color="1"
                                price="MRP : ₹ 6,595.00"
                            />
                            {/* Card 20 */}
                            <Card
                                Link="/assest/s20.jpg"
                                tag="Just In"
                                heading="Jordan Stay Loyal 2"
                                description="Men's Shoes"
                                color="1"
                                price="MRP : ₹ 11,895.00"
                            />
                            {/* Card 21 */}
                            <Card
                                Link="/assest/s21.jpg"
                                tag="Just In"
                                heading="Nike Blazer Low Platform"
                                description="Women's Shoes"
                                color="1"
                                price="MRP : ₹ 6,595.00"
                            />
                            {/* Card 22 */}
                            <Card
                                Link="/assest/s22.jpg"
                                tag="Just In"
                                heading="Nike Sportswear"
                                description="Women's Fleece Shorts"
                                color="1"
                                price="MRP : ₹ 2,695.00"
                            />
                            {/* Card 23 */}
                            <Card
                                Link="/assest/s23.jpg"
                                tag="Just In"
                                heading="Nike Dri-FIT UV Challenger"
                                description="Men's Running Shorts"
                                color="1"
                                price="MRP : ₹ 2,495.00"
                            />
                            {/* Card 24 */}
                            <Card
                                Link="/assest/s24.jpg"
                                tag="Just In"
                                heading="Nike Dunk Low Retro"
                                description="Men's Shoes"
                                color="1"
                                price="MRP : ₹ 10,995.00"
                            />
                            {/* Card 25 */}
                            <Card
                                Link="/assest/s25.jpg"
                                tag="Just In"
                                heading="Nike Air Max System"
                                description="Men's Shoes"
                                color="1"
                                price="MRP : ₹ 6,595.00"
                            />
                            {/* Card 26 */}
                            <Card
                                Link="/assest/s26.jpg"
                                tag="Just In"
                                heading="Nike Dri-FIT Tee"
                                description="Women's Tee"
                                color="1"
                                price="MRP : ₹ 1,795.00"
                            />
                            {/* Card 27 */}
                            <Card
                                Link="/assest/s27.jpg"
                                tag="Just In"
                                heading="Nike Air Force 1 '07"
                                description="Men's Shoes"
                                color="1"
                                price="MRP : ₹ 9,995.00"
                            />
                            {/* Card 28 */}
                            <Card
                                Link="/assest/s28.jpg"
                                tag="Just In"
                                heading="Nike Court Vision Low"
                                description="Men's Shoes"
                                color="1"
                                price="MRP : ₹ 5,995.00"
                            />
                            {/* Card 29 */}
                            <Card
                                Link="/assest/s29.jpg"
                                tag="Just In"
                                heading="Nike React Vision"
                                description="Men's Shoes"
                                color="1"
                                price="MRP : ₹ 12,995.00"
                            />
                            {/* Card 30 */}
                            <Card
                                Link="/assest/s30.jpg"
                                tag="Just In"
                                heading="Nike Air Zoom Structure 24"
                                description="Men's Running Shoes"
                                color="1"
                                price="MRP : ₹ 10,695.00"
                            />
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