import React from "react";
const Card = ({ item }) => {
  return (
    <li className="card" key={item.id}>
      <h2 className="card-title">
        {item.brand} {item.model}
      </h2>
      <img
        src={item.photo}
        alt={`${item.brand} ${item.model}`}
        className="card-image"
      />
    </li>
  );
};

export default Card;
