import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";

const CardOne = ({Ques, Ans, Img}) => {
    useEffect(()=>{
        Aos.init()
      },[])
    
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-start items-center">
                <div className="p-12 md:pl-48">
                    <h2 className="text-3xl uppercase lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-[#14b7b1] to-[#14b7b1]/50 text-left">
                        {Ques}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-[#14b7b1] to-[#14b7b1]/50 mt-2 mb-8 "></div>
                    <p className="mt-2 text-[18px]  text-left lg:text-justify">
                        {Ans}
                    </p>
                </div>
            </div>
            <div className="p-12 md:pr-12 flex justify-start items-center" >
                <img className="rounded-3xl" src={Img} alt="img" />
            </div>
        </div>
        </>
    )
}

export default CardOne