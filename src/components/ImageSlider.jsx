import { useEffect, useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topManga, setTopManga] = useState([]);

  const getTopManga = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/seasons/upcoming`);
    const resData = await res.json();
    setTopManga(resData.data);
  };

  useEffect(() => {
    getTopManga();
  }, []);

  const containerStyles = {
    height: "auto",
    margin: "0 auto",
  };

  const absolute = {
    position: "absolute",
  };

  const slideStyles = {
    backgroundImage:
      images && images.length > 0 ? `url(${images[currentIndex]})` : "",
    width: "100%",
  };

  return (
    <div>
      {topManga && topManga.length > 0 && (
        <div>
          {topManga.slice(0, 6).map((e) => {
            const images = e.images.jpg.large_image_url;
            return <div key={e.mal_id} style={slideStyles}></div>;
          })}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
