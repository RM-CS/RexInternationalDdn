import { useState, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setAutoSlideEnabled(true); // Allow automatic sliding after manual navigation
  };

  const nextSlide = () => {
    if (current === slides.length - 1) {
      setAutoSlideEnabled(false); // Disable automatic sliding after reaching the last slide
    }
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (autoSlideEnabled) {
      const intervalId = setInterval(() => {
        // Automatically go to the next slide after a specified interval
        nextSlide();
      }, 3000);

      // Clear the interval when the component is unmounted or when autoSlideEnabled is set to false
      return () => clearInterval(intervalId);
    }
  }, [current, slides.length, autoSlideEnabled]);

  return (
    <div className="overflow-hidden relative h-[80%] z-[-20]">
      <div
        className="flex transition ease-out duration-[1000ms] w-full"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
        onMouseEnter={() => setAutoSlideEnabled(false)} // Disable auto sliding on hover
        onMouseLeave={() => setAutoSlideEnabled(true)} // Enable auto sliding when not hovering
      >
        {slides.map((s, index) => (
          <img key={index} src={s} alt={`Slide ${index + 1}`}/>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent border-0 text-white text-3xl z-30 pl-4"
        onClick={previousSlide}
      >
        <BsFillArrowLeftCircleFill />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent border-0 text-white text-3xl z-30 pr-4"
        onClick={nextSlide}
      >
        <BsFillArrowRightCircleFill />
      </button>
    </div>
  );
}
