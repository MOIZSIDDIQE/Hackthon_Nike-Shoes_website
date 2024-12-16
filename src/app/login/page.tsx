import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='flex justify-center'>
                <div className="w-[400px] pt-16 pb-32 space-y-7 text-[#8D8D8D]">
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <svg width="100" height="35" viewBox="0 0 59 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M58.9262 0.772461L15.8854 19.0298C12.302 20.5502 9.28743 21.3087 6.85813 21.3087C4.12475 21.3087 2.13358 20.3442 0.910756 18.4184C-0.674992 15.9335 0.0181595 11.9381 2.73845 7.72033C4.35363 5.25506 6.40692 2.99251 8.40791 0.828045C7.93709 1.59313 3.78145 8.5083 8.32617 11.7648C9.22531 12.4187 10.5037 12.7391 12.0764 12.7391C13.3384 12.7391 14.7869 12.5332 16.3792 12.1179L58.9262 0.772461Z" fill="#111111" />
                        </svg>
                        <h1 className="text-2xl font-bold w-56 text-black">YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
                    </div>
                    <form className="flex flex-col gap-3">
                        <input type="email" className=' border-2 border-[#E5E5E5] rounded py-2 px-4 ' placeholder='Email address' />
                        <input type="password" className=' border-2 border-[#E5E5E5] rounded py-2 px-4' placeholder='Password' />
                    </form>
                    <div className="flex justify-between  ">
                        <div className="flex gap-3">
                            <Image src="/right.svg" width={24} height={24} alt='Checkbox' />
                            <p className="">Keep me signed in</p>
                        </div>
                        <p className="">Forgotten your password?</p>
                    </div>
                    <div className="text-center">
                    <p className="px-5">By logging in, you agree to Nike's <span className='underline'>Privacy Policy</span> and <span className='underline'>Terms of Use</span> .</p>
                    </div>
                    <div className="">
                        <button className="bg-black text-white w-full py-3">
                            SIGN IN
                        </button>
                    </div>
                    <div className="text-center">
                        <p className="">Not a Member? <span className="text-black underline">Join Us</span> .</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page