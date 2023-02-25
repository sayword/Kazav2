import './carousel.css';
import ArrowRight from '../../data/chevron_carousel_right.png';
import ArrowLeft from '../../data/chevron_carousel_left.png';
import { useState } from 'react';

const Slider = ({ imageSlider }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === imageSlider.length - 1) {
      setCurrentIndex(0);
    }
  };

  const handlePrevSlide = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) {
      setCurrentIndex(imageSlider.length - 1);
    }
  };

  return (
    <section
      style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }}
      className="carousel"
    >
      {imageSlider.length > 1 && (
        <>
          <img
            className="carousel_arrow carousel_arrow_right"
            src={ArrowRight}
            alt="show next slider"
            onClick={handleNextSlide}
          />
          <img
            className="carousel_arrow carousel_arrow_left"
            src={ArrowLeft}
            alt="show previous slider"
            onClick={handlePrevSlide}
          />
          <p className="slideCount">
            {currentIndex + 1} / {imageSlider.length}
          </p>
        </>
      )}
    </section>
  );
};

export default Slider;
