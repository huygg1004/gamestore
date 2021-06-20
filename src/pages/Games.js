import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import GamesContainer from "../components/GamesContainer";
const Games = () => {
  return (
    <>
      <Hero hero="gamesHero">
        <Banner title="our games">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <GamesContainer />
    </>
  );
};

export default Games;
