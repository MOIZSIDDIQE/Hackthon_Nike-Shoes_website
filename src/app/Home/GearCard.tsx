import Image from 'next/image'
import React from 'react'

const GearCard = (props: any) => {
    return (
        <>
            <div className="xl:w-[310px] w-[450px]">
                <Image
                    src={props.Link}
                    width={310}
                    height={310}
                    alt={props.alt}
                />
                <div className="flex text-[15px] justify-between mt-6">
                    <div className="font-medium    ">
                        <p className="">{props.d1}</p>
                        <p className="text-[#757575] w-52">{props.d2}</p>
                    </div>
                    <p className="mr-3">{props.rate}</p>
                </div>
            </div>
        </>
    )
}

export default GearCard