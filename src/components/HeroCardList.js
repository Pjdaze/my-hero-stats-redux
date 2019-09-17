import React from "react";
import HeroCard from "../components/HeroCard";
import ScrollBox from "./ScrollBox";
import FlippedCard from "./FlippedCard";

const ManageMembers = function(member) {
  if (!member.length) {
    return "loading page";
  } else {
    return member.map(x => x.name);
  }
};

const HeroCardList = ({ heroes, onFlip, isFlipped, cardToFlip }) => {
  return (
    <ScrollBox>
      {heroes.map((x, i) => {
        if (!isFlipped) {
          return (
            <HeroCard
              key={Math.random() + heroes[i]}
              name={heroes[i].name}
              images={heroes[i].images.lg}
              onFlip={onFlip}
            />
          );
        } else if (heroes[i].name === cardToFlip) {
          return (
            <FlippedCard
              key={Math.random() + heroes[i]}
              appearance={heroes[i].appearance}
              name={heroes[i].name}
              images={heroes[i].images.lg}
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

export default HeroCardList;
