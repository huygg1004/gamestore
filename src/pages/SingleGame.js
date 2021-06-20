import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
// import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { GameContext } from "../context";

import StyledHero from "../components/StyledHero";
export default class SingleGame extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = GameContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getGame } = this.context;
    const game = getGame(this.state.slug);

    if (!game) {
      return (
        <div className="error">
          <h3> no such game could be found...</h3>
          <Link to="/games" className="btn-primary">
            back to games
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      year,
      price,
      extras,
      multiplayer,
      dlc,
      images
    } = game;
    const [mainImg, ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} game`}>
            <Link to="/games" className="btn-primary">
              back to games
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-game">
          <div className="single-game-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-game-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>year : {year}</h6>
              <h6>
                max number of players :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{dlc ? "dlc included" : "no extra dlcs"}</h6>
              <h6>{multiplayer ? "Has Multiplayer" : "Single Player Only"}</h6>
            </article>
          </div>
        </section>
        <section className="game-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
