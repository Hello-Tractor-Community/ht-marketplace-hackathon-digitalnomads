export default function Header() {
    return (
        <div className="w-full h-16 bg-[#FCFCFC] px-6 shadow-sm flex items-center">
        <div className="w-full flex items-center justify-between">
          {/* Left Section - Logo */}
          <div className="flex items-center ml-10">
            <img src="/HT_LOGO_RGB_Orange 1.png" alt="logo" className="w-36 h-auto" />
          </div>

          {/* Center Section - Social Media Icons */}
          <div className="hidden md:flex items-center space-x-6 text-gray-600 text-sm">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img src="/twitter.svg" alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="Instagram" className="w-5 h-5" />
            </a>
          </div>

          {/* Right Section - Contact Info */}
          <div className="flex items-center space-x-6 mr-10">
            {/* Phone Info */}
            <div className="flex items-center space-x-3">
              <img src="/HT_PHONEICON_ORANGE-44.png" alt="Phone" className="h-5 w-5" />
              <div className="text-sm">
                <p className="text-[#878680]">Call anytime</p>
                <p className="font-semibold text-[#020409]">+254716000000</p>
              </div>
            </div>
            <div className="h-5 w-px bg-gray-300"></div>
            {/* Email Info */}
            <div className="flex items-center space-x-3">
              <img src="/HT_EMAILICON_ORANGE-71.png" alt="Email" className="h-5 w-5" />
              <div className="text-sm">
                <p className="text-[#878680]">Send Email</p>
                <p className="font-semibold text-[#020409]">a@hellotractor.com</p>
              </div>
            </div>
            <div className="h-5 w-px bg-gray-300"></div>
            {/* Location Info */}
            <div className="flex items-center space-x-3">
              <img src="/HT_LOCATIONICON_ORANGE-05.png" alt="Location" className="h-5 w-5" />
              <div className="text-sm">
                <p className="text-[#878680]">Hollywood Avenue</p>
                <p className="font-semibold text-[#020409]">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}