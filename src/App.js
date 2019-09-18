import React from "react";
import { connect } from "react-redux";
import HomeWrap from "./Wrappers/HomeWrap";

import { heroes } from "./fake_data/Heroes";
import SearchBox from "./components/SearchBox";
import HeroCardList from "./components/HeroCardList";
import ScrollBox from "./components/ScrollBox";
import Routes from "./routes";
import "./App.css";

import { setSearchField } from "./actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: [],

      flipped: false,
      cardToFlip: ""
    };
  }
  componentDidMount() {
    console.log(this.props.getState);

    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(data => data.json())
      .then(res => {
        this.setState({ heroes: res });

        console.log("This is the data form the Heroes API: ", res.slice(0, 5));
      });
  }

  handleClick = e => {
    this.setState({
      flipped: !this.state.flipped,
      cardToFlip: e.target.id
    });
  };

  render() {
    const { heroes, flipped, cardToFlip } = this.state;
    const { onSearchChange, searchField } = this.props;

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
          onFlip={this.handleClick}
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
