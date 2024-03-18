import React, { useState, useEffect } from 'react'
import Enquiry from '../enquiry/Enquiry'
import Aos from 'aos'
import "aos/dist/aos.css"

const EnzymeCard = ({img, head, para, listone, listtwo, listthree, listfour}) => {
    
    const [showModal, setShowModal] = useState(false)
    useEffect(()=>{
        Aos.init()
      },[])
  return (
    <>
        <div className="w-[80%] m-auto grid grid-cols-1 lg:grid-cols-2 bg-gray-100 shadow mt-8 font-philosopher p-4 rounded-xl">
            <div className="flex justify-start items-center p-3" data-aos="fade-right" data-aos-duration="700">
                <div className="lg:m-auto">
                    <img src={img} alt="img" className='rounded-xl p-2' />
                </div>
            </div>
            <div className="lg:m-auto p-3" data-aos="fade-left" data-aos-duration="700">
                <h2 className="text-3xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500 text-left pb-2">{head}</h2>
                <div className="w-24 h-1 bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500 mt-2 mb-8 "></div>
                <p className='md:text-justify pb-4'>{para}</p>
                <ul>
                    <li>{listone}</li>
                    <li>{listtwo}</li>
                    <li>{listthree}</li>
                    <li>{listfour}</li>
                </ul>
            </div>
        </div>
        <div className="flex py-4 space-x-4 justify-center">
                <button onClick={() => setShowModal(true)} className="bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    Enquire Now
                </button>
            </div>
            {showModal && <Enquiry onClose={() => setShowModal(false)} />}
            
    </>
  )
}

export default EnzymeCard