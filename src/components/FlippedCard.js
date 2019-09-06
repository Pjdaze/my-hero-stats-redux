import React from "react";
import HeroCardWrapper from "../Wrappers/HeroCardWrapper";
import TwitterButton from "./TwitterButton";

const FlippedCard = ({ images, name, powers, appearance, biography }) => {
  const powerStats = Object.entries(powers);
  //const appearanceStats = Object.entries(appearance);

  const getStats = powerStats.map((stats, i) => (
    <li key={i}>{`${stats[0]}: ${stats[1]}`}</li>
  ));

  return (
    <HeroCardWrapper
      style={{
        backgroundImage: "url(" + images + ")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        color: "#fff"
      }}
    >
      <div
        style={{
          zIndex: 60,
          textShadow: "0px 1px 5px #003F7F"
        }}
      >
        {" "}
        <h4>{name}</h4>
        <h4>Nicknames: </h4>
        <p>{biography.aliases.join(", ")}</p>
        <h4>Place Of Birth:</h4>
        <p>{biography.placeOfBirth}</p>
        <h4>First Appearance:</h4>
        <p>{biography.firstAppearance}</p>
        <h4>Publisher</h4>
        <p>{biography.firstAppearance}</p>
        <h4>Appearance</h4>
        <ul>
          <li>Gender: {appearance.gender}</li>
          <li>Race: {appearance.race}</li>
          <li>Hair Color: {appearance.hairColor}</li>
          <li>Height: {appearance.height[0]}</li>
          <li>Weight: {appearance.weight[0]}</li>
        </ul>
        <h2>Powers</h2>
        <ul>{getStats}</ul>
      </div>

      <TwitterButton />
    </HeroCardWrapper>
  );
};

export default FlippedCard;
