import React, { useState, useEffect } from "react";
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
  return (
    <>
      <h1>Top Anime List</h1>
      <div className="view">
        {topAnime.map((el) => {
          return (
            <div className="card" key={el.mal_id}>
              <img src={el.images.jpg.image_url} />
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
