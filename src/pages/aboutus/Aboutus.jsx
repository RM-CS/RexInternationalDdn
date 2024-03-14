import React from 'react'
import Image1 from '../../assets/About.png'
import Image2 from '../../assets/AboutContent01.png'
import Image3 from '../../assets/AboutContent02.png'

const Aboutus = () => {
    return (
        <>
            <div className='h-auto w-100 font-philosopher flex flex-wrap flex-col items-center text-center bg-slate-200'>
                <div className='w-full h-auto flex flex-wrap flex-col'>
                    <img src={Image1} alt="" width={"100%"} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 flex justify-end items-center" data-aos="fade-up">
                        <div className="pl-12 pr-12 md:pl-12">
                            <h2 className="text-2xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-green-900 via-green-600 to-green-500 text-left">
                                Who are Rex International?
                            </h2>
                            <div class="w-24 h-1 bg-gradient-to-l from-green-900 via-green-600 to-green-500 mt-2 mb-8 "></div>          
                            <p className="mt-2 text-justify lg:text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat temporibus nostrum earum iure? Atque, voluptatibus. Porro eligendi accusamus soluta, accusantium, consectetur quisquam, iusto nostrum in numquam inventore quibusdam modi!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat temporibus nostrum earum iure? Atque, voluptatibus. Porro eligendi accusamus soluta, accusantium, consectetur quisquam, iusto nostrum in numquam inventore quibusdam modi!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat temporibus nostrum earum iure? Atque, voluptatibus. Porro eligendi accusamus soluta, accusantium, consectetur quisquam, iusto nostrum in numquam inventore quibusdam modi!
                            </p>
                        </div>                       
                    </div>
                    <div className="p-12 flex justify-start items-center" data-aos="fade-up">
                        <img className="rounded-3xl  " src={Image2} alt="img" />
                    </div>

                </div>               
                <div className="grid grid-cols-1 md:grid-cols-2">
  <div className="p-6 flex justify-end items-center order-last md:order-first" data-aos="fade-up">
    <img className="rounded-full pl-6 " src={Image3} alt="img" />
  </div>
  <div className="p-12 flex justify-start items-center md:order-last" data-aos="fade-up">
    <div className="pl-12 pr-12 md:pl-12">
      <h2 className="text-2xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-green-900 via-green-600 to-green-500 text-left">
        Why to choose Rex International brand?
      </h2>
      <div class="w-24 h-1 bg-gradient-to-l from-green-900 via-green-600 to-green-500 mt-2 mb-8 "></div>
      <p className="mt-2 text-justify lg:text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat temporibus nostrum earum iure? Atque, voluptatibus. Porro eligendi accusamus soluta, accusantium, consectetur quisquam, iusto nostrum in numquam inventore quibusdam modi!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat temporibus nostrum earum iure? Atque, voluptatibus. Porro eligendi accusamus soluta, accusantium, consectetur quisquam, iusto nostrum in numquam inventore quibusdam modi!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat temporibus nostrum earum iure? Atque, voluptatibus. Porro eligendi accusamus soluta, accusantium, consectetur quisquam, iusto nostrum in numquam inventore quibusdam modi!
      </p>
    </div>
  </div>
</div>
                    
            </div>
        </>
    )
}

export default Aboutus