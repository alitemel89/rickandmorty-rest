import React, { useState, useEffect } from "react";
import Card from "../../components/card/Card";
import Loading from "../../components/loading/Loading";
import "./Home.css";

const baseURL = "https://rickandmortyapi.com/api/episode";

const Home = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        setLoading(true);
        const res = await fetch(baseURL);
        const { results } = await res.json();

        if (results) {
          setEpisodes(results);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchEpisodes();
  }, []);

  if (loading) return <Loading />

  return (
    <div>
      <h1 className="page-title">Episodes</h1>
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
