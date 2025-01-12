import Image from 'next/image'
import React from 'react'
import {cardData} from './cardData.js'

const Card = (props:any) => {
    return (
        <>
            <div className="">
                <Image
                    src={props.Link}
                    width={330}
                    height={330}
                    alt="Shoes"
                />

                <div className="space-y-4 pt-4 pb-6">
                    <p className="text-[#9E3500]">{props.tag}</p>
                    <div className="space-y-1 text-[#757575]">
                        <p className="font-medium text-black">{props.heading}</p>
                        <p className="">{props.description}</p>
                        <p className="">{props.color} Color</p>
                    </div>
                    <p className="font-medium">{props.price}</p>
                </div>
            </div>
        </>
    )
}

export default Card