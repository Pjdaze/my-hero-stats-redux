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
      .catch(err => console.log(err));
  }

  render() {
    const { heroes } = this.state;

    const getBats = heroes.filter(
      x => x.name.slice(0, 3).toLowerCase() === "bat"
    );

    const getBatman = getBats.filter(hero => hero.slug === "69-batman");
    const batName = getBatman.map(x => x.name);

    console.log("These are the Bats ", ...getBats);
    console.log("This is Batman's profile", getBatman.map(x => x.images));
    return (
      <HomeWrap>
        <div className="hero-box" heroes={heroes}>
          <p>Name: {batName}</p>
          <img
            style={{ height: "200px", width: "200px" }}
            src={getBatman.map(x => x.images.md)}
            alt="x"
          />
        </div>
        <button onClick={this.getBats}>Get Random Hero</button>
      </HomeWrap>
    );
  }
}

export default Home;
