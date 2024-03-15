import { X } from 'lucide-react'
import React from 'react'

const Enquiry = ({onClose}) => {
  return (
    <>
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='mt-2 flex flex-col gap-5 text-white font-philosopher '>
            <button onClick={onClose} className="place-self-end text-red-500 bg-green-100 rounded-full"><X sixe={30}/></button>
            <div className='bg-green-100 rounded-xl px-12 py-12 flex flex-col gap-5 items-center mx-4'>
                <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                            <h1 className='text-green-700 text-center pb-6 text-3xl uppercase font-semibold '>Fill your enquiry</h1>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2 ">
                    
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-green-700  font-bold mb-2 text-x" for="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-slate-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-green-700 text-x font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-green-700 text-x font-bold mb-2" for="grid-email">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="xyz@gmail.com" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-green-700 text-x font-bold mb-2" for="grid-number">
                            Contact Number
                        </label>
                        <input className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-number" type="text" placeholder="(+91) xxxxx xxxxx" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-green-700 text-x font-bold mb-2" for="grid-textarea">
                            Feeback
                        </label>
                        <textarea className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-textarea" type="textarea" placeholder="Type your inquiry or message here..." />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full flex justify-center">
                            <button
                            className="relative px-8 py-2 uppercase text-green-100 hover:text-green-700 font-semibold rounded-md bg-green-500 isolation-auto z-10 border-2 border-green-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-300 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
                        >
                            Send Enquiry
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