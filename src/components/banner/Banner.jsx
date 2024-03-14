import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from '../../components/carousel/Carousel';

import Image1 from "../../assets/banner01.jpg"
import Image2 from "../../assets/banner02.png"


const Banner = () => {
  let slides = [
    Image1,
    Image2,
    Image1
  ];

  return (
    <div className="max-w-screen-xl mx-auto">
      <Carousel slides={slides}/>
    </div>
  );
};

export default Banner;
