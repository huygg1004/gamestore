import React from "react";
import { withGameConsumer } from "../context";
import Loading from "./Loading";
import GamesFilter from "./GamesFilter";
import GamesList from "./GamesList";

function GameContainer({ context }) {
  const { loading, sortedGames, games } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <GamesFilter games={games} />
      <GamesList games={sortedGames} />
    </>
  );
}

export default withGameConsumer(GameContainer);