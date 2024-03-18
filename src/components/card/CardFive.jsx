import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import category from '../../category'
import Enquiry from '../enquiry/Enquiry'
import Aos from 'aos'
import "aos/dist/aos.css"

const CardFive = () => {
    const PaperProduct = category["PaperProduct"];

    const [showModal, setShowModal] = useState(false)
    useEffect(()=>{
        Aos.init()
      },[])
  return (
    <>
        <div className='h-auto w-full font-philosopher flex flex-wrap flex-col items-center text-center p-10 bg-slate-100 ' data-aos="fade-zoom-out" data-aos-duration="700">
        
        <div className="w-[80%] h-auto flex flex-wrap justify-around">
        {
            PaperProduct && PaperProduct.map((data, index)=> (
        <div key={index} className="w-64 flex flex-col items-center mb-12 shadow-md bg-white rounded-xl p-2">
            <button>
                <img className="p-8 rounded-t-lg" src={data.image} alt="productimage" />
            </button>
            <div className="px-5 pb-5">
                <Link to="/">
                    <h5 className="text-xl font-semibold tracking-tight text-blue-600">{data.name}</h5>
                </Link>
            </div>
            <div className="flex py-4 space-x-4 justify-center">
                <button onClick={() => setShowModal(true)} className="bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    Enquire Now
                </button>
            </div>
            {showModal && <Enquiry onClose={() => setShowModal(false)} />}
            </div>
            ))
        } 
       
        </div>
    </div>
    </>
  )
}

export default CardFive