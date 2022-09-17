import React from "react";

import "./CharacterCard.css";

const CharacterCard = ({ id, image, name, status, gender, species }) => {
  return (
    <div className="card">
      <div key={id}>
        <div className="card__header">
          <h1 className="card__name">{name}</h1>
        </div>
        <img src={image} alt="characterImage" className="card__image" />
        <div className="card__features">
          <span>{gender}</span>
          <span className={`${status === "Alive" ? "alive" : "dead"}`}>
            {status}
          </span>
          <span>{species}</span>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
