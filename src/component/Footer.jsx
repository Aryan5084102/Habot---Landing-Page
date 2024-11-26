import React from 'react'
import img11 from '../img/Group 4.png'
import img12 from '../img/List.png'

const Footer = () => {
    return (
        <footer className="bg-[#072F57] text-white px-4 py-6 md:px-20 md:py-10 flex flex-col gap-y-6">
            {/* Top Divider */}
            <div className="w-full border border-gray-500"></div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-y-6">
                {/* Left Section */}
                <div className="flex flex-col md:flex-row w-full md:w-2/3 justify-between gap-y-6">
                    {/* Logo and Copyright */}
                    <div className="flex flex-col gap-y-3">
                        <img src={img11} alt="Logo" className="w-36 h-auto" />
                        <p className="font-semibold text-sm md:text-base">
                            &#169; R Singhania
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 gap-y-4 gap-x-6 md:grid-cols-3 md:gap-x-8">
                        <ul>
                            <li className="font-bold mb-2">Company</li>
                            <li className="hover:underline cursor-pointer">About</li>
                            <li className="hover:underline cursor-pointer">FAQ</li>
                        </ul>
                        <ul>
                            <li className="font-bold mb-2">Terms</li>
                            <li className="hover:underline cursor-pointer">Data Privacy</li>
                            <li className="hover:underline cursor-pointer">Terms</li>
                            <li className="hover:underline cursor-pointer">Accessibility</li>
                        </ul>
                        <ul>
                            <li className="font-bold mb-2">Related</li>
                            <li className="hover:underline cursor-pointer">Find Buyer</li>
                            <li className="hover:underline cursor-pointer">Feedback</li>
                        </ul>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex justify-center md:justify-end w-full md:w-auto">
                    <img
                        src={img12}
                        alt="Extra"
                        className="h-9 w-44 object-contain cursor-pointer"
                    />
                </div>
            </div>

            {/* Bottom Divider */}
            <div className="w-full border border-gray-500"></div>
        </footer>
    )
}

export default Footer