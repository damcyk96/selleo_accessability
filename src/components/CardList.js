import React from "react";
import Card from "./Card";

const CardList = ({ list }) => {
  return (
    <ul>
      {list.map((item, index) => {
        return <Card key={index} item={item} />;
      })}
    </ul>
  );
};

export default CardList;
