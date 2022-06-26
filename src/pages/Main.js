import React from "react";
import NavBar from "../components/NavBar";
import { Route, Routes } from "react-router-dom";
import Cars from "./Cars";
import Bikes from "./Bikes";
import Dolls from "./Dolls";

const Main = () => {
  return (
    <div>
      <NavBar />
      <h1>dupa</h1>
      <Routes>
        <Route path="/" element={<Bikes />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/dolls" element={<Dolls />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </div>
  );
};

export default Main;
