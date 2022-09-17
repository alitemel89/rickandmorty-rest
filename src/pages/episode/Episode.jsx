import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterCard from "../../components/character/CharacterCard";
import Loading from "../../components/loading/Loading";
import "./Episode.css";

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

  console.log(characterDetails);
  return (
    <div>
      <h1 className="page-title">Characters</h1>
      <div className="characters">
        {characterDetails.map((character) => (
          <CharacterCard
            name={character.name}
            image={character.image}
            status={character.status}
            gender={character.gender}
            species={character.species}
          />
        ))}
      </div>
    </div>
  );
};

export default Episode;
