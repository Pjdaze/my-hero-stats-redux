import React from "react";
import { connect } from "react-redux";
import HomeWrap from "./Wrappers/HomeWrap";
import SearchBox from "./components/SearchBox";
import HeroCardList from "./components/HeroCardList";
import Routes from "./routes";
import "./App.css";

import {
  setSearchField,
  requestHeroes,
  setOnClick,
  setHeroID
} from "./actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchHeroes.searchField,
    heroes: state.requestHeroes.heroes,
    isPending: state.requestHeroes.isPending,
    err: state.requestHeroes.err,
    flipped: state.setOnClick.flipped,
    setHero: state.setHeroID
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestHeroes: () => dispatch(requestHeroes()),
    handleClick: event => dispatch(setOnClick(event.target.id))
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flipped: false,
      cardToFlip: ""
    };
  }
  componentDidMount() {
    this.props.onRequestHeroes();
  }

  handleClick = e => {
    this.setState({
      flipped: !this.state.flipped,
      cardToFlip: e.target.id
    });
  };

  render() {
    const {
      heroes,
      onSearchChange,
      searchField,
      isPending,
      setHeroID,
      handleClick,
      flipped
    } = this.props;

    const findHeroe = heroes.filter(x =>
      x.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return isPending ? (
      <h1> "Loading..."</h1>
    ) : (
      <HomeWrap className="home">
        <header style={{ height: "100px" }}>
          {" "}
          <h1>Find Your Hero</h1>
        </header>
        <SearchBox searchChange={onSearchChange} />
        <HeroCardList
          heroes={findHeroe.slice(0, 12)}
          onFlip={handleClick}
          isFlipped={flipped}
          cardToFlip={setHeroID}
        />
        <Routes />
      </HomeWrap>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
