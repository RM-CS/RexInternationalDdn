import React, { useEffect, useState } from 'react'

import Image1 from '../../assets/Contactus.png'
import Navbar from '../../components/header/Navbar'
import Footer from '../../components/footer/Footer'
import Contact from './Contact'
import SpinnerLoader from '../../components/spinnerLoader/SpinnerLoader'

const ContactPage = () => {
  const [data, setData] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setData(true)
    },1000)
  },[])
  return (
    <>
    {
    data ? (
      <>
         <div>
      <Navbar />
    </div>
      <div className='w-full h-auto flex flex-wrap flex-col mt-36'>
        <img src={Image1} alt="contactusimage" width={"100%"} />
      </div>
      <div style={{height:"100vh"}}>
        <Contact />

      </div>
      <div>
        <Footer />
      </div>
      </>
      ):(
      <div>
        <SpinnerLoader />
      </div>
    )
   }
    </>
  )
}

export default ContactPage