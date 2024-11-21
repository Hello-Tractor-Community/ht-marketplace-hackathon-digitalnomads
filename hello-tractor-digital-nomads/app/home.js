import Link from "next/link";
import Header from "./Header";

export default function HomePage() {
  return (
    <div className="bg-gray-100">
      {/* Top Bar */}
      <Header />
      {/* Navigation Bar */}
{/* Navigation Bar */}
<div className="bg-[#E4E2D7]">
  <nav className="flex items-center justify-between px- py-3 shadow-md">
    <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
      {[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Products", href: "/products" },
        { label: "News", href: "/news" },
        { label: "Shops", href: "/shops" },
        { label: "Contacts", href: "/contacts" },
      ].map((link) => (
        <Link key={link.href} href={link.href}>
            {link.label}
        </Link>
      ))}
    </div>
  </nav>
</div>


      {/* Image Section */}
      <div className="relative">
        <img src="/backgroundtractor.png" alt="Background Tractor" className="w-full h-auto" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="uppercase text-sm tracking-widest text-white">
            Welcome to Hello Tractor
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 text-white">
            Find your Perfect<br /> Tractor Today
          </h1>
          <button className="mt-6 px-6 py-3 bg-[#FF461E] text-white font-medium text-lg rounded-lg shadow-md hover:bg-orange-600 transition">
            Discover more
          </button>
        </div>
      </div>
    </div>
  );
}
