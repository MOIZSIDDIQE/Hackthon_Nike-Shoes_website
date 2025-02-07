import { defineQuery, groq } from "next-sanity";
import { client } from "./client";

export const products = groq`
    *[_type == "product"]
    `


export const getSingleEvent = async (slug) => {
    const SINGLE_EVENTS_QUERY = defineQuery(`*[_type == "event" &&
              slug.current == $slug
            ][0]{
              _id,
              eventName,
              slug,
              projectDetails,
              mainProjectImage,
              thumbnailImage,
              location,
              eventDate,
              past,
              featured
          }`);
    const singleEvent = await client.fetch(
        SINGLE_EVENTS_QUERY,
        { slug },
        options
    );

    return singleEvent;
};


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