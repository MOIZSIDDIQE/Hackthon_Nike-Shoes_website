"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Swal from "sweetalert2";

// Fetch product from Sanity
const fetchProduct = async (slug: string) => {
  return await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        productName,
        image,
        price,
        description
    }`,
    { slug }
  );
};

const ProductDetail = ({ params }: { params: { slug: string } }) => {
  const [product, setProduct] = useState<any>(null);
  const [cart, setCart] = useState<any[]>([]);

  // Fetch product details when the page loads
  useEffect(() => {
    const getProduct = async () => {
      const fetchedProduct = await fetchProduct(params.slug);
      setProduct(fetchedProduct);
    };

    getProduct();

    // Load cart from local storage
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [params.slug]);

  if (!product) {
    return (
      <div className="text-center text-xl my-60 font-medium text-gray-600">
        Loading product...
      </div>
    );
  }

  // Handle Add to Cart
  const handleAddToCart = () => {
    let updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    Swal.fire({
      title: "Added to Cart!",
      text: "Your product has been added.",
      icon: "success",
      confirmButtonColor: "#000",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12 bg-white shadow-lg p-8 rounded-lg max-w-5xl w-full">
        {/* Product Image */}
        <div className="flex justify-center">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              width={500}
              height={500}
              alt={product.productName}
              className="rounded-lg shadow-md object-cover hover:scale-105 transition duration-300 ease-in-out"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            {product.productName}
          </h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-3xl font-bold text-black">₹ {product.price}</p>

          {/* Buttons */}
          <div className="flex flex-col gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-black text-white text-lg px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 ease-in-out"
            >
              Add To Cart
            </button>
            <Link href="/cart">
              <button className="border-2 border-black text-black text-lg px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
                Go to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
