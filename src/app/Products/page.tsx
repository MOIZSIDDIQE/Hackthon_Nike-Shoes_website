'use client';

import React, { useEffect, useState } from "react";
import { productType } from "../../../types/type";
import { client } from "@/sanity/lib/client";
import { products } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "../action/action";
import Swal from "sweetalert2";

const Page = () => {
    const [product, setProduct] = useState<productType[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<productType[]>([]);
    const [wishlist, setWishlist] = useState<productType[]>([]);
    const [isFilterVisible, setIsFilterVisible] = useState(true);
    const [selectedFilters, setSelectedFilters] = useState({
        categories: new Set<string>(),
        gender: new Set<string>(),
        kids: new Set<string>(),
        price: new Set<string>()
    });

    // Load wishlist from localStorage
    useEffect(() => {
        const storedWishlist = localStorage.getItem("wishlist");
        if (storedWishlist) {
            setWishlist(JSON.parse(storedWishlist));
        }
    }, []);

    useEffect(() => {
        async function fetchProduct() {
            const fetchPro: productType[] = await client.fetch(products);
            setProduct(fetchPro);
            setFilteredProducts(fetchPro);
        }
        fetchProduct();
    }, []);

    // Toggle Wishlist
    const toggleWishlist = (pro: productType) => {
        let updatedWishlist;
        const isInWishlist = wishlist.some((item) => item._id === pro._id);

        if (isInWishlist) {
            updatedWishlist = wishlist.filter((item) => item._id !== pro._id);
            Swal.fire("Removed!", "Product has been removed from Wishlist.", "info");
        } else {
            updatedWishlist = [...wishlist, pro];
            Swal.fire("Added!", "Product added to Wishlist.", "success");
        }

        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    };

    const handleCart = (e: React.MouseEvent, pro: productType) => {
        e.preventDefault();
        Swal.fire({
            title: "Added to Cart!",
            text: `${pro.productName} has been added successfully.`,
            icon: "success",
        });
        addToCart(pro);
    };

    const toggleFilter = (category: string, value: string) => {
        setSelectedFilters(prev => {
            const newFilters = { ...prev };
            const categorySet = newFilters[category as keyof typeof prev];
            if (categorySet.has(value)) {
                categorySet.delete(value);
            } else {
                categorySet.add(value);
            }
            return { ...newFilters };
        });
    };

    useEffect(() => {
        let filtered = [...product];

        if (selectedFilters.categories.size > 0) {
            filtered = filtered.filter(item =>
                Array.from(selectedFilters.categories).some(cat =>
                    item.category?.toLowerCase().includes(cat.toLowerCase())
                )
            );
        }

        if (selectedFilters.gender.size > 0) {
            filtered = filtered.filter(item =>
                Array.from(selectedFilters.gender).some(gender =>
                    item.gender?.toLowerCase() === gender.toLowerCase()
                )
            );
        }

        if (selectedFilters.kids.size > 0) {
            filtered = filtered.filter(item =>
                Array.from(selectedFilters.kids).some(kidCategory =>
                    item.kidCategory?.toLowerCase() === kidCategory.toLowerCase()
                )
            );
        }

        if (selectedFilters.price.size > 0) {
            filtered = filtered.filter(item => {
                if (selectedFilters.price.has('Under ₹ 2,500')) {
                    return item.price < 2500;
                }
                if (selectedFilters.price.has('₹ 2,501+')) {
                    return item.price >= 2501;
                }
                return true;
            });
        }

        setFilteredProducts(filtered);
    }, [selectedFilters, product]);

    const categories = [
        "Shoes", "Sports Bras", "Tops & T-Shirts", "Hoodies & Sweatshirts",
        "Jackets", "Trousers & Tights", "Shorts", "Tracksuits",
        "Jumpsuits & Rompers", "Skirts & Dresses", "Socks", "Accessories & Equipment"
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                    <h1 className="text-3xl font-bold mb-4 sm:mb-0">
                        New ({filteredProducts.length})
                    </h1>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => setIsFilterVisible(!isFilterVisible)}
                            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                        >
                            <span>{isFilterVisible ? 'Hide' : 'Show'} Filters</span>
                            <Image src="/filter.svg" width={20} height={20} alt="Filter" />
                        </button>
                        <div className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-black transition-colors">
                            <span>Sort By</span>
                            <Image src="/option.svg" width={18} height={18} alt="Drop down" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    {isFilterVisible && (
                        <aside className="lg:w-64 flex-shrink-0">
                            <div className="bg-white p-6 rounded-xl shadow-sm space-y-8">
                                {/* Categories */}
                                <div>
                                    <h3 className="font-bold text-lg mb-4">Categories</h3>
                                    <div className="space-y-3">
                                        {categories.map((category) => (
                                            <label key={category} className="flex items-center gap-3 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedFilters.categories.has(category)}
                                                    onChange={() => toggleFilter('categories', category)}
                                                    className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
                                                />
                                                <span className="text-gray-600 group-hover:text-black transition-colors">{category}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Gender */}
                                <div>
                                    <h3 className="font-bold text-lg mb-4">Gender</h3>
                                    <div className="space-y-3">
                                        {["Men", "Women", "Unisex"].map((gender) => (
                                            <label key={gender} className="flex items-center gap-3 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedFilters.gender.has(gender)}
                                                    onChange={() => toggleFilter('gender', gender)}
                                                    className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
                                                />
                                                <span className="text-gray-600 group-hover:text-black transition-colors">{gender}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Kids */}
                                <div>
                                    <h3 className="font-bold text-lg mb-4">Kids</h3>
                                    <div className="space-y-3">
                                        {["Boys", "Girls"].map((kid) => (
                                            <label key={kid} className="flex items-center gap-3 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedFilters.kids.has(kid)}
                                                    onChange={() => toggleFilter('kids', kid)}
                                                    className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
                                                />
                                                <span className="text-gray-600 group-hover:text-black transition-colors">{kid}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Range */}
                                <div>
                                    <h3 className="font-bold text-lg mb-4">Price Range</h3>
                                    <div className="space-y-3">
                                        {["Under ₹ 2,500", "₹ 2,501+"].map((price) => (
                                            <label key={price} className="flex items-center gap-3 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedFilters.price.has(price)}
                                                    onChange={() => toggleFilter('price', price)}
                                                    className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
                                                />
                                                <span className="text-gray-600 group-hover:text-black transition-colors">{price}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    )}

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((pro) => (
                                <div key={pro._id} className="bg-white rounded-xl shadow-sm hover:scale-105 transition duration-300 overflow-hidden hover:shadow-md relative">
                                    <Link href={`/product/${pro.slug.current}`} className="block">
                                        <div className="aspect-square relative">
                                            {pro.image && (
                                                <Image
                                                    src={urlFor(pro.image).url()}
                                                    width={400}
                                                    height={400}
                                                    alt={pro.productName}
                                                />
                                            )}

                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-lg mb-2 line-clamp-2">{pro.productName}</h3>
                                            <p className="text-gray-900 font-medium">₹{pro.price.toLocaleString()}</p>
                                        </div>
                                    </Link>

                                    {/* Wishlist Button */}
                                    <button
                                        onClick={() => toggleWishlist(pro)}
                                        className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-all"
                                    >
                                        <svg
                                            width="22"
                                            height="19"
                                            viewBox="0 0 22 19"
                                            fill={wishlist.some((item) => item._id === pro._id) ? "#ff4b4b" : "none"}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="transition-all duration-300"
                                        >
                                            <path
                                                d="M15.794 0.750017C17.118 0.750017 18.362 1.26602 19.298 2.20102C20.2262 3.13093 20.7475 4.39113 20.7475 5.70502C20.7475 7.0189 20.2262 8.2791 19.298 9.20902L11 17.508L2.70096 9.20902C1.77307 8.27914 1.25195 7.01915 1.25195 5.70552C1.25195 4.39188 1.77307 3.13189 2.70096 2.20202C3.15999 1.74032 3.70604 1.37425 4.30751 1.12501C4.90897 0.875777 5.5539 0.748319 6.20496 0.750017C7.52896 0.750017 8.77296 1.26602 9.70896 2.20102L10.469 2.96102L11 3.49202L11.53 2.96102L12.29 2.20102Z"
                                                stroke="#111111"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                    </button>

                                    <div className="px-4 pb-4">
                                        <button
                                            onClick={(e) => handleCart(e, pro)}
                                            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                            </svg>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Related Categories */}
                        <div className="mt-16 pt-8 border-t">
                            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Best Selling Products", "Best Shoes", "New Basketball Shoes",
                                    "New Football Shoes", "New Men's Shoes", "New Running Shoes",
                                    "Best Men's Shoes", "New Jordan Shoes", "Best Women's Shoes",
                                    "Best Training & Gym"
                                ].map((category) => (
                                    <button
                                        key={category}
                                        className="px-4 py-2 rounded-full border-2 border-gray-200 hover:border-black hover:text-black text-gray-600 text-sm transition-colors"
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;