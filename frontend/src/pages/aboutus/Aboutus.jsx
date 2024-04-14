import React, { useEffect, useState } from 'react'
import Image1 from '../../assets/About.png'
import Image2 from '../../assets/AboutContent01.jpg'
import CardOne from '../../components/card/CardOne'
import SlideCarousel from '../../components/carousel/SlideCarousel'
import Navbar from '../../components/header/Navbar'
import Footer from '../../components/footer/Footer'
import SpinnerLoader from '../../components/spinnerLoader/SpinnerLoader'

const Aboutus = () => {
    const [data, setData] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setData(true)
    },1000)
  },[])
    return (
        <>
        {
            data ? (
                <>
         <div>
            <Navbar />
            </div>
            <div className='h-auto w-100 flex flex-wrap flex-col items-center text-center mb-6 mt-36'>
                <div className='w-full h-auto flex flex-wrap flex-col'>
                    <img src={Image1} alt="" width={"100%"} />
                </div>
               <CardOne Ques="Rex International Dehradun" Ans="Rex International is a leading provider of sustainable solutions in Dehradun, specializing in environmentally friendly green chemicals, housekeeping, sanitization, and paper product dispensing systems. With a commitment to promoting environmental stewardship and community well-being, we offer innovative products and services tailored to meet the diverse needs of our customers. Our dedicated team is passionate about delivering exceptional results while minimizing our impact on the planet, making Rex International a trusted partner in creating cleaner, healthier environments." Img={Image2} />
                    
            </div>
            <p className='text-xl bg-blue-900 text-white p-4 text-center'>Rex International Dehradun has been a well known and trusted supplier to the Institutional, Hospitality, Industrial Plants, Corporate and Healtcare Sectors, since 2017.</p>
            <div>
                <div className='w-full h-auto flex flex-wrap flex-col items-center pt-10'>
                    <h2 className="text-3xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-[#14b7b1] to-[#14b7b1]/50 text-left">Our Partners</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-[#14b7b1] to-[#14b7b1]/50 mt-2 "></div>
                </div>            
                <SlideCarousel />
            </div>
            <div>
                <Footer />
            </div>
            </>
            ):(
      <div>
        <SpinnerLoader />
      </div>
    )
   }
        </>
    )
}

export default Aboutus