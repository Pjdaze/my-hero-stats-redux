import React from "react";
import { withRouter } from "react-router-dom";
import HeroCard from "../components/HeroCard";
import ScrollBox from "./ScrollBox";
import FlippedCard from "./FlippedCard";

const HeroCardList = ({ heroes, onFlip, isFlipped, cardToFlip, history }) => {
  const chooseHero = e => {
    onFlip(e);
    history.push("/heroDetail");
  };
  return (
    <ScrollBox>
      {heroes.map((x, i) => {
        if (!isFlipped) {
          return (
            <HeroCard
              key={Math.random() + heroes[i]}
              name={heroes[i].name}
              images={heroes[i].images.lg}
              onFlip={chooseHero}
            />
          );
        } else if (heroes[i].name === cardToFlip) {
          return (
            <FlippedCard
              key={Math.random() + heroes[i]}
              appearance={heroes[i].appearance}
              name={heroes[i].name}
              images={heroes[i].images.sm}
              powers={heroes[i].powerstats}
              biography={heroes[i].biography}
              onFlip={onFlip}
              cardToFlip={cardToFlip}
            />
          );
        }
      })}
    </ScrollBox>
  );
};

export default withRouter(HeroCardList);
