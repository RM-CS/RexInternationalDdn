import React from 'react'
import Image1 from "../../assets/faq.png"

const Faq = () => {
  return (
    <div>
          <div className='h-auto w-100 font-philosopher flex flex-wrap flex-col items-center text-center bg-slate-200'>
                <div className='w-full h-auto flex flex-wrap flex-col'>
                    <img src={Image1} alt="" width={"100%"} />
                </div>
            </div>
    </div>
  )
}

export default Faq