import React from "react";
const Card = ({ item }) => {
  console.log(item);
  return (
    <li className="card">
      <img src={item.items[0].image} alt={item.title} className="card-image" />
      <h4 className="card-title">{item.section}</h4>
      <p className="card-channel">
        <i>{item.channel}</i>
      </p>
      <div className="card-metrics">
        {item.views} &bull; {item.published}
      </div>
    </li>
  );
};

export default Card;
