import React from 'react'

const SlideCarousel = () => {
    
    const Image1 = "https://narayanienterprises.in/wp-content/uploads/elementor/thumbs/sayaji-q77vm00999dxk12m2u863ffruntb4mh6ksj3qij51c.jpg"
    const Image2 = "https://narayanienterprises.in/wp-content/uploads/elementor/thumbs/jayp-px4v5mx1575238t5j132ch01ous24hkcee3jr4qe68.jpg"
    const Image3 = "https://narayanienterprises.in/wp-content/uploads/elementor/thumbs/Untitled-design-2022-07-14T144856.099-px4v5sk2a7cs0wkym3itrfkt9609eo6qf60gmsi14w.png"
    const Image4 = "https://narayanienterprises.in/wp-content/uploads/elementor/thumbs/aloha-px4v5l1crj2hg0vvu09t7hh4i31bp3cvq4skskt6io.jpg"
    const Image5 = "https://narayanienterprises.in/wp-content/uploads/elementor/thumbs/savoylogo-px4v5pqjpp8x22p22kay1yafh0e5rkvjes206ym7nk.jpg"
    const Image6 = "https://narayanienterprises.in/wp-content/uploads/elementor/thumbs/fortunelogo-px4v5lz6yd3rrmuioiofrz8l3gwowsgm29g29urscg.jpg"
    const Image7 = "https://narayanienterprises.in/wp-content/uploads/elementor/thumbs/kasiga-px4v5mx1575238t5j132ch01ous24hkcee3jr4qe68.jpg"
    const Image8 = "https://narayanienterprises.in/wp-content/uploads/elementor/thumbs/royal-px4v5pqjpp8x22p22kay1yafh0e5rkvjes206ym7nk.jpg"
    const Image9 = "https://narayanienterprises.in/wp-content/uploads/elementor/thumbs/sarovarlg-px4v5pqjpp8x22p22kay1yafh0e5rkvjes206ym7nk.jpg"
    const Image10 = "https://cizar.in/wp-content/uploads/2024/02/cropped-cizr-logo.webp"
      
    return (

    <>
        <div className='flex overflow-hidden space-x-12 group mx-40 my-12'>
            <div className='flex space-x-16 h-20 animate-loop-scroll group-hover:paused'>
                <img src={Image2} alt="image" className='max-w-none' />
                <img src={Image1} alt="image" className='max-w-none' />
                <img src={Image4} alt="image" className='max-w-none' />
                <img src={Image3} alt="image" className='max-w-none' />
                <img src={Image5} alt="image" className='max-w-none' />
                <img src={Image6} alt="image" className='max-w-none' />
                <img src={Image7} alt="image" className='max-w-none' />
                <img src={Image8} alt="image" className='max-w-none' />
                <img src={Image9} alt="image" className='max-w-none' />
                <img src={Image10} alt="image" className='max-w-none' />
            </div>
            <div className='flex space-x-16 h-20 animate-loop-scroll group-hover:paused' aria-hidden='true'>
                <img src={Image2} alt="image" className='max-w-none' />
                <img src={Image1} alt="image" className='max-w-none' />
                <img src={Image4} alt="image" className='max-w-none' />
                <img src={Image3} alt="image" className='max-w-none' />
                <img src={Image5} alt="image" className='max-w-none' />
                <img src={Image6} alt="image" className='max-w-none' />
                <img src={Image7} alt="image" className='max-w-none' />
                <img src={Image8} alt="image" className='max-w-none' />
                <img src={Image9} alt="image" className='max-w-none' />
                <img src={Image10} alt="image" className='max-w-none' />
            </div>

        </div>
    </>
  )
}

export default SlideCarousel