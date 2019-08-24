import React from "react";
import HeroCard from "../components/HeroCard";
import ScrollBox from "./ScrollBox";

const HeroCardList = ({ heroes }) => {
  return (
    <ScrollBox>
      {" "}
      {heroes.map((user, i) => {
        return (
          <HeroCard
            key={i}
            id={heroes[i].all}
            name={heroes[i].name}
            appearance={heroes[i].appearance.gender}
            images={heroes[i].images.md}
          />
        );
      })}
    </ScrollBox>
  );
};

export default HeroCardList;
