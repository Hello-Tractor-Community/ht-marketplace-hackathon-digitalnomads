import Image from "next/image";
import TractorDisplayCard from "@/components/organisms/tractor-display-card";

export default function TractorDetailsPage({
    id,
    make = 'Farmatic Epc 5 Pro',
    model,
    price = '10000000',
    engine_power = 60,
    hours_used,
    fuel_type = 'Diesel',
    year_of_manufacturing,
    image_url,
    relatedTractors,
    location
}) {
    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto px-4 py-8 sm:py-12">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    {/* Tractor Image */}
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                        <Image
                            src={image_url || "/TractorImage.png"}
                            alt={`${make} ${model}`}
                            className="w-full h-auto object-cover rounded-lg shadow-md"
                            width={600}
                            height={400}
                        />
                    </div>

                    {/* Tractor Details */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">{make} {model}</h1>
                        <p className="text-2xl font-bold text-red-500 mb-6">sh{price}</p>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Description</h2>
                            <p className="text-gray-600">
                                This is a really cool tractor with advanced features and excellent performance.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Specifications</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-sm text-gray-600"><strong>Make:</strong> {make}</div>
                                <div className="text-sm text-gray-600"><strong>Model:</strong> {model}</div>
                                <div className="text-sm text-gray-600"><strong>Location:</strong> {location}</div>
                                <div className="text-sm text-gray-600"><strong>Engine Type:</strong> {fuel_type}</div>
                                <div className="text-sm text-gray-600"><strong>Horsepower:</strong> {engine_power} HP</div>
                                <div className="text-sm text-gray-600"><strong>Transmission:</strong> Manual</div>
                                <div className="text-sm text-gray-600"><strong>Fuel Type:</strong> {fuel_type}</div>
                                <div className="text-sm text-gray-600"><strong>Hours Used:</strong> {hours_used} hours</div>
                                <div className="text-sm text-gray-600"><strong>Condition:</strong> Good Condition</div>
                                <div className="text-sm text-gray-600"><strong>Year:</strong> {year_of_manufacturing}</div>
                                <div className="text-sm text-gray-600"><strong>Warranty:</strong> 6 months</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="w-full sm:w-auto px-6 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-orange-600 transition duration-300 ease-in-out">
                                Add to Wishlist
                            </button>
                            <button className="w-full sm:w-auto px-6 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-orange-600 transition duration-300 ease-in-out">
                                Message Seller
                            </button>
                        </div>
                    </div>
                </div>

                {/* Seller Information */}
                <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Seller Information</h2>
                    <div className="flex items-center space-x-4">
                        <Image
                            src="/avatar.png"
                            alt="Seller Avatar"
                            className="w-16 h-16 rounded-full"
                            width={64}
                            height={64}
                        />
                        <div>
                            <p className="text-sm font-bold text-gray-900">Seller Score: 89%</p>
                            <p className="text-sm font-bold text-gray-900 mt-1">Seller Rating: 4.5/5</p>
                        </div>
                    </div>
                </div>

                {/* Reviews */}
                <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">1 Review for {make} {model}</h2>
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <Image
                            src="/avatar.png"
                            alt="Reviewer Image"
                            className="w-16 h-16 rounded-full border border-gray-300"
                            width={64}
                            height={64}
                        />
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-sm font-semibold text-gray-700">Kevin Tomato</h3>
                                <p className="text-sm text-green-500">9th July 2022</p>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                The tractor delivers exceptional power, handling even the toughest tasks with ease.
                                Whether it&apos;s plowing through heavy soil or transporting loads, the engine runs
                                smoothly without stalling. The gear transitions are seamless, and the hydraulic
                                system is incredibly responsive, making operations feel effortless.
                            </p>

                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Other Products from Seller</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TractorDisplayCard
                            id="1"
                            make="John Deere"
                            model="5075E"
                            price="7500000"
                            engine_power={75}
                            hours_used={500}
                            fuel_type="Diesel"
                            year_of_manufacturing={2021}
                            image_url="/TractorImage.png"
                            quantity={1}
                        />
                        <TractorDisplayCard
                            id="2"
                            make="Case IH"
                            model="Farmall 100A"
                            price="8000000"
                            engine_power={100}
                            hours_used={300}
                            fuel_type="Diesel"
                            year_of_manufacturing={2022}
                            image_url="/TractorImage.png"
                            quantity={1}
                        />
                        <TractorDisplayCard
                            id="3"
                            make="New Holland"
                            model="T6.180"
                            price="9500000"
                            engine_power={180}
                            hours_used={100}
                            fuel_type="Diesel"
                            year_of_manufacturing={2023}
                            image_url="/TractorImage.png"
                            quantity={1}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

