import Link from "next/link";
import Image from "next/image";
export default function HomePage() {
  return (
    <div className="h-screen bg-gray-100">
      <div className="relative">
        <Image
          src="/backgroundtractor.png"
          alt="Background Tractor"
          className="w-full h-auto"
          height={1080}
          width={1920}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className=" uppercase text-sm tracking-widest text-white">
            Welcome to Hello Tractor
          </p>
          <h1 className="font-merriweather text-4xl md:text-6xl mt-2 text-white">
            Find your Perfect<br /> Tractor Today
          </h1>
          <Link href='/tractors'>
            <button className="mt-6 px-6 py-3 bg-[#FF461E] text-white font-medium text-lg rounded-lg shadow-md hover:bg-orange-600 transition">
              Discover more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
