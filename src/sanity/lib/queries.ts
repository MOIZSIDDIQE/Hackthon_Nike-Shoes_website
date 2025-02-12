import { defineQuery, groq } from "next-sanity";
import { client } from "./client";

export const products = groq`
    *[_type == "product"]
    `




//export const specificProducts = defineQuery(`
//    *[_type == "product"][0..4]{
//    _id,
//    name,
//    description,
//    price,
//    discountPercentage,
//    priceWithoutDiscount,
//    rating,
//    ratingCount,
//    tags,
//    sizes,
//    "imageUrl":image.asset->url
//    }
//    `)