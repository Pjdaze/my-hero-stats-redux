import React from "react";
import HeroCardWrapper from "../Wrappers/HeroCardWrapper";

const HeroCard = ({ images, name, all }) => {
  return (
    <HeroCardWrapper primary>
      <img src={images} alt="heroes" />
      <div className="info">
        <h2>{name}</h2>
      </div>
    </HeroCardWrapper>
  );
};

export default HeroCard;
