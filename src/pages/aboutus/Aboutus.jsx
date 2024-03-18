import React from 'react'
import Image1 from '../../assets/About.png'
import Image2 from '../../assets/AboutContent01.png'
import CardOne from '../../components/card/CardOne'
import SlideCarousel from '../../components/carousel/SlideCarousel'

const Aboutus = () => {
    return (
        <>
            <div className='h-auto w-100 font-philosopher flex flex-wrap flex-col items-center text-center'>
                <div className='w-full h-auto flex flex-wrap flex-col'>
                    <img src={Image1} alt="" width={"100%"} />
                </div>
               <CardOne Ques="Who are Rex International? " Ans="Rex International is a leading provider of sustainable solutions in Dehradun, specializing in environmentally friendly green chemicals, housekeeping, sanitization, and paper product dispensing systems. With a commitment to promoting environmental stewardship and community well-being, we offer innovative products and services tailored to meet the diverse needs of our customers. Our dedicated team is passionate about delivering exceptional results while minimizing our impact on the planet, making Rex International a trusted partner in creating cleaner, healthier environments." Img={Image2} />
                    
            </div>
            <div>
                <div className='w-full h-auto flex flex-wrap flex-col items-center pt-10 font-philosopher'>
                    <h2 className="text-3xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500 text-left">Our Partners</h2>
                    <div className="w-24 h-1 bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500 mt-2 "></div>
                </div>            
                <SlideCarousel />
            </div>
        </>
    )
}

export default Aboutus