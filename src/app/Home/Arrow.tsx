import Image from 'next/image'
import React, { useRef } from 'react'
import HomeBody from './page'

const Arrow = (props: any) => {

    return (
        <>
            <div className="flex gap-5 justify-end my-4 ">
                <h4 >{props.name}</h4>
                <div onClick={props.onPrevChange} className="bg-[#F5F5F5] rounded-full w-12 h-12 flex-center cursor-pointer swiper-button-prev swiper-button-disabled">
                    <Image src="/less.svg" width={10} height={10} alt='less' />
                </div>
                <div onClick={props.onNextChange} className="bg-[#E5E5E5] rounded-full w-12 h-12 flex-center cursor-pointer swiper-button-next swiper-button-disabled">
                    <Image src="/greater.svg" width={10} height={10} alt='greater' />
                </div>
            </div>
        </>
    )
}

export default Arrow