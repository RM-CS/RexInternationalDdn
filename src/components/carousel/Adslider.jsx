import React from 'react'
import Image from '../../assets/AdBanner.png'

const Adslider = () => {
  return (
    <>
        <div className='box-border overflow-hidden py-18 space-x-52 bg-[#67a8ff]'>
            <div className='flex space-x-16 animate-loop-scroll hover:paused'>
                <img src={Image} alt="" width={"100%"} />        
            </div>
        </div>
    </>
  )
}

export default Adslider