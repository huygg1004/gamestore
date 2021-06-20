import React, { Component } from "react";
import Title from "./Title";
import { GameContext } from "../context";
import Game from "./Game";
import Loading from "./Loading";
export default class FeaturedGames extends Component {
  static contextType = GameContext;

  render() {
    let { loading, featuredGames: games } = this.context;

    games = games.map(game => {
      return <Game key={game.id} game={game} />;
    });
    return (
      <section className="featured-games">
        <Title title="featured games" />
        <div className="featured-games-center">
          {loading ? <Loading /> : games}
        </div>
      </section>
    );
  }
}
