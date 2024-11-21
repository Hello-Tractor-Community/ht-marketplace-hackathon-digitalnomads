import Header from "./Header";

export default function ProductList(){
    return (
        <div className="bg-gray-100">
        <Header />
                  {/* Main Content Section */}
      <div className="flex">
        {/* Left Ribbon - Filter Options */}
        <div className="w-1/6 bg-[#FFFFFF] p-4 shadow-md">
          <h2 className="font-semibold text-lg text-gray-800 mb-4">Filters</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <label>
                <input type="checkbox" className="mr-2" />
                Filter Option 1
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="mr-2" />
                Filter Option 2
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="mr-2" />
                Filter Option 3
              </label>
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="w-4/5 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TractorDisplayCard />
            <TractorDisplayCard />
            <TractorDisplayCard />
            <TractorDisplayCard />
            <TractorDisplayCard />
            <TractorDisplayCard />
            <TractorDisplayCard />
        </div>
      </div>
        </div>
    );
}

function TractorDisplayCard() {
    return (
        <div className="bg-white w-64 shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="relative">
                <img src="TractorImage.png" alt="Tractor Image" className="w-full h-40 object-cover" />
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-lg">Farmatic Epc 5 Pro</h3>
                <div className="flex items-center space-x-2 text-sm mt-1">
                    <span className="text-gray-400 line-through">$8.00</span>
                    <span className="text-red-500 font-bold">$5.00</span>
                </div>

                <div className="flex items-center mt-2 space-x-4">
                    <div className="flex items-center text-sm text-gray-600">
                        <img src="/hpIcon.png" alt="HP" className="w-6 h-6 mr-1" />
                        <span>60HP</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                        <img src="/gearsIcon.png" alt="WD" className="w-6 h-6 mr-1" />
                        <span>2WD</span>
                    </div>
                </div>
            </div>
            <div className="p-4 border-t">
                <button className="flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full text-sm font-bold">
                    View
                </button>
            </div>
        </div>
    );
}