import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";
const Game = memo(({ game }) => {
  const { name, slug, images, price } = game;
  // console.log(name);
  return (
    <article className="game">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single game" />
        <div className="price-top">
          <h6>${price}</h6>
          {/* <p>per night</p> */}
        </div>
        <Link to={`/games/${slug}`} className="btn-primary game-link">
          features
        </Link>
      </div>
      <p className="game-info">{name}</p>
    </article>
  );
});

Game.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Game;
