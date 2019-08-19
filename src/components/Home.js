import React from "react";
import HomeWrap from "../Wrappers/HomeWrap";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: []
    };
  }

  componentDidMount() {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          heroes: [...data]
        });
      })
      .catch(err => console.log("Here is Your Error", err));
  }

  render() {
    const { heroes } = this.state;

    const getBats = heroes.filter(
      x => x.name.slice(0, 3).toLowerCase() === "bat"
    );

    const getBatman = getBats.filter(hero => hero.slug === "70-batman");
    const batName = getBatman.map(x => x.name);
    const getPowers = getBats.map(x => x.powerstats.spped);

    console.log("These are the Bats ", ...getBats);
    console.log("This is Batman's profile", getBatman);
    console.log();

    return (
      <HomeWrap>
        <div className="hero-box">
          <p>Name: {batName}</p>
          <img
            style={{ height: "200px", width: "200px" }}
            src={getBatman.map(x => x.images.md)}
            alt="x"
          />
          <h4>Habilities: {getPowers} </h4>
        </div>
        <button onClick={this.getBats}>Get Random Hero</button>
      </HomeWrap>
    );
  }
}

export default Home;
