import { useRouter } from "next/navigation";
import Image from "next/image";
export default function TractorDisplayCard() {
    const router = useRouter();
    const tractorId = '123';

    const handleNavigate = () => {
        router.push(`/tractors/${tractorId}`);
    }

    return (
        <div className="bg-white w-72 hover:shadow-lg rounded-lg overflow-hidden hover:border hover:border-gray-200 mr-5 transform hover:scale-105 transition-transform duration-300">
            {/* Image Section */}
            <div className="relative">
                <Image
                    src="TractorImage.png"
                    alt="Tractor Image"
                    className="w-full h-40 object-cover rounded-t-lg"
                    width={100}
                    height={100}
                />
            </div>

            {/* Card Content */}
            <div className="p-5">
                {/* Title Section */}
                <h3 className="font-semibold text-gray-900 text-xl leading-tight mb-2 truncate hover:text-orange-500 transition-colors">
                    Farmatic Epc 5 Pro
                </h3>

                {/* Price Section */}
                <div className="flex items-center space-x-4 text-sm mt-1">
                    <span className="text-gray-500 line-through">$8.00</span>
                    <span className="text-orange-500 font-semibold text-lg">$5.00</span>
                </div>

                {/* Features Section */}
                <div className="flex items-center mt-4 space-x-6 text-sm text-gray-700">
                    <div className="flex items-center space-x-2">
                        <img src="/hpIcon.png" alt="Horsepower" className="w-6 h-6" />
                        <span className="font-medium">60 HP</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="/gearsIcon.png" alt="Drive Type" className="w-6 h-6" />
                        <span className="font-medium">2WD</span>
                    </div>
                </div>

                {/* Location and Availability */}
                <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                    <span className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
                            <path d="M9 12l2 2 4-4m0 0l-4-4-2 2m4 4H5" />
                        </svg>
                        <span>Available Now</span>
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
            <div className="p-4 border-t border-gray-200 bg-gray-50">
                <button onClick={handleNavigate} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105">
                    View Details
                </button>
            </div>
        </div>
    );
}
