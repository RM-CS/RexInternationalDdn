import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import './counter.css' 

const Counter = () => {
    const [counterState, setCounterState] = useState(false)
  return (
    <>
    <div>
        <div className='px-20 py-12 my-14 background'>
            <ScrollTrigger onEnter={()=> setCounterState(true)} onExit={()=> setCounterState(false)}>
                <div className='block md:flex justify-evenly items-center text-center md:px-20 text-[#ff5223]'>
                    <div className='p-4 bg-[#05417c] rounded-xl'>
                        <h2 className='text-5xl font-extrabold'>
                            {
                                counterState &&
                                <CountUp 
                                start={0} 
                                end={500}
                                duration={2.75}></CountUp>
                            }+                        
                        </h2>
                        <p className='py-2 font-medium text-xl'>Satisfied Clients</p>
                    </div>
                    <div className='p-4 bg-[#05417c] rounded-xl'>
                        <h2 className='text-5xl font-extrabold'>
                        {
                                counterState &&
                                <CountUp 
                                start={0} 
                                end={8}
                                duration={2.75}></CountUp>
                            }+  
                            
                        </h2>
                        <p className='py-2 font-medium text-xl'>Years of experience</p>
                    </div>
                    <div className='p-4 bg-[#05417c] rounded-xl'>
                        <h2 className='text-5xl font-extrabold '>
                        {
                                counterState &&
                                <CountUp 
                                start={0} 
                                end={1000}
                                duration={2.75}></CountUp>
                            }+ 
                        </h2>
                        <p className='py-2 font-medium text-xl'>Product Range</p>
                    </div>
                    <div className='p-4 bg-[#05417c] rounded-xl'>
                        <h2 className='text-5xl font-extrabold '>
                            {
                                counterState &&
                                <CountUp 
                                start={0} 
                                end={1200}
                                duration={2.75}></CountUp>
                            }+                        
                        </h2>
                        <p className='py-2 font-medium text-xl'>Complete Projects</p>
                    </div>
                    
                </div>
            </ScrollTrigger>
        </div>
           

    </div>

    </>
  )
}

export default Counter