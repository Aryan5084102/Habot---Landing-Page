import React from 'react'
import img1 from '../img/suitcase 1.jpg'
import img2 from '../img/placeholder 1.jpg'

const HeroSection = () => {
    return (
        <div
            className="relative bg-cover bg-center h-screen flex items-center justify-center"
            style={{
                backgroundImage: "url('https://s3-alpha-sig.figma.com/img/4df9/f396/c8b4ef806609efd227c6672c5dba3716?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N8k~qqGEqOPOGELe8eaIK9DNKww1VvRXDU17NnAINtiSdHNlqpKKlZRqK8afttUELmHhzbcQ4i-RzZ~n2YH5gbXXIdhcyOQw5oovtPVZ2hLmjRiVRyOlEKh6WxZgBif1h3z1wpQ9uyPB5ASSZSKZWWoilOUpgYzJ8C90TkKzKIDfM4QndQzGl6I0naeO-86sWuBgejIaJHqcgJgu-qFH2AJo9RR6Bg6PgRdVN-Tq~FccWbJy~PF~qcADefpcOvJJR-Ncg3oALwkg4Atr0nRBGx13ov7sSqQkSzYLvBz~8AW-CDtTl~ZG~gGxeDRRFtIMjNM7r7ELsTYdpD7HJ771QA__')",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative text-center text-white px-4 max-w-6xl">
                <h2 className="text-4xl shadow-2xl md:text-6xl font-bold mb-4">
                    Are You a Supplier?
                </h2>
                <p className="text-lg md:text-5xl shadow-2xl mb-8">Explore Matching Opportunities.</p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className='bg-white px-6 py-1 flex items-center justify-start gap-x-3 rounded-md'>
                        <img
                            src={img1}
                            className='w-5'
                        />
                        <input
                            type="text"
                            placeholder="Search your required service here"
                            className="w-full md:w-auto text-sm text-black focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div className='bg-white px-4 py-1 flex rounded-md items-center gap-x-3'>
                        <img
                            src={img2}
                            className='w-5'
                        />
                        <input
                            type="text"
                            placeholder="Search your desired location here"
                            className="w-full md:w-auto text-sm text-black focus:ring focus:ring-blue-300"
                        />

                    </div>
                    <button className="bg-green-700 text-white font-semibold px-5 py-2 rounded-md hover:bg-green-700">
                        Search
                    </button>
                </div>
                <p className="mt-4 text-base font-bold">
                    Are you a buyer?{" "} {" "}
                    <a href="#" className="text-white-400 font-normal underline">
                        Click here if you are looking to post a requirement
                    </a>
                </p>
            </div>
        </div>
    )
}

export default HeroSection