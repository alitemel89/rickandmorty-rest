import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";

import "./CharacterPage.css";

const CharacterPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [character, setCharacter] = useState({});

  const { id } = useParams();
  const characterURL = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true);
        const res = await fetch(characterURL);
        const data = await res.json();
        setCharacter(data);
        if (character) {
          setLoading(false);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacter();
  }, [characterURL]);

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  const { name, image, gender, species, status } = character;

  return (
    <div className="character-container">
      <div className="character-image">
        <img src={image} alt="characterImage" />
      </div>

      <div className="character-details">
        <h1>{name}</h1>
        <h2 className="character-title">{gender}</h2>
        <h2 className="character-title">{species}</h2>
        <div className="character-status ">
          <span className={`${status === "Alive" ? "alive" : "dead"}`}>
            {status}
          </span>
          <p className="character-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam esse
            natus deserunt explicabo temporibus, saepe maxime veritatis earum
            culpa, illo, eius quam voluptas odio! Culpa expedita error sed
            debitis vitae. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Veniam esse natus deserunt explicabo temporibus, saepe maxime
            veritatis earum culpa, illo, eius quam voluptas odio! Culpa expedita
            error sed debitis vitae.
          </p>
        </div>
        <div className="character-btn">

        <Link to={`/episode/1`} className="btn">Back to Characters</Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
