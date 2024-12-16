import Image from 'next/image'
import React from 'react'

const Arrow = (props: any) => {
    return (
        <>
            <div className="flex gap-5 justify-end my-4">
                <h4 >{props.name}</h4>
                <div className="bg-[#F5F5F5] rounded-full w-12 h-12 flex-center cursor-pointer">
                    <Image src="/less.svg" width={10} height={10} alt='less' />
                </div>
                <div className="bg-[#E5E5E5] rounded-full w-12 h-12 flex-center cursor-pointer">
                    <Image src="/greater.svg" width={10} height={10} alt='greater' />
                </div>
            </div>
        </>
    )
}

export default Arrow