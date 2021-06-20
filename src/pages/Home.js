import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedGames from "../components/FeaturedGames";
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Huy Games Store"
          subtitle="cheap games starting at $10"
        >
          <Link to="/games" className="btn-primary">
            our games
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedGames />
    </>
  );
};

export default home;
