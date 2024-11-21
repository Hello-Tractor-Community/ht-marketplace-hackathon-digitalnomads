import Link from "next/link";

export default function HomePage () {
    return (
        <div className="bg-gray-100">
            <div className="w-full h-20 bg-[#FCFCFC] py-1 px-3 shadow-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img src="/HT_LOGO_RGB_Orange 1.png" alt="logo" className="w-48 h-auto" />
                    </div>
                    <div className="hidden md:flex items-center space-x-6 text-gray-600 text-sm">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <img src="/twitter.svg" alt="twitter" className="w-6 h-6" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/instagram.svg" alt="Facebook" className="w-6 h-6" />
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3">
                            <img src="/HT_PHONEICON_ORANGE-44.png" alt="Phone" className="h-6 w-6"/>
                            <div className="text-sm">
                                <p className="text-gray-500">Call anytime</p>
                                <p className="font-semibold text-black">+254716000000</p>
                            </div>
                        </div>
                        <div className="h-6 w-px bg-gray-300"></div>
                        <div className="flex items-center space-x-3">
                            <img src="/HT_EMAILICON_ORANGE-71.png" alt="Phone" className="h-6 w-6"/>
                            <div className="text-sm">
                                <p className="text-gray-500">Send Email</p>
                                <p className="font-semibold text-black">a@hellotractor.com</p>
                            </div>
                        </div>
                        <div className="h-6 w-px bg-gray-300"></div>
                        <div className="flex items-center space-x-3">
                            <img src="/HT_LOCATIONICON_ORANGE-05.png" alt="Phone" className="h-6 w-6"/>
                            <div className="text-sm">
                                <p className="text-gray-500">Hollywood Avenue</p>
                                <p className="font-semibold text-black">Nairobi, Kenya</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#E4E2D7]">
                    <nav className="flex items-center justify-center space-x-6 py-4 shadow-md">
                        {[
                            { label: "Home", href: "/" },
                            { label: "About", href: '/about'},
                            { label: "Services", href: "/services" },
                            { label: "Products", href: "/products" },
                            { label: "News", href: "/news" },
                            { label: "Shops", href: "/shops" },
                            { label: "Contacts", href: "/contacts" },
                        ].map((link) => (
                            <Link key={link.href} href={link.href}>
                                {/* <a className="text-gray-700 hover:text-pink-500 text-sm font-medium uppercase"> */}
                                    {link.label}
                                {/* </a> */}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="relative">
                    <img src="/backgroundtractor.png" alt="Background Image" className="w-full h-auto" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <h1 className="text-white text-lg mt-4 drop-shadow-md">
                            Welcome to Hello Tractor
                        </h1>
                    </div>
                </div>
        </div>
    )
}