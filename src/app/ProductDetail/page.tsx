import Image from "next/image"
import Link from "next/link"

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-w-4 aspect-h-3 lg:aspect-h-4">
              <Image
                src="/assest/s3.jpg"
                layout="fill"
                objectFit="cover"
                alt="Nike Air Force 1 PLT.AF.ORM"
                className="transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
              New Arrival
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Nike Air Force 1<span className="block text-3xl lg:text-4xl text-gray-600 mt-2">PLT.AF.ORM</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired
              construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan
              Brand silhouette.
            </p>
            <div className="flex items-center justify-between mb-8">
              <p className="text-4xl font-bold text-gray-900">₹ 8,695.00</p>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">★★★★</span>
                <span className="text-yellow-400 mr-2">★</span>
                <span className="text-sm text-gray-500">(4.5/5)</span>
              </div>
            </div>
            <Link href="../cart">
              <button className="w-full bg-black text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-3  transition-colors duration-900 transform hover:scale-105">
                <Image src="/store2.svg" width={24} height={24} alt="store" />
                <span>Add To Cart</span>
              </button>
            </Link>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">Free shipping on orders over ₹10,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page

