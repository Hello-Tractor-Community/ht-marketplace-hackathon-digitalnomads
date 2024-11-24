'use client';

import Link from "next/link";
import Header from "../../organisms/navbar";
import { useRouter } from "next/navigation";
function HomePage() {
  const router = useRouter();

  const handleDiscoverMore = () => {
    router.push('/tractors');
  }
  
  return (
    <div className="bg-gray-100">
      {/* Top Bar */}
      <Header />

      <div className="relative">
        <img src="/backgroundtractor.png" alt="Background Tractor" className="w-full h-auto" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="uppercase text-sm tracking-widest text-white">
            Welcome to Hello Tractor
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 text-white">
            Find your Perfect<br /> Tractor Today
          </h1>
          <button onClick={handleDiscoverMore} className="mt-6 px-6 py-3 bg-[#FF461E] text-white font-medium text-lg rounded-lg shadow-md hover:bg-orange-600 transition">
            Discover more
          </button>
        </div>
      </div>
    </div>
  );
}
