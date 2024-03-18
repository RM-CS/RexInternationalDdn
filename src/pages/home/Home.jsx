import React from 'react'
import Image1 from '../../assets/AboutContent01.png'
import Image2 from "../../assets/banner03.png"
import Image3 from "../../assets/banner04.jpg"
import Banner from '../../components/banner/Banner'
import CardOne from '../../components/card/CardOne'
import CardThree from '../../components/card/CardThree'
import CardFour from '../../components/card/CardFour'
import CardFive from '../../components/card/CardFive'
import Accordion from '../../components/accordian/AccordianTab'


const Home = () => {
  return (
    <>
    {/* Banner starts */}
    <div className="bg-slate-200 relative z-[-1]">
      <Banner />
    </div>
    {/* Banner ends */}

    {/* About starts */}
    <div>
      <CardOne Ques="Who are Rex International? " Ans="Rex International is a leading provider of sustainable solutions in Dehradun, specializing in environmentally friendly green chemicals, housekeeping, sanitization, and paper product dispensing systems. With a commitment to promoting environmental stewardship and community well-being, we offer innovative products and services tailored to meet the diverse needs of our customers. Our dedicated team is passionate about delivering exceptional results while minimizing our impact on the planet, making Rex International a trusted partner in creating cleaner, healthier environments." Img={Image1} />
    </div>
    {/* About ends */}

    {/* Products starts */}    
    <div>
      <div className="w-full h-auto flex flex-wrap flex-col items-center bg-slate-100 pt-12 font-philosopher">
        <h2 className="text-3xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500 text-left">Our Products</h2>
        <div className="w-24 h-1 bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500 mt-2 mb-8 "></div>
      </div>
      <CardThree />
    </div>
    {/* Products ends */}


    <div className='mb-6'>
        <img src={Image3} alt="" width={"100%"}/>
    </div>

    {/* Products starts */}    
    <div>
      <div className="w-full h-auto flex flex-wrap flex-col items-center bg-slate-100 pt-12 font-philosopher">
        <h2 className="text-3xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500 text-left">House Keeping And Sanitization</h2>
        <div className="w-24 h-1 bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500 mt-2 mb-8 "></div>
      </div>
      <CardFour />
    </div>
    {/* Products ends */}

    {/* Accordion starts */}    
    <div>
      <div className="w-full h-auto flex flex-wrap flex-col items-center bg-slate-100 pt-12 font-philosopher">
        <h2 className="text-3xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500 text-left">Key to our Success</h2>
        <div className="w-24 h-1 bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500 mt-2 mb-8 "></div>
        <Accordion />
      </div>
    </div>
    {/* Accordion ends */}
    

    {/* Products starts */}    
    <div>
      <div className="w-full h-auto flex flex-wrap flex-col items-center bg-slate-100 pt-12 font-philosopher">
        <h2 className="text-3xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500 text-left">Other Related Products</h2>
        <div className="w-24 h-1 bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500 mt-2 mb-8 "></div>
      </div>
      <CardFive />
    </div>
    {/* Products ends */}

    

    </>
  )
}

export default Home