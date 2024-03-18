import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import category from '../../category'
import Enquiry from '../enquiry/Enquiry'
import Aos from 'aos'
import "aos/dist/aos.css"

const CardThree = () => {
    const EnvironmentFriendly = category["EnvironmentFriendly"];

    const [showModal, setShowModal] = useState(false)

    useEffect(()=>{
        Aos.init()
    },[])

  return (
    <>
        <div className='h-auto w-full font-philosopher flex flex-wrap flex-col items-center text-center p-10 bg-slate-100' data-aos="fade-zoom-out" data-aos-duration="700">
        
        <div className="w-[80%] h-[40%] flex flex-wrap justify-around">
        {
            EnvironmentFriendly && EnvironmentFriendly.map((data, index)=> (
        <div key={index} className="w-64 flex flex-col items-center mb-12 shadow-md bg-white rounded-xl">
            <button className=' '>
                <img className="p-8 rounded-[40px]" src={data.image} alt="productimage" />
            </button>
            <div className="px-5 pb-4">
                <Link to="/">
                    <h5 className="text-xl font-semibold tracking-tight text-blue-600">{data.name}</h5>
                </Link>
            </div>
            <div className="flex justify-center items-end py-4">
                <button onClick={() => setShowModal(true)} className="bg-blue-950 bottom-2 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
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

export default CardThree