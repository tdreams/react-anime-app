import { useEffect, useState, useRef } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topManga, setTopManga] = useState([]);
  const length = topManga.length;

  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      nextSlide();
      resetTimer();
    }, 6000);
  };

  const getTopManga = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/seasons/upcoming`);
    const resData = await res.json();
    setTopManga(resData.data.slice(0, 5));
  };

  useEffect(() => {
    getTopManga();
    resetTimer();
    return () => clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    resetTimer();
  }, [currentIndex]);

  const containerStyles = {
    height: "auto",
    margin: "0 auto",
  };

  const absolute = {
    position: "absolute",
  };

  return (
    <section className="slider">
      <HiArrowCircleLeft className="left-arrow" onClick={prevSlide} />
      <HiArrowCircleRight className="right-arrow" onClick={nextSlide} />
      {topManga.map((item, index) => {
        return (
          <div
            key={index}
            className={index === currentIndex ? "slide active" : "slide"}
          >
            {index === currentIndex && (
              <img
                src={item.images.jpg.large_image_url}
                alt="upcoming animes"
                className="img-animes"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
