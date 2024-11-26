import React from 'react'
import Button from './Button';
import { GoArrowRight } from "react-icons/go";

const SignupSection = () => {
    const locations = [
        "Abu Dhabi",
        "Dubai",
        "Sharjah & Ajman",
        "Fujairah",
        "Ras Al Khaimah",
        "Umm Al Quwain",
    ];
    return (
        <section className="bg-white py-12 px-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-y-8">
                {/* Heading and Description */}
                <div className="w-full md:w-6/12 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Ready to dive into <span className="text-[#271555]">HABOT?</span>
                    </h2>
                    <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                        Signing up with HABOT opens the door to a world of new opportunities and potential for business growth.
                        Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the
                        first step towards realizing your entrepreneurial dreams.
                    </p>

                    {/* Signup Button */}
                    <div className="text-center md:text-left">
                        <button className="bg-green-700 flex items-center justify-center md:justify-start gap-x-2 text-white px-6 py-3 rounded-md text-sm md:text-base shadow-md hover:bg-green-600">
                            Sign up Today! <GoArrowRight className="text-lg" />
                        </button>
                    </div>
                </div>

                {/* Location Buttons */}
                <div className="w-full md:w-5/12 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {locations.map((location, index) => (
                        <Button key={index} text={location} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SignupSection