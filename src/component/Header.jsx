import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="bg-white shadow-md sticky top-0 left-0 z-10">
            <div className="container  mx-auto px-4 py-4 flex justify-between items-center">
                <img
                    src='https://s3-alpha-sig.figma.com/img/c1e1/45c4/467f6c3f60c323a607803f6d0dbc78cd?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LwGNvP9grakp8xukjFGzQ8e4bX0AtkaicxS8OEqaWy35bcko921VRolDehVE95Zn-5MZMVIUvhO4cFu7F~CHafsaR3Y~4y8J7pPLpVep4U49YqynFwI1JOPuUBp~obXaCbEaANwEF3dNPWEGFsbwqcSAeWoHwY14MW~qT5GdlK6JlMfR7-~G7bXdGSNT5tuQAk5WdYjNvXk5PAVvBDh8dkRWH9Mgkvb8hxAiAzNh9kKP5WZhSmhthIF1BYUEaL3-kE1M-LhfPs-orVzvAAB0jpKgGdTXUGLu41ft1an~JA8dBRin7cGQnwSX-u3dzVvK8-i~xWQLIPLa0nlh3gUo-A__'
                    className='w-24 h-16'
                 />
                <nav className="hidden  items-center md:flex space-x-8">
                    <a href="#" className="text-gray-500 ">Find Suppliers</a>
                    <a href="#" className="text-gray-500 flex items-center gap-x-1 ">Find Service Tags <span><IoIosArrowDown /></span> </a>
                    <button className="text-green-700 font-semibold border border-green-700 bg-white px-7 py-2 rounded ">
                        Login / Sign Up
                    </button>
                </nav>
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Find Suppliers</a>
                    <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Find Service Tags</a>
                    <button className="block w-full bg-green-500 text-white px-4 py-2 mt-2 rounded hover:bg-green-600">
                        Login / Sign Up
                    </button>
                </div>
            )}
        </header>
    )
}

export default Header