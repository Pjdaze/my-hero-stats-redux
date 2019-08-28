import React from "react";
import HomeWrap from "../Wrappers/HomeWrap";
import { heroes } from "../Heroes";
import SearchBox from "../components/SearchBox";
import HeroCardList from "../components/HeroCardList";
import ScrollBox from "../components/ScrollBox";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(data => data.json())
      .then(res => {
        this.setState({ heroes: res });

        console.log("This is the data form the Heroes API: ", res);
      });
  }
  onSearchChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  render() {
    const filteredHeroes = this.state.heroes.filter(x =>
      x.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );

    const powers = console.log(
      "this are the powers",
      this.state.heroes.map(x => x.powerstats)
    );
    return (
      <HomeWrap className="home">
        <header style={{ height: "100px" }}>
          {" "}
          <h1>Find Your Hero</h1>
        </header>
        <SearchBox searchChange={this.onSearchChange} />

        <HeroCardList heroes={filteredHeroes.slice(0, 12)} />
      </HomeWrap>
    );
  }
}
export default App;
