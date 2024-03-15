import React from 'react'
import Kitchencare from '../../components/kitchencare/Kitchencare'

const Kitchencarepage = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-wrap flex-col items-center bg-slate-100 pt-10">
        <p className="text-2xl md:text-4xl font-bold leading-tight pb-2 text-transparent bg-clip-text bg-gradient-to-l from-green-900 via-green-600 to-green-500 text-left font-philosopher">Kitchen Care</p>
        <div class="w-24 h-1 bg-gradient-to-l from-green-900 via-green-600 to-green-500 mt-2 mb-8 "></div>
      </div>
      <Kitchencare />
  </>
  )
}

export default Kitchencarepage