import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="bg-[#111111] text-white">
                {/* Main Footer */}
                <div className="flex flex-wrap justify-between p-8 lg:p-14">
                    {/* Links Section */}
                    <div className="grid md:grid-cols-3 grid-cols-2 justify-between gap-8 lg:gap-24 w-full lg:w-auto">
                        <div className="flex flex-col gap-5 pr-0 lg:pr-28 uppercase text-sm">
                            <Link href="">Find A Store</Link>
                            <Link href="">Become A Member</Link>
                            <Link href="">Sign Up for Email</Link>
                            <div className="lowercase ml-2">
                                <Link href="">Send Us Feedback</Link>
                            </div>
                            <Link href="">Student Discounts</Link>
                        </div>
                        <div className="flex flex-col gap-5 text-[#7E7E7E] text-sm">
                            <Link href="" className="text-white">Get Help</Link>
                            <Link href="">Order Status</Link>
                            <Link href="">Delivery</Link>
                            <Link href="">Returns</Link>
                            <Link href="">Payment Options</Link>
                            <Link href="">Contact Us On Nike.com Inquiries</Link>
                            <Link href="">Contact Us On All Other Inquiries</Link>
                        </div>
                        <div className="flex flex-col gap-5 text-[#7E7E7E] text-sm">
                            <Link href="" className="text-white">About Nike</Link>
                            <Link href="">News</Link>
                            <Link href="">Careers</Link>
                            <Link href="">Investors</Link>
                            <Link href="">Sustainability</Link>
                        </div>
                    </div>
                    {/* Social Media Icons */}
                    <div className="flex gap-5 mt-8 lg:mt-0 justify-center w-full h-8 lg:w-auto">
                        <Image src="/assest/twitter.png" width={30} height={30} alt="Twitter" />
                        <Image src="/assest/fb.png" width={30} height={30} alt="Facebook" />
                        <Image src="/assest/ytb.png" width={30} height={30} alt="YouTube" />
                        <Image src="/assest/insta.png" width={30} height={30} alt="Instagram" />
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="flex flex-wrap justify-between items-center px-4 lg:px-16 py-5 text-[#7E7E7E] text-sm">
                    <div className="flex items-center gap-3 w-full lg:w-auto justify-center lg:justify-start mb-4 lg:mb-0">
                        <Image src="/location.svg" width={12} height={12} alt="Location" />
                        <p className="text-white">Pakistan</p>
                        <p className="ml-3">© 2023 Nike, Inc. All Rights Reserved</p>
                    </div>
                    <div className="flex gap-6 justify-center w-full lg:w-auto">
                        <Link href="">Guides</Link>
                        <Link href="">Terms of Sale</Link>
                        <Link href="">Terms of Use</Link>
                        <Link href="">Nike Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
