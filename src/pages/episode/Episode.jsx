import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterCard from "../../components/character/CharacterCard";
import Loading from "../../components/loading/Loading";
import "./Episode.css";

const Episode = () => {
  const { id } = useParams();
  const episodeURL = `https://rickandmortyapi.com/api/episode/${id}`;
  // eslint-disable-next-line
  const [characters, setCharacters] = useState([]);
  const [characterDetails, setCharacterDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

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
    // eslint-disable-next-line
  }, []);

  const filterHumans = () => {
    setFilteredCharacters(
      characterDetails.filter((character) => character.species === "Human")
    );
  };

  const filterAliens = () => {
    setFilteredCharacters(
      characterDetails.filter((character) => character.species === "Alien")
    );
  };

  if (loading) return <Loading />;

  return (
    <div>
      <h1 className="page-title">{`Characters of Episode ${id}`}</h1>
      <div className="button-group">
        <button className="btn alien" onClick={filterAliens}>
          Aliens
        </button>
        <button className="btn human" onClick={filterHumans}>
          Humans
        </button>
      </div>
      <div className="characters">
        {filteredCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            id={character.id}
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
