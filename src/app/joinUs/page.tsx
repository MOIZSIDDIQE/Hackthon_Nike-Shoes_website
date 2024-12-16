import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='flex justify-center'>
                <div className="w-[450px] pt-16 pb-32 space-y-7 text-[#8D8D8D]">
                    <div className='flex flex-col items-center justify-center    gap-10 '>
                        <svg width="100" height="35" viewBox="0 0 59 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M58.9262 0.772461L15.8854 19.0298C12.302 20.5502 9.28743 21.3087 6.85813 21.3087C4.12475 21.3087 2.13358 20.3442 0.910756 18.4184C-0.674992 15.9335 0.0181595 11.9381 2.73845 7.72033C4.35363 5.25506 6.40692 2.99251 8.40791 0.828045C7.93709 1.59313 3.78145 8.5083 8.32617 11.7648C9.22531 12.4187 10.5037 12.7391 12.0764 12.7391C13.3384 12.7391 14.7869 12.5332 16.3792 12.1179L58.9262 0.772461Z" fill="#111111" />
                        </svg>
                        <h1 className="text-2xl font-bold w text-black">BECOME A NIKE MEMBER</h1>
                        <p className='text-center px-8'>Create your Nike Member profile and get first access to the very best of Nike <br /> products, inspiration and community.</p>
                    </div>
                    <form className="flex flex-col gap-5">
                        <input type="email" className=' border-2 border-[#E5E5E5] rounded py-2 px-6 ' placeholder='Email address' />
                        <input type="password" className=' border-2 border-[#E5E5E5] rounded py-2 px-6' placeholder='Password' />
                        <input type="text" className=' border-2 border-[#E5E5E5] rounded py-2 px-6' placeholder='First Name' />
                        <input type="text" className=' border-2 border-[#E5E5E5] rounded py-2 px-6' placeholder='Last Name' />
                        <input type="text" className=' border-2 border-[#E5E5E5] rounded py-2 px-6' placeholder='Date of Birth' />
                        <p className="text-center ">Get a Nike Member Reward every year on your Birthday.</p>
                        <div className="border-2 border-[#E5E5E5] rounded py-2 pr-1 flex flexcol justify-between">
                            <input type="text" placeholder='Pakistan' className='px-6'/>
                            <select name="" id="">
                            <option value=""></option>
                            </select>
                        </div>
                        <div className="flex justify-between">
                            <div className="border-2 border-[#E5E5E5] rounded px-20 py-4 ">Male </div>
                            <div className="border-2 border-[#E5E5E5] rounded px-20 py-4 ">Female</div>
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
                        <p className="">Not a Member? <span className="text-black underline">
                            <Link href="/sign"></Link> </span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page