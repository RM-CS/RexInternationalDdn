import { X } from 'lucide-react'
import React from 'react'

const Enquiry = ({onClose}) => {
  return (
    <>
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-[260]'>
        <div className='mt-2 flex flex-col gap-5 text-white font-philosopher w-[40%]  '>
            <button onClick={onClose} className="place-self-end text-blue-700 font-extrabold hover:text-red-400 bg-white p-2 rounded-full"><X sixe={30}/></button>
            <div className='bg-white rounded-xl py-6 flex flex-col gap-5 items-center w-full'>
                <form className="w-full p-6 text-left">
                <div className="flex flex-wrap -mx-2 mb-2">
                        <div className="w-full">
                            <h1 className='text-blue-700 text-center text-3xl uppercase font-semibold '>Enquire Now</h1>
                        </div>
                        <div className="w-24 h-1 m-auto bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500 mt-2 mb-4 "></div>
                    </div>
                    
                    <div className="flex flex-wrap  mb-2">
                        <div className="w-full">
                       
                        <input className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded-full py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="Your Name*" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">                        
                        <input className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded-full py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-b_name" type="text" placeholder="Business Name*" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                        <input className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded-full py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-designation" type="text" placeholder="Your Designation*" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                       
                        <input className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded-full py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-number" type="text" placeholder="Your Contact Number*" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                        <input className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded-full py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="Your Email*" />
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap -mx-3 mb-3">
                        <div className="w-full px-3">
                        
                        <textarea className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded-xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-textarea" type="text" rows="4" placeholder="Type your requirement here...*" />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full flex justify-center">
                            <button
                            className="relative px-8 py-2 uppercase text-blue-100 hover:text-blue-700 font-semibold rounded-md bg-blue-500 isolation-auto z-10 border-2 border-blue-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-300 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
                        >
                            Submit
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

        

    </>
  )
}

export default Enquiry