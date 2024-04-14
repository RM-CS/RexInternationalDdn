import React, { Suspense, useEffect, useState } from 'react'
import Image1 from '../../assets/AboutContent01.jpg'
// import Image2 from "../../assets/banner04.jpg"
import CardOne from '../../components/card/CardOne'
import CardFour from '../../components/card/CardFour'
import CardFive from '../../components/card/CardFive'
import Accordion from '../../components/accordian/AccordianTab'
import Counter from '../../components/counter/Counter'
import Navbar from '../../components/header/Navbar'
import Footer from '../../components/footer/Footer'
import SlideCarousel from '../../components/carousel/SlideCarousel'
import Contact from '../contactus/Contact'
import SpinnerLoader from '../../components/spinnerLoader/SpinnerLoader'
import Adslider from '../../components/carousel/Adslider'
const Carousel = React.lazy(()=> import("../../components/carousel/Carousel"))

const Home = () => {
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
    {/* Navbar */}
    <div className='md:mb-28'>
      <Navbar />
    </div>
    {/* Banner starts */}
    <div>
      <Suspense fallback={ <div className='flex flex-col items-center justify-center'>
        <img src='../Eclipse-1s-200px.svg' alt='' width={"12%"}/>
        <p>Loading..... Please wait.....</p>
        </div>}> 
        <div>
          <Carousel />

        </div>    
      </Suspense>
    </div>
    {/* Banner ends */}

    {/* About starts */}
    <div className='my-40'>
      <CardOne Ques="Rex International Dehradun" Ans="We, REX INTERNATIONAL DEHRADUN in Dehradun, Uttarakhand are one of the leading and trusted housekeeping and hygiene products providers and distributors in city. We are dealing and providing distribution of leading brands in hygiene industry. We also provide premium ecofriendly products for all your cleaning needs. We have a wide range of housekeeping cleaning products to choose from within the best quality and brands. We offer competitive pricing. We conduct our daily business with honesty, trust worthiness and respect." Img={Image1} />
    </div>
    {/* About ends */}
    {/* Counter starts */}
    <div className='my-40'>
    <Counter />
    </div>
    {/* Counter ends */}
    {/* Products starts */}    
    <div className='-z-50'>
      <div className="w-full h-auto flex flex-wrap flex-col items-center bg-slate-100 pt-12 ">
        <h2 className="text-3xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500 text-left">Our Products</h2>
        <div className="w-24 h-1 bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500 mt-2 mb-8 "></div>
      </div>
      <CardFour />      
    </div>
    {/* Products ends */}

    {/* <div className='mb-6'>
        <img src={Image2} alt="" width={"100%"} />
    </div> */}

    {/* Accordion starts */}    
    <div>
      <div className="w-full h-auto flex flex-wrap flex-col items-center bg-slate-100 pt-12">
        <h2 className="text-3xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500 text-left">Key to our Success</h2>
        <div className="w-24 h-1 bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500 mt-2 mb-8 "></div>
        <Accordion />
      </div>
    </div>
    {/* Accordion ends */}
    
    {/* Products starts */}    
    <div>
      <div className="w-full h-auto flex flex-wrap flex-col items-center bg-slate-100 pt-12">
        <h2 className="text-3xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500 text-left">Other Related Products</h2>
        <div className="w-24 h-1 bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500 mt-2 mb-8 "></div>
      </div>
      <CardFive />
    </div>
    {/* Products ends */}

    {/* Slider start */} 
    <div>
      <Adslider />

    </div> 
    {/* Slider ends */}

    <Contact />
    <Footer />
    </>
        ) : (
          <div>
            <SpinnerLoader />
          </div>
        )
      }      
    </>
  )
}

export default Home