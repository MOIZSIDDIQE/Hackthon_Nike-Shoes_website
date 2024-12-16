import Image from "next/image";
import Navbar from "./Navbar";
import Hero from "./Home/Hero";
import HomeBody from "./Home/HomeBody";


export default function Home() {
  return (
    <div>
    <Hero />
    <HomeBody />
    </div>
  );
}
