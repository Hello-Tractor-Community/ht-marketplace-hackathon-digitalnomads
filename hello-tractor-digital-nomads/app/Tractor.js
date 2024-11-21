import Header from "./Header"

export default function Tractor() {
    return(
        <div className="bg-white">
            <Header />
            <div className="flex items-center justify-center pt-30 flex-direction:row">
                <div className="w-100 items-left">
                    <img src="TractorImage.png" alt="Tractor Image" className="w-full h-60" />
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
                    <div className="flex justify-items: end">
                        <button className="mt-1 mr-10 px-6 py-1 h-[30px] bg-[#FF461E] text-white text-sm text-lg rounded-lg shadow-md hover:bg-orange-600 transition">
                            Add to Wishlist
                        </button>
                        <button className="mt-1 px-6 py-1 h-[30px] bg-[#FF461E] text-white text-sm text-lg rounded-lg shadow-md hover:bg-orange-600 transition">
                            Message Seller
                        </button>
                    </div>
                </div>
                <div className="p-4 flex">
                    <div className="flex items-center justify-between">
                        <div className="items-center text-sm flex text-gray-600">
                            <img src="hpIcon.png" alt="HP" className="w-6 h-6 mr-1" />
                            <span>60HP</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}