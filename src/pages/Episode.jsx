import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/loading/Loading";

const Episode = () => {
  const { id } = useParams();
  const episodeURL = `https://rickandmortyapi.com/api/episode/${id}`;

  const [characters, setCharacters] = useState([]);
  const [characterDetails, setCharacterDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const res = await fetch(episodeURL);
        const { characters } = await res.json();
        setCharacters(characters);

        Promise.all(characters.map((u) => fetch(u)))
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((characterDetails) => {
            setCharacterDetails(characterDetails);
          });

        if (characterDetails) {
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <h1>Characters</h1>
      {characterDetails.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
};

export default Episode;
