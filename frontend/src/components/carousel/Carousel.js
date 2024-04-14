import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Enquiryformdisplay from '../popupbuttons/Enquiryformdisplay';
import BannerOne from '../../assets/banner01.jpg'
import BannerTwo from '../../assets/banner02.png'
import BannerThree from '../../assets/banner03.jpg'
import BannerFour from '../../assets/banner04.jpg'
import BannerFive from '../../assets/banner05.png'


const Carousel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
  };
  return (
    <>
    <Slider {...settings} className='overflow-hidden z-[-10]'>
    <div className='w-full bg-center'>
      <img src={BannerOne} alt="" width={"100%"} />
    </div>
    <div className='w-full bg-center'>
      <img src={BannerTwo} alt="" width={"100%"}/>
    </div>
    <div className='w-full bg-center'>
      <img src={BannerThree} alt="" width={"100%"}/>
    </div>
    <div className='w-full bg-center'>
      <img src={BannerFour} alt="" width={"100%"}/>
    </div>
    <div className='w-full bg-center'>
      <img src={BannerFive} alt="" width={"100%"}/>
    </div>
    
    </Slider>
    <Enquiryformdisplay />

  </>

  )
}

export default Carousel