import React from 'react'

const Banner = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-between bg-sky-100 px-6 py-4 md:px-36 md:py-24 rounded-lg shadow-md">
      {/* Text Section */}
      <h1 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4 md:mb-0">
        Let Suppliers <span className='relative'>Find You <div className='absolute top-8 left-0 w-24 h-[3px] bg-[#EB7150]'></div></span>
        <span className="block md:inline text-orange-500 underline"></span>
      </h1>

      {/* Button Section */}
      <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-10 py-3 rounded-md">
        Get Verified
      </button>
    </div>
  )
}

export default Banner