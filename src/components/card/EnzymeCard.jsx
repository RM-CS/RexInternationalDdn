import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import SpinnerLoader from '../../components/spinnerLoader/SpinnerLoader'

const EnzymeCard = ({Ques, Ans, Img}) => {
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
    {/* <div style={{height:"100vh"}}>
       <div className="flex items-center justify-center pt-10">
            <div className="grid grid-cols-1 gap-7 md:grid-cols-1 lg:grid-cols-3 ">
                <EnzymeCard2 img={Image1} head="Bio-Septic For Septic Tank" para="Cizar Bio Septic is a unique combination of live active enzymes...." />
                <EnzymeCard2 img={Image2} head="Bio-Septic For Septic Tank" para="Cizar Bio Septic is a unique combination of live active enzymes...." />
                <EnzymeCard2 img={Image3} head="Bio-Septic For Septic Tank" para="Cizar Bio Septic is a unique combination of live active enzymes...." />
            </div>        
        </div>    
       <div className="flex items-center justify-center pt-10">
            <div className="grid grid-cols-1 gap-7 md:grid-cols-1 lg:grid-cols-2 ">
                <EnzymeCard2 img={Image1} head="Bio-Septic For Septic Tank" para="Cizar Bio Septic is a unique combination of live active enzymes...." />
                <EnzymeCard2 img={Image2} head="Bio-Septic For Septic Tank" para="Cizar Bio Septic is a unique combination of live active enzymes...." />
            </div>        
        </div>        
    </div> */}

        
        {
        data ? (
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
                <img className="rounded-3xl" src={Img} alt="img" width={"70%"} />
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

export default EnzymeCard