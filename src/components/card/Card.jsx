import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

const Card = ({ id, name, episode }) => {
  return (
    <div className="card">
        <h1>{episode}</h1>
        <div className="card__body">
            <h2>{name}</h2>
            <Link to={`episode/${id}`}>
                Link to the single episode
            </Link>
        </div>
        
    </div>
  );
};

export default Card;
