import React from "react";
import { useContext } from "react";
import { GameContext } from "../context";
import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const GamesFilter = ({ games }) => {
  // react hooks
  const context = useContext(GameContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minYear,
    maxYear,
    multiplayer,
    dlc
  } = context;

  // get unique types
  let types = getUnique(games, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let people = getUnique(games, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="search games" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">game type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* guests  */}
        <div className="form-group">
          <label htmlFor="capacity">Number of Players</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>
        {/* end of guests */}
        {/* game price */}
        <div className="form-group">
          <label htmlFor="price">game price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of game price*/}
        {/* Year */}
        <div className="form-group">
          <label htmlFor="price">Game Year</label>
          <div className="year-inputs">
            <input
              type="number"
              name="minYear"
              value={minYear}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxYear"
              value={maxYear}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of select type */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="multiplayer"
              id="multiplayer"
              checked={multiplayer}
              onChange={handleChange}
            />
            <label htmlFor="multiplayer">multiplayer</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="dlc"
              checked={dlc}
              onChange={handleChange}
            />
            <label htmlFor="dlc">dlc</label>
          </div>
        </div>
        {/* end of extras type */}
      </form>
    </section>
  );
};

export default GamesFilter;
