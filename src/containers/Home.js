import React from "react";
import HomeWrap from "../Wrappers/HomeWrap";
import { heroes } from "../fake_data/Heroes";
import SearchBox from "../components/SearchBox";
import HeroCardList from "../components/HeroCardList";
import ScrollBox from "../components/ScrollBox";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: [],
      searchField: "",
      flipped: false,
      cardToFlip: ""
    };
  }
  componentDidMount() {
    console.log(this.props.store);

    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(data => data.json())
      .then(res => {
        this.setState({ heroes: res });

        console.log("This is the data form the Heroes API: ", res.slice(0, 5));
      });
  }
  onSearchChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  handleClick = e => {
    this.setState({
      flipped: !this.state.flipped,
      cardToFlip: e.target.id
    });
  };

  render() {
    const { heroes, searchField, flipped, cardToFlip } = this.state;

    const findHeroe = heroes.filter(x =>
      x.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <HomeWrap className="home">
        <header style={{ height: "100px" }}>
          {" "}
          <h1>Find Your Hero</h1>
        </header>
        <SearchBox searchChange={this.onSearchChange} />
        <HeroCardList
          heroes={findHeroe.slice(0, 12)}
          onFlip={this.handleClick}
          isFlipped={flipped}
          cardToFlip={cardToFlip}
        />
      </HomeWrap>
    );
  }
}
export default App;
