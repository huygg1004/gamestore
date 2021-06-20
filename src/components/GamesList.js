import React from "react";
import Game from "./Game";
const GamesList = ({ games }) => {
  if (games.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no games matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="gameslist">
      <div className="gameslist-center">
        {games.map(item => {
          return <Game key={item.id} game={item} />;
        })}
      </div>
    </section>
  );
};

export default GamesList;
