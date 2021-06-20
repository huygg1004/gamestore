import React, { Component } from "react";
// import items from "./data";
import Client from "./Contentful";

Client.getEntries({
  content_type: "gamestore",
}).then((response) => console.log(response.items));

const GameContext = React.createContext();

class GameProvider extends Component {
  state = {
    games: [],
    sortedGames: [],
    featuredGames: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minYear: 0,
    maxYear: 0,
    multiplayer: false,
    dlc: false,
  };

  //get data
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "gamestore",
        order:"sys.createdAt"
        // order:"fields.price"
      });
      let games = this.formatData(response.items);
      let featuredGames = games.filter((game) => game.featured === true);
      let maxPrice = Math.max(...games.map((item) => item.price));
      let maxYear = Math.max(...games.map((item) => item.year));
      this.setState({
        games,
        featuredGames,
        sortedGames: games,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxYear,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    // //this.getData
    // let rooms = this.formatData(items);
    // let featuredRooms = rooms.filter((room) => room.featured === true);
    // let maxPrice = Math.max(...rooms.map((item) => item.price));
    // let maxSize = Math.max(...rooms.map((item) => item.size));
    // this.setState({
    //   rooms,
    //   featuredRooms,
    //   sortedRooms: rooms,
    //   loading: false,
    //   price: maxPrice,
    //   maxPrice,
    //   maxSize,
    // });
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let game = { ...item.fields, images, id };
      return game;
    });

    return tempItems;
  }

  getGame = (slug) => {
    let tempGames = [...this.state.games];
    const game = tempGames.find((game) => game.slug === slug);
    return game;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterGames
    );
  };
  filterGames = () => {
    let { games, type, capacity, price, minYear, maxYear, multiplayer, dlc } =
      this.state;
    //all the rooms
    let tempGames = [...games];
    //transform value from string to int
    capacity = parseInt(capacity);
    price = parseInt(price);

    //filter by type
    if (type !== "all") {
      tempGames = tempGames.filter((game) => game.type === type);
    }

    //filter by capacity
    if (capacity !== 1) {
      tempGames = tempGames.filter((game) => game.capacity >= capacity);
    }

    //filter by price
    tempGames = tempGames.filter((game) => game.price <= price);

    //filter by year
    tempGames = tempGames.filter(
      (game) => game.year >= minYear && game.year <= maxYear
    );

    //filter by multiplayer
    if (multiplayer) {
      tempGames = tempGames.filter((game) => game.multiplayer === true);
    }

    //filter by dlc
    if (dlc) {
      tempGames = tempGames.filter((game) => game.dlc === true);
    }

    //change the state
    this.setState({
      sortedGames: tempGames,
    });
  };

  render() {
    return (
      <GameContext.Provider
        value={{
          ...this.state,
          getGame: this.getGame,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

const GameConsumer = GameContext.Consumer;

export function withGameConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <GameConsumer>
        {(value) => <Component {...props} context={value} />}
      </GameConsumer>
    );
  };
}

export { GameProvider, GameConsumer, GameContext };
