import Header from "./navbar";
import TTractorDisplayCard from "./tractor-display-card";

function Tractor() {
    return (
        <div className="bg-white">
            <div className="flex items-center justify-center pt-30">
                <div className="w-100 items-left">
                    <Image
                        src="TractorImage.png"
                        alt="Tractor Image"
                        className="w-full h-60"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="p-4 overflow-hidden w-[600px]">
                    <h3 className="text-bold text-[#1F1E17]-800 text-lg font-bold">Farmatic Epc 5 Pro</h3>
                    <div className="flex space-x2 text-center text-sm mt-1">
                        <span className="text-red-500 font-bold">Price: $5.00</span>
                    </div>
                    <h3 className="text-bold text-black text-lg font-bold">Description</h3>
                    <p className="text-sm text-[#878680] break-words whitespace-normal">
                        Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo venenatis ligula commodo leez sed blandit convallis dignissim onec vel pellentesque neque.
                    </p>
                    <h3 className="text-bold text-black text-lg font-bold">Specifications</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-sm text-[#878680]">
                            <strong>Make:</strong> Farmatic
                        </div>
                        <div className="text-sm text-[#878680]">
                            <strong>Model:</strong> Epc 5 Pro
                        </div>
                        <div className="text-sm text-[#878680]">
                            <strong>Location:</strong> Nairobi
                        </div>
                        <div className="text-sm text-[#878680]">
                            <strong>Engine Type:</strong> Diesel
                        </div>
                        <div className="text-sm text-[#878680]">
                            <strong>Horsepower:</strong> 80 HP
                        </div>
                        <div className="text-sm text-[#878680]">
                            <strong>Transmission:</strong> Manual
                        </div>
                        <div className="text-sm text-[#878680]">
                            <strong>Fuel Type:</strong> Diesel
                        </div>
                        <div className="text-sm text-[#878680]">
                            <strong>Hours Used:</strong> 6000 hours
                        </div>
                        <div className="text-sm text-[#878680]">
                            <strong>Condition:</strong> Good Condition
                        </div>
                        <div className="text-sm text-[#878680]">
                            <strong>Year:</strong> 2015
                        </div>
                        <div className="text-sm text-[#878680]">
                            <strong>Warranty:</strong> 6 months
                        </div>
                    </div>
                    <div className="flex justify-items: end">
                        <button className="mt-1 mr-10 px-6 py-1 h-[30px] bg-[#FF461E] text-white text-sm text-lg rounded-lg shadow-md hover:bg-orange-600 transition">
                            Add to Wishlist
                        </button>
                        <button className="mt-1 px-6 py-1 h-[30px] bg-[#FF461E] text-white text-sm text-lg rounded-lg shadow-md hover:bg-orange-600 transition">
                            Message Seller
                        </button>
                    </div>
                </div>
                <div className="p-4 overflow-hidden">
                    <h3 className="text-bold text-[#1F1E17]-800 text-lg font-bold">Seller Information:</h3>
                    <div className="flex">
                        <Image
                            src="avatar.png"
                            alt="Seller Avatar"
                            className="w-20 h-20"
                            width={100}
                            height={100}
                        />
                        <div className="mt-5 ml-5">
                            <h3 className="text-sm text-gray-900 font-bold">Seller Score: 89%</h3>
                            <h3 className="text-sm text-gray-900 mt-1 font-bold">Seller Score: 89%</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-10 w-full max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-4 text-gray-800">1 Review for Tomato</h3>
                <div className="flex items-start space-x-4">
                    <Image
                        src="avatar.png"
                        alt="Reviewer Image"
                        className="w-16 h-16 rounded-full border border-gray-300"
                        width={100}
                        height={100}
                    />
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                            <h5 className="text-sm font-semibold text-gray-700">Kevin Tomato</h5>
                            <h5 className="text-sm text-green-500">9th July 2022</h5>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            The tractor delivers exceptional power, handling even the toughest tasks with ease.
                            Whether it’s plowing through heavy soil or transporting loads, the engine runs
                            smoothly without stalling. The gear transitions are seamless, and the hydraulic
                            system is incredibly responsive, making operations feel effortless.
                        </p>
                    </div>
                </div>
            </div>

            <div className="items-center justify-center">
                <h3 className="text-black font-bold text-center mb-5">Other Products from Seller</h3>
                <div className="flex items-center justify-center">
                    <TTractorDisplayCard />
                    <TTractorDisplayCard />
                </div>
            </div>
        </div>
    )
}
