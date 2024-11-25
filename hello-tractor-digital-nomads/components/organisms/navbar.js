import Link from "next/link";
import Image from "next/image";

import { links } from "@/lib/links";
import UserAvatarMenu from "./user-avatar-menu";

export default function Header() {

  return (
    <div className="w-full bg-[#FCFCFC] shadow-sm">
      {/* Header Section */}
      <div className="w-full h-16 px-6 flex items-center">
        <div className="w-full flex items-center justify-between">
          {/* Left Section - Logo */}
          <div className="flex items-center ml-10">
            <Image
              src="/HT_LOGO_RGB_Orange 1.png"
              alt="logo"
              className="w-36 h-auto"
              width={144}
              height={36}
               />
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
            <UserAvatarMenu />
            {/* <Link href='/sign-up'>
              <button className="bg-white hover:bg-orange-50 text-orange-500 font-semibold px-6 py-2 rounded-full border border-orange-500 flex items-center">
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
            </Link> */}
          </div>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="bg-[#FCFCFC] shadow-sm">
        <nav className="flex items-center justify-center px-6 py-3">
          <div className="flex text-sm font-medium">
            {links.map((link) => (
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
