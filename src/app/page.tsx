

import HomeBody from "./Home/page";
import { fetchData } from "@/sanity/lib/fetch";
import { products } from "@/sanity/lib/queries";

type productType = {
  _id : string,
  productName: string,
  description: string,
  price: number,
  imageUrl: string,
}


export  default async function Home() {
  const fetchProduct :productType[] = await fetchData({query: products })

  return (
    <div>

    <HomeBody />
    </div>
  );
}
