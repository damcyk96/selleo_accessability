import React from "react";
import CardList from "./../components/CardList";
import dummyData from "./../data";
const Cars = () => {
  const list = dummyData;
  return (
    <div>
      <CardList list={list} />
    </div>
  );
};

export default Cars;
