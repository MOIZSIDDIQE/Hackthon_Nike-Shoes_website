"use client"
import { useEffect, useState } from "react"
import type { productType } from "../../../types/type"
import { getCartItems, removeFromCart, updateCartQuantity } from "../action/action"
import Image from "next/image"
import Link from "next/link"
import Swal from "sweetalert2"
import { urlFor } from "@/sanity/lib/image"

const Page = () => {
    const [cartItems, setCartItems] = useState<productType[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setCartItems(getCartItems())
        setLoading(false)
    }, [])

    console.log(cartItems);


    const handleRemove = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to undo this action!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, remove it!",
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(id)
                setCartItems(getCartItems())
                Swal.fire("Removed!", "Item has been removed from cart", "success")
            }
        })
    }

    const handleQuantity = (id: string, quantity: number) => {
        updateCartQuantity(id, quantity)
        setCartItems(getCartItems())
    }

    const handleIncrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id)
        if (product) handleQuantity(id, product.inventory + 1)
    }

    const handleDecrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id)
        if (product && product.inventory > 1) handleQuantity(id, product.inventory - 1)
    }

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.inventory, 0)
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
        }).format(price)
    }

    const handleProceed = () => {
        if (cartItems.length === 0) {
            Swal.fire({
                title: "Empty Cart",
                text: "Please add items to your cart before proceeding",
                icon: "warning",
            })
            return
        }

        Swal.fire({
            title: "Processing your order...",
            text: "Please wait a moment.",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Proceed",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Success!", "Your order has been successfully processed!", "success")
                setCartItems([])
            }
        })
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex max-lg:flex-col gap-8">
                    <div className="lg:w-2/3 space-y-6">
                        {/* Free Delivery Banner */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <p className="text-xl font-semibold mb-2">Free Delivery</p>
                            <p className="text-gray-600">
                                Applies to orders of {formatPrice(14000)} or more.{" "}
                                <button className="underline font-medium hover:text-black transition-colors">View details</button>
                            </p>
                        </div>

                        {/* Cart Items */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <h2 className="text-2xl font-bold p-6 border-b">
                                Cart ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
                            </h2>

                            {cartItems.length === 0 ? (
                                <div className="p-8 text-center">
                                    <p className="text-gray-500 mb-4">Your cart is empty</p>
                                    <Link href="/" className="text-blue-600 hover:underline">
                                        Continue Shopping
                                    </Link>
                                </div>
                            ) : (
                                <div className="divide-y">
                                    {cartItems.map((item) => (
                                        <div key={item._id} className="p-6 flex gap-6">
                                            <div className="w-24 h-24 relative flex-shrink-0">
                                                {item?.image ? (
                                                    <Image
                                                        src={urlFor(item.image).url()}
                                                        alt={item.productName || "Product Image"}
                                                        className="rounded-md object-cover"
                                                        width={96}
                                                        height={96}
                                                    />
                                                ) : (
                                                    <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-md">
                                                        <span className="text-gray-500">No Image</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex-1 space-y-3">
                                                <div className="flex justify-between">
                                                    <h3 className="font-semibold text-lg">{item.productName}</h3>
                                                    <p className="font-medium">{formatPrice(item.price * item.inventory)}</p>
                                                </div>
                                                <p className="text-gray-600">{item.category}</p>
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center border rounded-md">
                                                        <button
                                                            onClick={() => handleDecrement(item._id)}
                                                            className="px-3 py-1 hover:bg-gray-100 transition-colors"
                                                            disabled={item.inventory <= 1}
                                                        >
                                                            -
                                                        </button>
                                                        <span className="px-3 py-1 border-x">{item.inventory}</span>
                                                        <button
                                                            onClick={() => handleIncrement(item._id)}
                                                            className="px-3 py-1 hover:bg-gray-100 transition-colors"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <button
                                                        onClick={() => handleRemove(item._id)}
                                                        className="text-red-600 hover:text-red-700 text-sm"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
                            <h2 className="text-2xl font-bold mb-6">Summary</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <p className="text-gray-600">Subtotal</p>
                                    <p className="font-medium">{formatPrice(calculateSubtotal())}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-gray-600">Estimated Delivery & Handling</p>
                                    <p className="font-medium">Free</p>
                                </div>
                                <div className="border-t pt-4 mt-4">
                                    <div className="flex justify-between">
                                        <p className="font-semibold">Total</p>
                                        <p className="font-bold">{formatPrice(calculateSubtotal())}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleProceed}
                                    className="w-full  text-white rounded-full py-4 font-medium bg-black transition-colors mt-6"
                                >
                                    Proceed to Checkout
                                </button>
                                <Link href="/" className="block text-center text-gray-600 hover:text-black transition-colors mt-4">
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page

