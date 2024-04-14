import { Facebook } from '@mui/icons-material'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import React, { useState } from 'react'
import WhatsAppButton from './WhatsAppButton'

const Enquiryformdisplay = () => {
    const [open, setOpen] = useState(false)
    // const [linkedInText, setLinkedInText] = useState(false)
    const [fbtext, setFbText] = useState(false)
    const [enquiry, setEnquiry] = useState({
        name:"",
        business_name:"",
        designation:"",
        mob_num:"",
        email:"",
        message:""
      })
    
    const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value
    setEnquiry({
        ...enquiry,
        [name]: value
    });
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
          const response = await fetch(`http://localhost:4004/api/businessform/enquiry`, {
            method: "POST",
            headers: {
              'Content-Type':"application/json",
            },
            body:JSON.stringify(enquiry),
          });
          console.log(response);
          
          if(response.ok){
            setEnquiry({
                name:"",
                business_name:"",
                designation:"",
                mob_num:"",
                email:"",
                message:""
            })
          }
        } catch (error) {
          console.log(error);
        }
      }
    
    const showLeft = () => {
        setOpen(!open)
        // setLinkedInText(false)
        setFbText(false)
    }

    // const linkdedinShow = () => {
    //     setLinkedInText(!linkedInText)
    //     setOpen(false)
    //     setFbText(false)
    // }

    const fbShow = () => {        
        setFbText(!fbtext)
        setOpen(false)
        // setLinkedInText(false)
    }
    
  return (
    <>
         <div className='md:flex md:items-right md:justify-end top-[-500px] gap-[15px] relative z-40 hidden' >
            <p className={`overflow-hidden fixed px-2 py-2 cursor-pointer text-white bottom-24 uppercase bg-[#14b7b1] hover:bg-[#14b7b1]/80 font-semibold ${open ? 'rounded-0' : 'rounded-l-md'}`} onClick={showLeft}><HeadsetMicIcon /></p>
                {
                    open &&
                    <div className='bg-[#14b7b1]/80 rounded-md flex flex-col gap-5 items-center w-96 mr-12 top-[180px] fixed '>
                        <form className="w-full p-6 text-left" onSubmit={handleSubmit}>
                            <div className="flex flex-wrap mb-2">
                                <div className="w-full">
                                    <h1 className='text-white text-center text-[16px] uppercase font-semibold'>Enquire Now</h1>
                                </div>
                                <div className="w-24 h-[2px] m-auto bg-white mt-2 mb-4 "></div>
                            </div>
                            
                            <div className="flex flex-wrap mb-2">
                                <div className="w-full">                      
                                    <input className="appearance-none text-[14px] block w-full bg-slate-200 text-gray-700 border border-gray-200 rounded-full py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" autoComplete='off' value={enquiry.name} onChange={handleInput} required name='name' placeholder="Your Name*" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full px-3">                        
                                <input className="appearance-none text-[14px] block w-full bg-slate-200 text-gray-700 border border-gray-200 rounded-full py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-b_name" type="text" name='business_name' autoComplete='off' value={enquiry.business_name} onChange={handleInput} required placeholder="Business Name*" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full px-3">
                                <input className="appearance-none text-[14px] block w-full bg-slate-200 text-gray-700 border border-gray-200 rounded-full py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-designation" type="text" name='designation' autoComplete='off' value={enquiry.designation} onChange={handleInput} required placeholder="Your Designation*" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full px-3">
                            
                                <input className="appearance-none text-[14px] block w-full bg-slate-200 text-gray-700 border border-gray-200 rounded-full py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-number" type="text" name='mob_num' autoComplete='off' value={enquiry.mob_num} onChange={handleInput} required placeholder="Your Contact Number*" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full px-3">
                                <input className="appearance-none text-[14px] block w-full bg-slate-200 text-gray-700 border border-gray-200 rounded-full py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" name='email' autoComplete='off' value={enquiry.email} onChange={handleInput} required placeholder="Your Email*" />
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full px-3">
                                
                                <textarea className="appearance-none text-[14px] block w-full bg-slate-200 text-gray-700 border border-gray-200 rounded-xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-textarea" type="text" rows="4" placeholder="Type your requirement here...*" name='message' autoComplete='off' value={enquiry.message} onChange={handleInput} required />
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-full flex justify-center">
                                    <button
                                    className="relative px-6 py-2 uppercase text-blue-100 hover:text-blue-700 font-semibold rounded-md bg-blue-500 isolation-auto z-10 border-2 border-blue-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-300 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 text-[14px]"
                                >
                                    Submit
                                </button>
                                </div>
                            </div>
                        </form>
                    </div>
                }
                <p className={`overflow-hidden fixed px-2 py-2 cursor-pointer bottom-3 text-white uppercase bg-blue-400 hover:bg-blue-400/80 font-semibold ${fbtext ? 'rounded-0' : 'rounded-l-md'} `} onClick={fbShow}><Facebook /></p>
           {
                fbtext &&
                <div className='mr-10 bottom-5 fixed'>
                <a href="https://www.facebook.com/profile.php?id=100080300559808" target='_blank' rel="noreferrer"  className='text-[15px] text-white bg-blue-400 px-2 py-2 rounded-tl-md rounded-bl-md'>Facebook</a>

                </div>
           }
            {/* <p className={`overflow-hidden pl-1 p-1 fixed pr-1 top-[87%]  ${linkedInText ? 'rounded-0' : 'rounded-l-md'} cursor-pointer text-white uppercase bg-blue-800`} onClick={linkdedinShow}><LinkedIn /></p>
           {
                linkedInText &&
                <div className='mr-8 top-[87%] fixed'>
                    <h2 className='text-[14px] text-white bg-blue-800 px-2 py-[0.4rem] rounded-tl-md rounded-bl-md'>LinkedIn</h2>
                </div>
           }            */}
            <WhatsAppButton />
         </div>
    </>
  )
}

export default Enquiryformdisplay