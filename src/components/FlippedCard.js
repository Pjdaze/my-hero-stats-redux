import React from "react";
import {connect} from "react-redux";
import HeroCardWrapper from "../Wrappers/HeroCardWrapper";
import TwitterButton from "./TwitterButton";

import { closeHeroCard } from "../actions";
import { connect } from "react-redux";

import {closeHeroCard} from "../actions";


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
      <div
        style={{
          textShadow: "0px 1px 5px #003F7F"
        }}
      >
        {" "}
        <p className="card-titles">Name:</p>
        <p>{name}</p>
        <p className="card-titles">Nicknames: </p>
        <p>{biography.aliases.join(", ")}</p>
        <p className="card-titles">Place Of Birth:</p>
        <p>{biography.placeOfBirth}</p>
        <p className="card-titles">First Appearance:</p>
        <p>{biography.firstAppearance}</p>
        <p>Publisher</p>
        <p>{biography.firstAppearance}</p>
        <p className="card-titles">Appearance</p>
        <ul>
          <li>Gender: {appearance.gender}</li>
          <li>Race: {appearance.race}</li>
          <li>Hair Color: {appearance.hairColor}</li>
          <li>Height: {appearance.height[0]}</li>
          <li>Weight: {appearance.weight[0]}</li>
        </ul>
        <h2>Powers Stats</h2>
        <ul>{getStats}</ul>
      </div>
      <button
        className="flip-button"
        style={{ marginBottom: "10px" }}
        onClick={closeHeroCard}
      >
        FlIP CARD
      </button>
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

  closeHeroCard
};

export default connect(mapState, mapDispatch)(FlippedCard);

