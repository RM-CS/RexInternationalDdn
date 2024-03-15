import React from 'react'
import KitchenImage from "../../assets/kitchen.png"
import HomeImage from "../../assets/homecare.png"
import MultiPurpose from "../../assets/Multipurpose.png"
import Dish from "../../assets/dishwash.png"
import { Link } from 'react-router-dom'


const Category = () => {
  return (
    <>
      <div className='h-auto w-full font-philosopher flex flex-wrap flex-col items-center text-center p-10'>
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <p className="text-2xl md:text-4xl font-bold leading-tight pb-2 text-transparent bg-clip-text bg-gradient-to-l from-green-900 via-green-600 to-green-500 text-left">Categories</p>
          <div class="w-24 h-1 bg-gradient-to-l from-green-900 via-green-600 to-green-500 mt-2 mb-8 "></div>
        </div>
        <div className="w-[90%] h-[20%] flex flex-wrap justify-around ">
          <Link className='w-64 flex flex-col items-center mb-12 border-2 rounded-xl p-2 bg-green-300' to="/">
            <div>
              <img src={KitchenImage} alt="" width={"100%"} />
              
              <p className='font-bold text-xl uppercase text-green-800'>Kitchen Care</p>
            </div></Link>
          <Link className='w-64 flex flex-col items-center mb-12 border-2 rounded-xl p-2 bg-green-300' to="/">
            <div>
              <img src={HomeImage} alt="" />
              <p className='font-bold text-xl uppercase text-green-800'>Home Care</p>
            </div>
          </Link>
          <Link className='w-64 flex flex-col items-center mb-12 border-2 rounded-xl p-2 bg-green-300' to="/">
            <div>
              <img src={MultiPurpose} alt="" />
              <p className='font-bold text-xl uppercase text-green-800'>Multi-Purpose Cleaner With Enzyme</p>
            </div>
            </Link>
          <Link className='w-64 flex flex-col items-center mb-12 border-2 rounded-xl p-2 bg-green-300' to="/">
            <div>
              <img src={Dish} alt="" />
              <p className='font-bold text-xl uppercase text-green-800'>Dish Wash With Enzyme</p>
            </div></Link>
        </div>


      </div>
    </>
  )
}

export default Category