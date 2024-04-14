import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import category from '../../category'
import Aos from 'aos'
import "aos/dist/aos.css"

const CardFour = () => {
    const HouseKeeping = category["HouseKeeping"];

    useEffect(()=>{
        Aos.init()
      },[])

  return (
    <>
    <div className='h-auto'>
        <div className='w-full flex flex-wrap flex-col items-center text-center p-10 bg-slate-100' data-aos="fade-zoom-out" data-aos-duration="700">
        
        <div className="w-[80%] flex flex-wrap justify-around">
        {
            HouseKeeping && HouseKeeping.map((data, index)=> (
                <div key={index} className="w-64 flex flex-col items-center mb-12 shadow-md bg-white border-slate-400 border-2 rounded-xl p-2">
                                <button>
                                    <img className="rounded-t-lg" src={data.image} alt="productimage" />
                                </button>
                                <div className="px-5 pb-5">
                                    <Link to="/">
                                        <h5 className="text-[18px] py-2 font-semibold tracking-tight text-blue-900">{data.name}</h5>
                                    </Link>
                                    <p className='text-[12px] text-left'>{data.desc}</p>
                                </div>
                                {/* <div className="flex flex-col justify-end h-full">
                                    <div className="flex place-items-baseline">
                                        <Link to="/contact" className="bg-blue-950 text-white px-3 py-2 rounded-xl mb-2 hover:bg-blue-800 duration-100">
                                            Enquire Now
                                        </Link>
                                    </div>
                                </div> */}
            </div>
            ))
        }       
    </div>
        </div>

    </div>
   
    </>
  )
}

export default CardFour