import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="bg-[#111111] text-white ">
                <div className="flex justify-between p-14">
                    <div className="flex justify-between gap-24 ">
                        <div className="flex flex-col gap-5 pr-28 uppercase">
                            <Link href="">Find A Store</Link>
                            <Link href="">Become A Member</Link>
                            <Link href="">Sign Up for Email</Link>
                            <div className="lowercase ml-2">
                            <Link href="">Send Us Feedback</Link>
                            </div>
                            <Link href="">Student Discounts</Link>
                        </div>
                        <div className="flex flex-col gap-5 text-[#7E7E7E]">
                            <Link href="" className='text-white'>Get Help</Link>
                            <Link href="">Order Status</Link>
                            <Link href="">Delivery</Link>
                            <Link href="">Returns</Link>
                            <Link href="">Payment Options</Link>
                            <Link href="">Contact Us On Nike.com Inquiries</Link>
                            <Link href="">Contact Us On All Other Inquiries</Link>
                        </div>
                        <div className="flex flex-col gap-5 text-[#7E7E7E]">
                            <Link href="" className='text-white'>About Nike</Link>
                            <Link href="">News</Link>
                            <Link href="">Careers</Link>
                            <Link href="">Investors</Link>
                            <Link href="">Sustainability</Link>
                        </div>
                    </div>
                    <div className="flex h-8 gap-5">
                        <Image src="/assest/twitter.png" width={30} height={30} alt='twitter ' />
                        <Image src="/assest/fb.png" width={30} height={30} alt='facebook ' />
                        <Image src="/assest/ytb.png" width={30} height={30} alt='youtube' />
                        <Image src="/assest/insta.png" width={30} height={30} alt='instagram ' />
                    </div>
                </div>
                <div className="flex justify-between px-16 py-7 text-[#7E7E7E]">
                    <div className="flex gap-4">
                    <Image src="/location.svg" color='white' width={12} height={12} alt='Location ' />
                    <p className="text-white">Pakistan</p>
                    <p className="ml-3">© 2023 Nike, Inc. All Rights Reserved</p>
                    </div>
                    <div className="flex gap-12">
                    <Link href="">Guides </Link>
                    <Link href="">Terms of Sale</Link>
                    <Link href="">Terms of Use</Link>
                    <Link href="">Nike Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer