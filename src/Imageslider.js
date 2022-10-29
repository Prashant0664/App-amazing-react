import { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  const mySlides2={
    width:"100%",
    display:"block",
}
  return (
    <> 
    
        <img src={slides[currentIndex].url} style={mySlides2}/>
        <button className="w3-button w3-black w3-display-left" onClick={goToPrevious }>&#10094;</button>
        <button className="w3-button w3-black w3-display-right" onClick={goToNext}>&#10095;</button>
    </>
  );
};

export default ImageSlider;