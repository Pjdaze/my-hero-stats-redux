import React from "react";
import HeroCardWrapper from "../Wrappers/HeroCardWrapper";

const FlippedCard = ({ images, name, powers }) => {
  const powerStats = Object.entries(powers);
  const getStats = powerStats.map((x, i) => (
    <li key={i}>{`${x[0]}: ${x[1]}`}</li>
  ));
  const image = images;
  return (
    <HeroCardWrapper>
      <div className="info" style={{ background: "#111", color: "#fff" }}>
        <h2>{name}</h2>
        <ul>{getStats}</ul>
      </div>
    </HeroCardWrapper>
  );
};

export default FlippedCard;
