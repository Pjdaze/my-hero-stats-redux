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
        backgroundColor: "#000",
        backgroundImage: "url(" + images + ")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% , 100%",
        filter: "blur(5px)",

        color: "#fff"
      }}
    >
      <div className="info">
        <div style={{ backgroundColor: "rgba(0,0,0, 0.4)", zIndex: 2 }}>
          {" "}
          <h2>{name}</h2>
          <h2>Nicknames: </h2>
          <p>{biography.aliases.join(", ")}</p>
          <h2>Place Of Birth:</h2>
          <p>{biography.placeOfBirth}</p>
          <h2>First Appearance:</h2>
          <p>{biography.firstAppearance}</p>
          <h2>Publisher</h2>
          <p>{biography.firstAppearance}</p>
          <h2>Appearance</h2>
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
      </div>

      <TwitterButton />
    </HeroCardWrapper>
  );
};

export default FlippedCard;
