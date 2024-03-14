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
          <p className='text-green-800 font-bold text-3xl md:text-4xl text-center '>Trending Products</p>
          <div className='w-36 h-1 border-b-4 border-green-400 mt-2 rounded-2xl md:mt-4 mb-12'></div>
        </div>
        <ProductCard />
    </div>
    <div>
        <div className="w-full h-auto flex flex-wrap flex-col items-center bg-slate-100">
          <p className='text-green-800 font-bold text-3xl md:text-4xl text-center '>Kitchen Care</p>
          <div className='w-36 h-1 border-b-4 border-green-400 mt-2 rounded-2xl md:mt-4 mb-12'></div>
        </div>
        <ProductCard />
    </div>
    <div>
        <img src={Image3} alt="" width={"100%"} />
    </div>    
    <div>
    <div className="w-full h-auto flex flex-wrap flex-col items-center bg-slate-100 pt-12">
          <p className='text-green-800 font-bold text-3xl md:text-4xl text-center '>Multi-Purpose Cleaner With Enzyme</p>
          <div className='w-36 h-1 border-b-4 border-green-400 mt-2 rounded-2xl md:mt-4 mb-12'></div>
        </div>
        <ProductCard />
    </div>
    <div>
        <div className="w-full h-auto flex flex-wrap flex-col items-center bg-slate-100">
          <p className='text-green-800 font-bold text-3xl md:text-4xl text-center '>Dish Wash With Enzyme</p>
          <div className='w-36 h-1 border-b-4 border-green-400 mt-2 rounded-2xl md:mt-4 mb-12'></div>
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