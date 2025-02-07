
import Image from "next/image";
import Navbar from "./Navbar";
import Hero from "./Home/Hero";
import HomeBody from "./Home/page";
import { fetchData } from "@/sanity/lib/fetch";
import { products } from "@/sanity/lib/queries";
import Example from "./example/Example";

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
