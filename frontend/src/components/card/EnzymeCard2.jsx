import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import SpinnerLoader from '../spinnerLoader/SpinnerLoader'

const EnzymeCard2 = ({Ques, Ans, Img}) => {
    
    const [data, setData] = useState(false);

    useEffect(()=>{
      setTimeout(()=>{
        setData(true)
      },1000)
    },[])
  
    useEffect(()=>{
        Aos.init()
      },[])
  return (
    <>
        {
        data ? (
          <>

            <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-start items-center">
                <div className="pl-28  flex justify-center items-center">
                    <img className="rounded-3xl" src={Img} alt="img" width={"70%"} />
                </div>
            </div>
            <div className="pr-44">
                    <h2 className="text-3xl uppercase lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-[#14b7b1] to-[#14b7b1]/50 text-left">
                        {Ques}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-[#14b7b1] to-[#14b7b1]/50 mt-2 mb-8 "></div>
                    <p className="mt-2 text-[18px]  text-left lg:text-justify">
                        {Ans}
                    </p>
            </div>
        </div>
            
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

export default EnzymeCard2