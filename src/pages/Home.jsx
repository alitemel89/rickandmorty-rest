import React, { useState, useEffect } from "react";
import Card from "../components/card/Card";
import "./Home.css";

const baseURL = "https://rickandmortyapi.com/api/episode";

const Home = () => {
  const [episodes, setEpisodes] = useState([]);

  const fetchEpisodes = async () => {
    const res = await fetch(baseURL);
    const { results } = await res.json();

    if (results) {
      setEpisodes(results);
    }
  };

  useEffect(() => {
    fetchEpisodes();
  }, []);

  console.log(episodes);

  return (
    <div>
      <h1>Home Page</h1>
      <div className="episodes">
        {episodes.map((episode, index) => (
          <div key={index}>
            <Card
              id={episode.id}
              name={episode.name}
              episode={episode.episode}
              airDate={episode.airDate}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
