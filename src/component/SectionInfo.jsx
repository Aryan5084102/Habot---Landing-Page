import React from 'react'
import img4 from '../img/checked (2) 1.png'

const SectionInfo = ({ leftTitle, rightTitle, listItems }) => {
  return (
    <div className=" p-6 ">
    {/* Header Section */}
    <div className="flex justify-evenly items-center mb-6 relative">
      <h3 className=" text-xl cursor-pointer font-semibold text-[#EB7150] px-4 relative z-10 ">
        {leftTitle}
      <div className='absolute top-8 left-0 w-28 h-[1px] bg-[#EB7150]'></div>
      </h3>
      <h3 className="text-xl font-semibold cursor-pointer hover:text-[#EB7150] px-4 relative z-10 ">
        {rightTitle}
      </h3>
    </div>

    {/* List Section */}
    <ul className="space-y-4">
      {listItems.map((item, index) => (
        <li key={index} className="flex items-center">
        <img src={img4} className='mr-3' />
          <p className="text-white">
            <span className="font-medium">{item}</span>
          </p>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default SectionInfo