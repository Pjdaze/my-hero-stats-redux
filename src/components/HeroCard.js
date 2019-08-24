import React from "react";
import HeroCardWrapper from "../Wrappers/HeroCardWrapper";

const HeroCard = ({ images, name, number, appearance, all }) => {
  return (
    <HeroCardWrapper>
      <img src={images} alt="heroes" />
      <div className="info">
        <h2>{name}</h2>
        <p>{appearance}</p>
      </div>
    </HeroCardWrapper>
  );
};

export default HeroCard;
