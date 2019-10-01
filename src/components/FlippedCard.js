import React from "react";
import { connect } from "react-redux";
import HeroCardWrapper from "../Wrappers/HeroCardWrapper";
import TwitterButton from "./TwitterButton";
import { closeHeroCard } from "../actions";

const FlippedCard = ({
  images,
  name,
  powers,
  appearance,
  biography,
  onFlip,
  closeHeroCard
}) => {
  //const appearanceStats = Object.entries(appearance);

  const powerStats = Object.entries(powers);

  const getStats = powerStats.map((stats, i) => (
    <li key={i}>{`${stats[0]}: ${stats[1]}`}</li>
  ));

  return (
    <HeroCardWrapper primary>
      <div className="img-wrap">
        <img src={images} alt="heroes" />
      </div>
      <button className="flip-button" onClick={closeHeroCard}>
        FlIP CARD
      </button>
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

const mapState = state => ({});
const mapDispatch = {
  closeHeroCard
};

export default connect(
  mapState,
  mapDispatch
)(FlippedCard);
