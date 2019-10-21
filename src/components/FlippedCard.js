import React from "react";
import { connect } from "react-redux";
import HeroCardWrapper from "../Wrappers/HeroCardWrapper";
import TwitterButton from "./TwitterButton";
import { closeHeroCard } from "../actions";
import { NavLink } from "react-router-dom";

const FlippedCard = ({ onFlip, closeHeroCard, selectedHero, history }) => {
  //const appearanceStats = Object.entries(appearance);
  if (!selectedHero.details || !selectedHero.details.id) {
    history.push("/");
    return null;
  }

  const {
    appearance,
    powerstats,
    name,
    biography,
    images
  } = selectedHero.details;
  const powerStats = Object.entries(powerstats);

  const getStats = powerStats.map((stats, i) => (
    <li key={i}>{`${stats[0]}: ${stats[1]}`}</li>
  ));

  const imagex = images.lg;
  console.log("imagex", imagex);

  return (
    <HeroCardWrapper primary>
      <div className="img-wrap">
        <img className="mama" src={imagex} alt="heroes" />
      </div>

      <NavLink className="flip-button" to="/">
        {" "}
        <button className="flip-button">FLIPP CARD</button>{" "}
      </NavLink>
      <div className="flipped-card">
        {" "}
        <p className="card-titles">Name:</p>
        <p>{name}</p>
        <p className="card-titles">Nicknames: </p>
        <p>{biography.aliases.join(", ")}</p>
        <p className="card-titles">Place Of Birth:</p>
        <p>{biography.placeOfBirth}</p>
        <p className="card-titles">First Appearance:</p>
        <p>{biography.firstAppearance}</p>
        <span className="card-titles">Publisher:</span>
        <p>{biography.firstAppearance}</p>
        <p className="card-titles">Appearance:</p>
        <ul>
          <li>Gender: {appearance.gender}</li>
          <li>Race: {appearance.race}</li>
          <li>Hair Color: {appearance.hairColor}</li>
          <li>Height: {appearance.height[0]}</li>
          <li>Weight: {appearance.weight[0]}</li>
        </ul>
      </div>
      <div className="power-stats">
        <p className="card-titles">Powers Stats</p>
        <ul>{getStats}</ul>
      </div>

      <TwitterButton />
    </HeroCardWrapper>
  );
};

const mapState = state => ({
  selectedHero: state.selectedHero
});
const mapDispatch = {
  closeHeroCard
};

export default connect(
  mapState,
  mapDispatch
)(FlippedCard);
