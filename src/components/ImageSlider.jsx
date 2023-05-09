import { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageLoad = (event) => {
    event.target.style.opacity = 1;
  };

  const sliderStylesBg = {
    width: "100vh",
    height: "800px",
    position: "relative",
    backgroundColor: "rgb(255, 255, 255)",
  };
  const sliderStyles = {
    width: "800px",
    height: "800px",

    display: "flex",

    alignItems: "center",
    justifyContent: "center",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${images[currentIndex]})`,
  };

  return (
    <div style={sliderStylesBg}>
      <div style={sliderStyles}>
        <div style={slideStyles} onLoad={handleImageLoad}></div>
      </div>
    </div>
  );
};

export default ImageSlider;
