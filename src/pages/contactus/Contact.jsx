import React from 'react'
import Image1 from '../../assets/Contactus.png'
import Image2 from '../../assets/contactus.jpg'

const Contact = () => {
  return (
    // <div className='h-auto w-100 flex flex-wrap flex-col items-center text-center bg-slate-200'>
    //             
    //             <div className="grid grid-cols-1 md:grid-cols-2">
    //                 <div className="p-6 flex justify-end items-center" data-aos="fade-up">
    //                     <div className="pl-12 pr-12 md:pl-12">
    //                         <h2 className="text-2xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-green-900 via-green-600 to-green-500 text-left">
    //                             Let us connect!
    //                         </h2>
    //                         <img className="rounded-lg" src={Image2} alt="img" />   

    //                 </div>
    //                 <div className="p-12 flex justify-start items-center" data-aos="fade-up">
    //                     <div className="w-24 h-2 bg-gradient-to-l from-green-900 via-green-600 to-green-500 mt-4 mb-4"></div>
    //                         <p className="mt-2 text-justify lg:text-justify">
    //                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat temporibus nostrum earum iure? Atque, voluptatibus. Porro eligendi accusamus soluta, accusantium, consectetur quisquam, iusto nostrum in numquam inventore quibusdam modi!
    //                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat temporibus nostrum earum iure? Atque, voluptatibus. Porro eligendi accusamus soluta, accusantium, consectetur quisquam, iusto nostrum in numquam inventore quibusdam modi!
    //                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat temporibus nostrum earum iure? Atque, voluptatibus. Porro eligendi accusamus soluta, accusantium, consectetur quisquam, iusto nostrum in numquam inventore quibusdam modi!
    //                         </p>
    //                     </div> 
    //                 </div>

    //             </div>


    //         </div>
    <>

      <div className='w-full h-auto flex flex-wrap flex-col'>
        <img src={Image1} alt="" width={"100%"} />
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" className="max-w-screen-xl mt-6 px-8 font-philosopher grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900 rounded-lg shadow-lg bg-gray-100">
        {/* Content */}

        <div className="flex flex-col justify-between">
          <div>

            <h2 className="text-4xl lg:text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-green-900 via-green-600 to-green-500">
              Let us connect!
              <div className="w-24 h-2 bg-gradient-to-l from-green-900 via-green-600 to-green-500 mt-4 mb-4"></div>

            </h2>
            <div className="p-6 pl-0">
              <img src={Image2} className="rounded-lg" />
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="w-full max-w-lg md:py-24">
          <div className="flex flex-wrap -mx-3 mb-2 ">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-green-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-green-700 text-xs font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-green-700 text-xs font-bold mb-2" for="grid-email">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="xyz@gmail.com" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-green-700 text-xs font-bold mb-2" for="grid-number">
                Contact Number
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-number" type="text" placeholder="78xxx xxxxx" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-green-700 text-xs font-bold mb-2" for="grid-textarea">
                Feeback
              </label>
              <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-textarea" type="textarea" placeholder="Your text here...." />
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full flex justify-center">
                <button
                className="relative px-8 py-2 uppercase text-green-200 hover:text-green-700 font-semibold rounded-md bg-green-500 isolation-auto z-10 border-2 border-green-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-300 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
              >
                Submit
              </button>
            </div>
          </div>
        </form>

      </div>

    </>

  )
}

export default Contact
