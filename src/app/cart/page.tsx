import React from 'react'
import GearCard from '../Home/GearCard'
import Image from 'next/image'

const page = () => {
    return (
        <>
            <div className="flex justify-center pt-16  pb-24">
                <div className="flex max-lg:flex-col gap-6">
                    <div className="w-[700px] space-y-9">
                        <div className="bg-[#F5F5F5] p-3">
                            <p className="text-xl mb-2">Free Delivery</p>
                            <p className="">Applies to orders of ₹ 14 000.00 or more. <span className="underline font-medium">View details</span></p>
                        </div>
                        <p className='font-medium text-2xl'>Bag</p>

                        {/* cart 1 */}
                        <div className="flex gap-3 text-[#757575] pb-6">
                            <Image src="/assest/man1.jpg " width={170} height={170} alt='cart image' />
                            <div className="w-[518px] space-y-2">
                                <div className="flex justify-between text-black ">
                                    <p>Nike Dri-FIT ADV TechKnit Ultra</p>
                                    <p>MRP: ₹ 3 895.00</p>
                                </div>
                                <p>Men's Short-Sleeve Running Top</p>
                                <p>Ashen Slate/Cobalt Bliss</p>
                                <div className="flex gap-12 pb-4">
                                    <p>Size L</p>
                                    <p>Quantity 1</p>
                                </div>
                                <div className="flex gap-5 ">
                                    <Image src="/Heart.svg" width={24} height={24} alt='Heart' />
                                    <Image src="/delete.svg" width={24} height={24} alt='Delete' />
                                </div>
                            </div>
                        </div>

                        {/* cart 2 */}
                        <div className="flex gap-3 text-[#757575] py-12 border-y-2 border-[#E5E5E5]">
                            <div className="w-44 h-44"></div>
                            <div className="w-[518px] space-y-2">
                                <div className="flex justify-between text-black ">
                                    <p>Nike Air Max 97 SE</p>
                                    <p>MRP: ₹ 16 995.00</p>
                                </div>
                                <p>Men's Shoes</p>
                                <p>Flat Pewter/Light Bone/Black/White</p>
                                <div className="flex gap-12 pb-4">
                                    <p>Size 8</p>
                                    <p>Quantity 1</p>
                                </div>
                                <div className="flex gap-5 ">
                                    <Image src="/Heart.svg" width={24} height={24} alt='Heart' />
                                    <Image src="/delete.svg" width={24} height={24} alt='Delete' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="w-80 space-y-5">
                        <h1 className="text-2xl mb-7">Summary</h1>
                        <div className="flex justify-between">
                            <p>Subtotal</p>
                            <p>₹ 20 890.00</p>
                        </div>
                        <div className="flex justify-between ">
                            <p>Estimated  Delivery & Handling </p>
                            <p>Free</p>
                        </div>
                        <div className="flex justify-between py-5 border-y-2 border-[#E5E5E5]">
                            <p>Total</p>
                            <p className='font-medium'>₹ 20 890.00 </p>
                        </div>
                        <button className="bg-black text-white rounded-full  w-full py-4 ">Member Checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page