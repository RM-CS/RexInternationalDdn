import React from 'react'
import Category from '../../components/Category/Category'
import ProductCard from '../../components/product/ProductCard'
import Image3 from "../../assets/banner03.png"
import Image4 from "../../assets/banner04.jpg"
import Banner from '../../components/banner/Banner'

const Home = () => {
  return (
    <>
    <div className="bg-slate-200 relative z-[-1]">
        <Banner />
    </div>
    <div>
        <Category />
    </div>
    <div>
        <div className="w-full h-auto flex flex-wrap flex-col items-center bg-slate-100 pt-12 ">
        <p className="text-2xl md:text-4xl font-bold leading-tight pb-2 text-transparent bg-clip-text bg-gradient-to-l from-green-900 via-green-600 to-green-500 text-left font-philosopher">Trending Products</p>
          <div class="w-24 h-1 bg-gradient-to-l from-green-900 via-green-600 to-green-500 mt-2 mb-8 "></div>
        </div>
        <ProductCard />
    </div>
    <div>
        <div className="w-full h-auto flex flex-wrap flex-col items-center bg-slate-100">
          <p className="text-2xl md:text-4xl font-bold leading-tight pb-2 text-transparent bg-clip-text bg-gradient-to-l from-green-900 via-green-600 to-green-500 text-left font-philosopher">Kitchen Care</p>
          <div class="w-24 h-1 bg-gradient-to-l from-green-900 via-green-600 to-green-500 mt-2 mb-8 "></div>
        </div>
        <ProductCard />
    </div>
    <div>
        <img src={Image3} alt="" width={"100%"} />
    </div>    
    <div>
    <div className="w-full h-auto flex flex-wrap flex-col items-center bg-slate-100 pt-12">
          <p className="text-2xl md:text-4xl font-bold leading-tight pb-2 text-transparent bg-clip-text bg-gradient-to-l from-green-900 via-green-600 to-green-500 text-left font-philosopher">Multi-Purpose Cleaner With Enzyme</p>
          <div class="w-24 h-1 bg-gradient-to-l from-green-900 via-green-600 to-green-500 mt-2 mb-8 "></div>          
      </div>
        <ProductCard />
    </div>
    <div>
        <div className="w-full h-auto flex flex-wrap flex-col items-center bg-slate-100">
          <p className="text-2xl md:text-4xl font-bold leading-tight pb-2 text-transparent bg-clip-text bg-gradient-to-l from-green-900 via-green-600 to-green-500 text-left font-philosopher">Dish Wash With Enzyme</p>
          <div class="w-24 h-1 bg-gradient-to-l from-green-900 via-green-600 to-green-500 mt-2 mb-8 "></div>          
          
        </div>
        <ProductCard />
    </div>
    <div>
        <img src={Image4} alt="" width={"100%"}/>
    </div>
    

    </>
  )
}

export default Home