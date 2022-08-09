import React from "react";
import Search from "../Pages/Search";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Artists from "../Pages/Artists";
import About from "../Pages/About";
import Nav from "../components/Nav";

const Routing = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default Routing;
