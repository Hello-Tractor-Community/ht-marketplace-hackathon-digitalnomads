'use client';

import { useState } from "react";
import TractorDisplayCard from "../../../components/organisms/tractor-display-card";
import { Range } from "react-range";

export default function ProductList() {
  const [priceRange, setPriceRange] = useState([10000, 50000]); // [min, max]
  const [hoursUsedRange, setHoursUsedRange] = useState([1000, 5000]); // [min, max]


  // Handle range change for price
  const handlePriceChange = (values) => {
    setPriceRange(values);
  };

  // Handle range change for hours used
  const handleHoursUsedChange = (values) => {
    setHoursUsedRange(values);
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Main Content Section */}
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Left Ribbon - Filter Options */}
        <div className="w-full lg:w-1/5 bg-white p-6 shadow-lg rounded-lg pt-20 fixed top-20 left-0 z-10 border-r border-gray-200">
          <h2 className="font-semibold text-xl text-gray-800 mb-6">Filters</h2>

          {/* Price Filter */}
          {/* <div className="mb-6">
            <h3 className="font-medium text-gray-800 mb-2">Price</h3>
            <Range
              values={priceRange}
              step={1000}
              min={0}
              max={100000}
              onChange={handlePriceChange}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="w-full h-2 bg-gray-200 rounded-md"
                >
                  {children}
                </div>
              )}
              renderThumb={({ index, props }) => (
                <div
                  {...props}
                  className="w-6 h-6 bg-blue-500 rounded-full"
                  style={{ left: `calc(${props.style.left} - 12px)` }}
                />
              )}
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div> */}

          {/* Location Filter */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-800 mb-2">Location</h3>
            <select className="w-full border-gray-300 rounded-md p-2">
              <option value="">Select Location</option>
              <option value="New York">New York</option>
              <option value="California">California</option>
              <option value="Texas">Texas</option>
              <option value="Florida">Florida</option>
            </select>
          </div>

          {/* Hours Used Filter */}
          {/* <div className="mb-6">
            <h3 className="font-medium text-gray-800 mb-2">Hours Used</h3>
            <Range
              values={hoursUsedRange}
              step={100}
              min={0}
              max={10000}
              onChange={handleHoursUsedChange}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="w-full h-2 bg-gray-200 rounded-md"
                >
                  {children}
                </div>
              )}
              renderThumb={({ index, props }) => (
                <div
                  {...props}
                  className="w-6 h-6 bg-blue-500 rounded-full"
                  style={{ left: `calc(${props.style.left} - 12px)` }}
                />
              )}
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{hoursUsedRange[0]}</span>
              <span>{hoursUsedRange[1]}</span>
            </div>
          </div> */}

          {/* Horsepower Filter */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-800 mb-2">Horsepower</h3>
            <input
              type="number"
              className="w-full border-gray-300 rounded-md p-2"
              placeholder="Enter horsepower"
            />
          </div>

          {/* Make Filter */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-800 mb-2">Make</h3>
            <select className="w-full border-gray-300 rounded-md p-2">
              <option value="">Select Make</option>
              <option value="John Deere">John Deere</option>
              <option value="Case IH">Case IH</option>
              <option value="Caterpillar">Caterpillar</option>
              <option value="Kubota">Kubota</option>
            </select>
          </div>

          {/* Model Filter */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-800 mb-2">Model</h3>
            <select className="w-full border-gray-300 rounded-md p-2">
              <option value="">Select Model</option>
              <option value="JD 8400R">JD 8400R</option>
              <option value="Case IH Magnum 380">Case IH Magnum 380</option>
              <option value="Caterpillar 770G">Caterpillar 770G</option>
              <option value="Kubota M7-171">Kubota M7-171</option>
            </select>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full lg:w-4/5 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-6 lg:pt-20 ml-auto lg:ml-1/5">
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
