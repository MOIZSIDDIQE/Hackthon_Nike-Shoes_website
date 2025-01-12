import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
      <main className="">

        {/* Help Message */}
        <div className="flex flex-col items-center py-10 gap-5">
          <h1 className="uppercase text-3xl font-semibold">Get Help</h1>
          <div className="border-2 border-[#757575] flex justify-between rounded-lg  p-3 w-[480px]">
            <input type="text" className="" placeholder='What can we help you with?' />
            <Image src="/search2.svg" width={24} height={24} alt='search' />
          </div>
        </div>

        <div className="">
          {/* Payment option */}
          <div className=" px-16 lg:flex -lg:space-y-12 pb-16">
            <div className="flex flex-col gap-8 leading-7 pr-7 max-lg:pb-12">
              <h1 className="text-3xl font-medium">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
              <p >We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
              <p className='leading-9 ml-8  '>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro <br />If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card. <br /> Apple Pay</p>
              <p><span className="font-medium underline">Nike Members</span>  can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member,  <span className="font-medium underline">join us</span> today.</p>
              <div className="">
                <button className="bg-black text-white rounded-full  py-2 px-5">JOIN US</button>
                <button className="bg-black text-white rounded-full  py-2 px-5 ml-4">SHOP NIKE</button>
              </div>

              {/* FAQs  */}
              <h1 className="font-semibold text-2xl">FAQs</h1>
              <div className="">
                <p className="font-semibold">Does my card need international purchases enabled?</p>
                <p >Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
              </div>
              <p className="">Please note, some banks may charge <span className="font-medium underline">a small transaction fee</span> for international orders.</p>
              <div className="">
                <p className="font-semibold">Can I pay for my order with multiple methods?</p>
                <p >No, payment for Nike orders can't be split between multiple payment methods.</p>
              </div>
              <div className="">
                <p className="font-semibold">What payment method is accepted for SNKRS orders?</p>
                <p >You can use any accepted credit card to pay for your SNKRS order.</p>
              </div>
              <div className="">
                <p className="font-semibold">Why don't I see Apple Pay as an option?</p>
                <p >To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
              </div>
              <div className="space-y-3">
                <p>Was this answer helpful?</p>
                <div className=" flex gap-4  ">
                  <Image src="/like.svg" width={24} height={24} alt='like' />
                  <Image src="/dislike.svg" width={24} height={24} alt='dislike' />
                </div>
                <p className='text-[#757575]'>RELATED</p>
                <div className="text-[16px] space-y-4 ml-8 font-medium underline">
                  <p >WHAT ARE NIKE'S DELIVERY OPTIONS?</p>
                  <p >HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
                </div>
              </div>
            </div>

            {/* Contact Detail */}
            <div className="lg:border-l-2 max-lg:border-t-2 lg:pl-8 max-xl:pt-16 max-lg:flex flex-col items-center justify-between  text-center space-y-16">
              <h1 className="text-3xl font-medium">CONTACT US</h1>
              <div className="flex flex-col justify-center items-center gap-8 max-lg:w-72">
                <Image src="/contact.svg" width={70} height={70} alt='contact' />
                <p><span className='font-medium'>000 800 919 0566</span> <br /> Products & Orders: 24 hours a day, 7 days a week
                  Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-8 ">
                <Image src="/message.svg" width={70} height={70} alt='message' />
                <p><span className='font-medium'>7 days a week</span> <br /> 24 hours a day</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-8 ">
                <Image src="/mail.svg" width={70} height={70} alt='mail' />
                <p><span className='font-medium'>We'll reply within</span> <br />five business days</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-8 ">
                <Image src="/location2.svg" width={70} height={70} alt='location' />
                <p><span className='font-medium'>STORE LOCATOR </span> <br /> Find Nike retail stores near you</p>
              </div>
            </div>
          </div>
        </div>


      </main>
    </>
  )
}

export default page