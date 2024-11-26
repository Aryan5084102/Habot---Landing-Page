import React from 'react'
import img3 from '../img/Group 32.png'
import SectionInfo from './SectionInfo';

const BuyerSupplierSection = () => {
    const buyerSupplierItems = [
        'Post your requirements.',
        'Sit back for multiple suppliers to contact you.',
        'Choose among the suppliers based on the ratings and reviews.',
      ];
    return (
        <section className="bg-white text-white py-12 px-4">
            <div className="container  rounded-md bg-[#072F57] mx-auto grid grid-cols-1 md:grid-cols-2 px-3 py-12 gap-8 items-center">
                {/* Video Section */}
                <div className="relative flex justify-center">
                    {/* Main Image */}
                    <img
                        className="rounded-lg shadow-lg w-full object-cover md:w-4/5 h-64"
                        src="https://s3-alpha-sig.figma.com/img/2909/031e/3307f64812ef70cd9d8e886864fad468?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oCzfDb8G3gkF29yfdEv2VecC7w3ohfCnCeb3Zl5gPoerFrUN1Z1QEEXwi-wf03IfvyyLyUi7byTaVZVZt798hCnBoP0UN8-SvEgYRl-QAnijuH3TWu15jw9XfVKmhILcr5V5aFOEoysLbXj5UBc0-QRAo1ZWlXHC~smXgpLdlaEW80Phc976rEJ0NwjBRqfKmsXQdml5s-qM4FT5jq1somveWCmf0yIRYaXYHv9-g5L-J~Gd3oKQr3YeEtw3IYdhf9fs34OqURaNN20qti6etWwWo2KltT6g9LVIh8CzXC7OJJWdCXh4pYUd2rof1sbOnHcZgJrPThREKoZ3pxL9fQ__"
                        alt="Video Placeholder"
                    />

                    {/* YouTube Icon */}
                    <img
                        src={img3}
                        className="w-16 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        alt="YouTube Play Icon"
                    />
                </div>

                {/* Buyer and Supplier Info Section */}
                <div className="p-8 ">
                    {/* Example Usage */}
                    <SectionInfo
                        leftTitle="Buyer"
                        rightTitle="Supplier"
                        listItems={buyerSupplierItems}
                    />
                </div>
                {/* <div>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold border-b-2 border-red-500 inline-block">
                            Buyer
                        </h3>
                        <h3 className="text-xl font-semibold text-gray-300">Supplier</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">✔</span>
                            Post your requirements.
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">✔</span>
                            Sit back for multiple suppliers to contact you.
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">✔</span>
                            Choose among the suppliers based on the ratings and reviews.
                        </li>
                    </ul>
                </div> */}
            </div>
        </section>
    )
}

export default BuyerSupplierSection