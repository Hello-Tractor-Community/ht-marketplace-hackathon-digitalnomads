'use client'

import Image from "next/image";
import { useRouter } from "next/navigation"

import { Heart } from 'lucide-react'
import { useWishlist } from "@/components/contexts/wishlist"
import { useSession } from "next-auth/react"

export default function TractorDisplayCard({
    id,
    make = 'Farmatic Epc 5 Pro',
    model,
    price = '10000000',
    engine_power = 60,
    hours_used,
    fuel_type = 'Diesel',
    quantity = 10,
    image_url

}) {

    const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()
    const { data: session } = useSession()

    const router = useRouter()

    const handleWishlistClick = () => {
        if (!session) {
            router.push('/sign-in')
            return
        }

        if (isInWishlist(id)) {
            removeFromWishlist(id)
        } else {
            addToWishlist(id)
        }
    }

    return (
        <div className="bg-white w-[360px] h-[540px] flex flex-col  hover:shadow-lg rounded-lg overflow-hidden mr-5 transform hover:scale-105 transition-transform duration-300">
            {/* Image Section */}
            <div className="relative">
                <Image
                    src="/TractorImage.png"
                    alt="Tractor Image"
                    className="w-full object-cover rounded-t-lg"
                    width={100}
                    height={500}
                />
                <button
                    onClick={handleWishlistClick}
                    className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                >
                    <Heart
                        className={`w-5 h-5 ${isInWishlist(id)
                            ? 'fill-red-500 text-red-500'
                            : 'text-gray-600'
                            }`}
                    />
                </button>
            </div>

            {/* Card Content */}
            <div className="p-5">
                {/* Title Section */}
                <h3 className="font-semibold text-gray-900 text-xl leading-tight mb-2 truncate hover:text-orange-500 transition-colors">
                    {make}
                </h3>

                {/* Price Section */}
                <div className="flex items-center space-x-4 text-sm mt-1">
                    <span className="text-gray-500 line-through">sh{price}</span>
                    <span className="text-orange-500 font-semibold text-lg">sh{price}</span>
                </div>

                {/* Features Section */}
                <div className="flex items-center mt-4 space-x-6 text-sm text-gray-700">
                    <div className="flex items-center space-x-2">
                        <Image
                            src="/hpIcon.png"
                            alt="Horsepower"
                            className="w-6 h-6"
                            width={100}
                            height={100}
                        />
                        <span className="font-medium">{engine_power}HP</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Image
                            src="/gearsIcon.png"
                            alt="Drive Type"
                            className="w-6 h-6"
                            width={100}
                            height={100}
                        />
                        <span className="font-medium">{fuel_type}</span>
                    </div>
                </div>

                {/* Location and Availability */}
                <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                    <span className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
                            <path d="M9 12l2 2 4-4m0 0l-4-4-2 2m4 4H5" />
                        </svg>
                        {quantity === 0 ? <span>Out of Stock</span> : <span>{quantity} left</span>}
                    </span>
                    <span className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
                            <path d="M5 3a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5z" />
                        </svg>
                        <span>Free Delivery</span>
                    </span>
                </div>
            </div>

            {/* Action Button Section */}
            <div className="py-2 border-t border-gray-200 bg-gray-50">
                <button onClick={() => router.push(`/tractors/${id}`)} className="w-full bg-primary hover:bg-orange-600 text-white py-2 px-4 rounded-full text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105">
                    View Details
                </button>
            </div>
        </div>
    );
}
