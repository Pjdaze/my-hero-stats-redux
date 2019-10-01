import React from "react";
import { connect } from "react-redux";
import HomeWrap from "./Wrappers/HomeWrap";

import { heroes } from "./fake_data/Heroes";
import SearchBox from "./components/SearchBox";
import HeroCardList from "./components/HeroCardList";
import ScrollBox from "./components/ScrollBox";
import Routes from "./routes";
import "./App.css";

import { setSearchField, requestHeroes, setOnClick } from "./actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchHeroes.searchField,
    heroes: state.requestHeroes.heroes,
    isPending: state.requestHeroes.isPending,
    err: state.requestHeroes.err,
    flipped: state.setOnClick.flipped,
    cardToFlip: state.setOnClick.cardToFlip
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),

    onRequestHeroes: () => dispatch(requestHeroes()),
    handleClick: e => dispatch(setOnClick(e.target.id))
  };
};

class App extends React.Component {
  componentDidMount() {
    console.log(
      `APOLOGIES FOR ALL THE ACTION LOGS, ONCE DONE WITH STYLING ALL GET THIS OUT`,
      new Date()
    );
    this.props.onRequestHeroes();
  }

  render() {
    const {
      heroes,
      onSearchChange,
      searchField,
      cardToFlip,
      handleClick,
      flipped
    } = this.props;

    const findHeroe = heroes.filter(x =>
      x.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
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
          cardToFlip={cardToFlip}
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
