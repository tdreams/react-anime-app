import React, { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider";

function TopAnime() {
  const [topAnime, setTopAnime] = useState([]);
  const getTopAnime = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/top/anime`);
    const resData = await res.json();
    setTopAnime(resData.data);
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  const containerStyles = {
    width: "800px",
    height: "500px",
    margin: "0 auto",
  };

  return (
    <>
      <h1>Carousel</h1>
      {/* <div style={containerStyles}>
        {topAnime.map((e) => {
          return (
            <div key={e.mal_id}>
              <ImageSlider images={[e.images.jpg.large_image_url]} />
            </div>
          );
        })}
      </div> */}
      <h2>Top Anime List</h2>
      <div className="view">
        {topAnime.map((el) => {
          const images = el.images.jpg.large_image_url;
          return (
            <div className="card" key={el.mal_id}>
              <img src={images} />
              <h2>{el.title}</h2>
              <p className="score">Score {el.score}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TopAnime;
