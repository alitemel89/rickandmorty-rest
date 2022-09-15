import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Episode = () => {
  const { id } = useParams();
  const episodeURL = `https://rickandmortyapi.com/api/episode/${id}`;

  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const res = await fetch(episodeURL);
    const { characters } = await res.json();
    setCharacters(characters);
  };


  useEffect(() => {
    fetchCharacters();
  }, []);

  console.log(characters);

  return (
    <div>
      <h1>Characters</h1>
    </div>
  );
};

export default Episode;
