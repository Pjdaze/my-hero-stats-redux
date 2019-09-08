import React from "react";
import HeroCardWrapper from "../Wrappers/HeroCardWrapper";
import TwitterButton from "./TwitterButton";

const FlippedCard = ({ images, name, powers, appearance, biography }) => {
  //const appearanceStats = Object.entries(appearance);

  const powerStats = Object.entries(powers);

  const getStats = powerStats.map((stats, i) => (
    <li key={i}>{`${stats[0]}: ${stats[1]}`}</li>
  ));

  return (
    <HeroCardWrapper
      style={{
        //backgroundImage: "url(" + images + ")",
        background: " #000046" /* fallback for old browsers */,
        background: "-webkit-linear-gradient(to bottom, #1CB5E0, #000046)",
        background: `linear-gradient(to bottom, #1CB5E0, #000046`,

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        overflowY: "scroll",
        height: "350px",
        color: "#fff"
      }}
    >
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

      <TwitterButton />
    </HeroCardWrapper>
  );
};

export default FlippedCard;
