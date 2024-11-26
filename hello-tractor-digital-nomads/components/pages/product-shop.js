'use client';

import { useState } from "react";
import TractorDisplayCard from "@/components/organisms/tractor-display-card";
import { Range } from "react-range";
import { Filter, X } from 'lucide-react';

export default function ProductList({ products }) {
  const [priceRange, setPriceRange] = useState([10000, 50000]); // [min, max]
  const [hoursUsedRange, setHoursUsedRange] = useState([1000, 5000]); // [min, max]
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Handle range change for price
  const handlePriceChange = (values) => {
    setPriceRange(values);
  };

  // Handle range change for hours used
  const handleHoursUsedChange = (values) => {
    setHoursUsedRange(values);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="bg-white min-h-screen pt-16 md:pt-20">
      {/* Filter toggle button for mobile */}
      <button
        className="fixed bottom-4 right-4 z-50 md:hidden bg-blue-500 text-white p-3 rounded-full shadow-lg"
        onClick={toggleFilter}
      >
        <Filter size={24} />
      </button>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left Ribbon - Filter Options */}
        <div className={`w-full md:w-64 lg:w-1/5 bg-white p-4 md:p-6 shadow-lg fixed inset-0 z-40 md:relative md:translate-x-0 transition-transform duration-300 ease-in-out ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold text-xl text-gray-800">Filters</h2>
            <button className="md:hidden" onClick={toggleFilter}>
              <X size={24} />
            </button>
          </div>

          {/* Filter options */}
          <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-100px)] md:max-h-none">
            {/* Location Filter */}
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Location</h3>
              <select className="w-full border border-gray-300 rounded-md p-2">
                <option value="">Select Location</option>
                <option value="New York">New York</option>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="Florida">Florida</option>
              </select>
            </div>

            {/* Horsepower Filter */}
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Horsepower</h3>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter horsepower"
              />
            </div>

            {/* Make Filter */}
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Make</h3>
              <select className="w-full border border-gray-300 rounded-md p-2">
                <option value="">Select Make</option>
                <option value="John Deere">John Deere</option>
                <option value="Case IH">Case IH</option>
                <option value="Caterpillar">Caterpillar</option>
                <option value="Kubota">Kubota</option>
              </select>
            </div>

            {/* Model Filter */}
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Model</h3>
              <select className="w-full border border-gray-300 rounded-md p-2">
                <option value="">Select Model</option>
                <option value="JD 8400R">JD 8400R</option>
                <option value="Case IH Magnum 380">Case IH Magnum 380</option>
                <option value="Caterpillar 770G">Caterpillar 770G</option>
                <option value="Kubota M7-171">Kubota M7-171</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full md:w-3/4 lg:w-4/5 p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {products.tractors.map((tractor) => (
              <TractorDisplayCard
                key={tractor.tractor_id}
                id={tractor.tractor_id}
                make={tractor.make}
                model={tractor.model}
                price={tractor.price}
                hours_used={tractor.hours_used}
                year_of_manufacturing={tractor.year_of_manufacturing}
                engine_power={tractor.engine_power}
                fuel_type={tractor.fuel_type}
                image_url={tractor.image_url}
                quantity={tractor.quantity}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

