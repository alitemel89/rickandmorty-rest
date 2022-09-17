import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

const Card = ({ id, name, episode }) => {
  return (
    <div className="card">
        <h1 className="card__title">{episode}</h1>
        <div>
            <h2 className="card__episodeName">{name}</h2>
            <Link to={`episode/${id}`} className="card__link">
                Episode Characters
            </Link>
        </div>    
    </div>
  );
};

export default Card;
