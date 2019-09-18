import React from "react";
import HeroCardWrapper from "../Wrappers/HeroCardWrapper";

const HeroCard = ({ images, name, onFlip }) => {
  return (
    <HeroCardWrapper>
      <img src={images} alt="heroes" />
      <div className="info">
        <h2>{name}</h2>
        <button className="flip-button" onClick={onFlip} id={name}>
          FLIP CARD
        </button>
      </div>
    </HeroCardWrapper>
  );
};

export default HeroCard;
