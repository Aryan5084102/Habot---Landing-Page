import React from 'react'
import img5 from '../img/Main → Section → Section.png'
import img6 from '../img/Main → Section → Section (1).png'
import img7 from '../img/Main → Section → Section (2).png'
import img8 from '../img/Main → Section → Section (3).png'
import img9 from '../img/Main → Section → Section (4).png'
import img10 from '../img/Main → Section → Section (5).png'


const Works = () => {
    const images = [img5, img6, img7, img8, img9, img10];
  return (
    <section className='md:px-36 md:py-10 my-5 flex justify-center items-center flex-col'> 
        <div className='text-3xl font-bold mb-4'>How it works?</div>
        <div className='max-w-4xl mb-8 text-center'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</div>
        <div className='flex flex-wrap max-w-4xl items-center justify-center'>
            {images.map((img, index) =>(
            <img 
                src={img}
                key={index}
                className='w-60 h-42'
             />

            ))}
        </div>
    </section>
  )
}

export default Works