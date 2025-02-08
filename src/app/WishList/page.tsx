"use client";

import React, { useEffect, useState } from "react";
import { productType } from "../../../types/type";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState<productType[]>([]);

    useEffect(() => {
        const storedWishlist = localStorage.getItem("wishlist");
        if (storedWishlist) {
            setWishlist(JSON.parse(storedWishlist));
        }
    }, []);

    const removeFromWishlist = (productId: string) => {
        const updatedWishlist = wishlist.filter((item) => item._id !== productId);
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

        Swal.fire("Removed!", "Product has been removed from Wishlist.", "success");
    };

    if (wishlist.length === 0) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-semibold">Your Wishlist is Empty</h1>
                <p className="text-gray-500 mt-2">Start adding your favorite products now!</p>
                <Link href="/products">
                    <button className="mt-5 bg-black text-white px-6 py-3 rounded-full">
                        Browse Products
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-16">
            <h1 className="text-3xl font-semibold mb-6">Your Wishlist ({wishlist.length})</h1>

            <div className="space-y-6">
                {wishlist.map((product) => (
                    <div key={product._id} className="flex items-center bg-white shadow-md rounded-lg p-6">
                        {/* Product Image */}
                        <Link
                            href={product?.slug?.current ? `/product/${product.slug.current}` : "#"}
                            className="flex-shrink-0"
                        >
                            {product?.image ? (
                                <Image
                                    src={urlFor(product.image).url()}
                                    width={150}
                                    height={150}
                                    alt={product?.productName || "Product Image"}
                                    className="rounded-lg object-cover"
                                />
                            ) : (
                                <div className="w-[150px] h-[150px] bg-gray-200 flex items-center justify-center rounded-lg">
                                    <span className="text-gray-500">No Image</span>
                                </div>
                            )}
                        </Link>


                        {/* Product Details */}
                        <div className="flex-1 ml-6">
                            <h2 className="text-lg font-semibold">{product.productName}</h2>
                            <p className="text-gray-600 mt-1">{product?._type || "Unknown"}</p>
                            <p className="text-xl font-bold mt-2">₹ {product.price}</p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-3">
                            <button
                                className="bg-black text-white px-5 py-2 rounded-full"
                                onClick={() => removeFromWishlist(product._id)}
                            >
                                Remove
                            </button>
                            <Link href={product?.slug?.current ? `/product/${product.slug.current}` : "#"}>
                                <button className="border border-gray-300 px-5 py-2 rounded-full hover:bg-gray-200">
                                    View Product
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
