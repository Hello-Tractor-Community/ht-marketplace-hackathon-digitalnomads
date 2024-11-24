'use client';

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/Auth');
  }

  return (
    <div className="w-full bg-[#FCFCFC] shadow-sm fixed top-0 left-0 right-0 z-50">
      {/* Header Section */}
      <div className="w-full h-16 px-6 flex items-center">
        <div className="w-full flex items-center justify-between">
          {/* Left Section - Logo */}
          <div className="flex items-center ml-10">
            <img src="/HT_LOGO_RGB_Orange 1.png" alt="logo" className="w-36 h-auto" />
          </div>

          {/* Center Section - Search */}
          <div className="hidden md:flex items-center space-x-6 text-gray-600 text-sm">
            <form className="flex items-center">
              <input
                type="text"
                placeholder="Search for tractor or Spare Part"
                className="w-96 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-orange-500 text-white rounded-r-full hover:bg-orange-600 transition-colors duration-300"
              >
                Search
              </button>
            </form>
          </div>

          {/* Right Section - Buttons */}
          <div className="flex items-center space-x-6 mr-10">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-full">
              SELL
            </button>

            <button onClick={handleSignIn} className="bg-white hover:bg-orange-50 text-orange-500 font-semibold px-6 py-2 rounded-full border border-orange-500 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="bg-[#FCFCFC] shadow-sm">
        <nav className="flex items-center justify-center px-6 py-3">
          <div className="flex text-sm font-medium">
            {[ 
              { label: "Home", href: "/" }, 
              { label: "Tractors", href: "/tractors" }, 
              { label: "Spare Parts", href: "/spareparts" }, 
              { label: "Dealers", href: "/services" }, 
              { label: "News", href: "/news" }, 
              { label: "Shops", href: "/shops" }, 
              { label: "Contacts", href: "/contacts" }, 
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-800 px-10 py-2 hover:bg-gray-200 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
