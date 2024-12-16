import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='flex justify-center'>

                <div className="flex gap-28 pt-36 pb-52">
                    <div className="">
                        <Image src="/assest/s3.jpg" width={600} height={600} alt='Shoe' />
                    </div>
                    <div className="w-[380px] space-y-7">
                        <h1 className="text-5xl font-medium">Nike Air Force 1 PLT.AF.ORM</h1>
                        <p className="">Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
                        <p className="text-3xl font-medium">₹ 8 695.00</p>
                        <div className="bg-black text-white px-6 w-48 flex gap-3 py-2 rounded-full">
                        <Image src="/store2.svg" width={24} height={24} alt='store' />
                        <button className="">
                            
                            Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page;