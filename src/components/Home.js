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
  getBats = () => {
    this.setState({
      heroes: this.state.heroes.filter(x => x.name.slice(0, 3) === "Bat")
    });
    console.log(this.state.heroes);
  };

  render() {
    return (
      <HomeWrap>
        <div className="hero-box">{this.state.getBats}</div>
        <button onClick={this.getBats}>Get Random Hero</button>
      </HomeWrap>
    );
  }
}

export default Home;
