import React from 'react'

const SlideCarousel = () => {
    const brand = [
        
            {brandname: "https://www.satol.net/wp-content/uploads/2022/10/satol-Web-logo-n-300x141.png"},
            {brandname: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6u31rhUGCjYnCFX-G6TtYIyIh3UP_glmqP7I0yA-Ehw&s"},
            {brandname: "https://1000logos.net/wp-content/uploads/2021/06/Lifebuoy-logo-768x432.png"},
            {brandname: "https://lh3.googleusercontent.com/vUFgv7jHHVuBq0b9xhKNTqL3jfuMlebwSgz1LFFHTP3wamNiQdxYyEGoXsUazM8py4WLCOD6Mc4HE9GmTTCH1gWKloOF42xUJAisQA=e365-pa-nu-rw-s0"},
            {brandname: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGA4QrvSNR-opR08OCAy3qew-HrKJGRa3jbqu4CrE&s"},
            {brandname: "https://content3.jdmagicbox.com/comp/yamunanagar/g7/9999p1732.1732.161215133349.n3g7/catalogue/york-cellulose-pvt-ltd-yamunanagar-kitchen-towel-manufacturers-0wlv49d15g.jpg"},
            {brandname: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVgPj9Tv1W2UiOI_56OGco_LVQ5a04GYzv3IEC_IY&s"},
            {brandname: "https://cizar.in/wp-content/uploads/2024/02/cropped-cizr-logo.webp"},
    ]   
      
    return (

    <>
        <div className='flex overflow-hidden space-x-12 group mx-40 my-12'>
            <div className='flex space-x-16 h-20 animate-loop-scroll group-hover:paused'>
            {brand.map((value, index)=>
                <img src={value.brandname} alt="" className='max-w-none' key={index} />                
            )}                
            </div>
            <div className='flex space-x-16 h-20 animate-loop-scroll group-hover:paused mb-8 ' aria-hidden='true'>
                {brand.map((value, index)=>
                    <img src={value.brandname} alt="" className='max-w-none' key={index} />                
                )}               
            </div>
        </div>
    </>
  )
}

export default SlideCarousel