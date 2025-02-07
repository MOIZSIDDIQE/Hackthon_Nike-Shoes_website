import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='flex justify-center gap-24'>
                <div className="w-[450px] pt-16 pb-32 space-y-7 text-[#8D8D8D]">
                    <div className='flex flex-col items-center justify-center    gap-10 '>
                        <h1 className="text-xl font-bold  text-black">How would you like to get your order?</h1>
                        <p className=''>Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. <span className='underline'> Learn More</span></p>
                    </div>
                    <form className="flex flex-col gap-9">
                        <input type="text" className=' border-2 border-[#E5E5E5] rounded py-3 px-6 placeholder:text-black' placeholder='First Name' />
                        <input type="text" className=' border-2 border-[#E5E5E5] rounded py-3 px-6 placeholder:text-black' placeholder='Last Name' />
                        <div className="">
                            <input type="text" className='w-full border-2 border-[#E5E5E5] rounded py-3 px-6 placeholder:text-black' placeholder='Address Line 1' />
                            <p className="text-sm ml-4 text-[#8D8D8D] mt-2">We do not ship to P.O. boxes</p>
                        </div>

                        <input type="text" className=' border-2 border-[#E5E5E5] rounded py-3 px-6 placeholder:text-black' placeholder='Address Line 2' />
                        <input type="text" className=' border-2 border-[#E5E5E5] rounded py-3 px-6 placeholder:text-black' placeholder='Address Line 3' />
                        <div className="flex justify-between gap10">
                            <div className="border-2 border-[#E5E5E5] rounded w-52 px-4 py-4 placeholder:text-black">Postal Code  </div>
                            <div className="border-2 border-[#E5E5E5] rounded w-52 px-4 py-4 placeholder:text-black">Locality</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="border-2 border-[#E5E5E5] w-52 rounded p-4 pr-1 flex flexcol justify-between">
                                <div className="">State/Territory</div>
                                <select >
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="border-2 border-[#E5E5E5] rounded w-52 px-4 py-4 flex justify-between items-center">
                                <div className="">Locality</div>
                                <div className="w-2 h-2 bg-green-600 rounded-full "></div>
                            </div>
                        </div>
                    </form>
                    <div className="flex justify-between  ">
                        <div className="flex gap-4">
                            <Image src="/blankcheckbox.svg" width={24} height={24} alt='Checkbox' />
                            <p className="">Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="px-7">By logging in, you agree to Nike's <span className='underline'>Privacy Policy</span> and <span className='underline'>Terms of Use</span> .</p>
                    </div>
                    <div className="">
                        <button className="bg-black text-white w-full py-3">
                            JOIN US
                        </button>
                    </div>
                    <div className="text-center">
                        <p className="">Already a Member? <span className="text-black underline">
                            <Link href="../login">Sign in.</Link> </span></p>
                    </div>
                </div>
                <div className="w-80 space-y-5">
                    <h1 className="text-2xl mb-7">Order Summary</h1>
                    <div className="flex justify-between text-[#8D8D8D]">
                        <p>Subtotal</p>
                        <p>₹ 20 890.00</p>
                    </div>
                    <div className="flex justify-between text-[#8D8D8D]">
                        <p>Delivery/Shipping </p>
                        <p>Free</p>
                    </div>
                    <div className="flex justify-between py-5 border-y-2 border-[#E5E5E5]">
                        <p>Total</p>
                        <p className='font-medium'>₹ 20 890.00 </p>
                    </div>
                    <p className="text-[9px]">(The total reflects the price of your order, including all duties and taxes)</p>
                    <div className="">
                        <p className='font-semibold '>Arrives Mon, 27 Mar - Wed, 12 Apr</p>
                        <div className="flex gap-3 text-[#8D8D8D] pb-6">
                            <Image src="/assest/man1.jpg " width={200} height={200} alt='cart image' />
                            <div className="w-[518px] space-y-2">
                                <div className="flex justify-between text-black ">
                                    <p>Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</p>
                                </div>
                                <div className=" ">
                                    <p>Qty 1</p>
                                    <p>Size L</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 text-[#8D8D8D] pb-6">
                            <Image src="/assest/man1.jpg " width={200} height={200} alt='cart image' />
                            <div className="w-[518px] space-y-2">
                                <div className="flex justify-between text-black ">
                                    <p>Nike Air Max 97 SE Men's Shoes</p>
                                </div>
                                <div className=" ">
                                    <p>Qty 1</p>
                                    <p>Size UK L</p>
                                    <p>₹ 16 995.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page