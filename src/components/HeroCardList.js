import React from "react";
import HeroCard from "../components/HeroCard";
import ScrollBox from "./ScrollBox";

const ManageMembers = function(member) {
  if (!member.length) {
    return "loading page";
  } else {
    return member.map(x => x.name);
  }
};

const HeroCardList = ({ heroes }) => {
  return (
    <ScrollBox>
      {" "}
      {heroes.map((user, i) => {
        return (
          <HeroCard
            key={i}
            name={heroes[i].name}
            images={heroes[i].images.lg}
          />
        );
      })}
    </ScrollBox>
  );
};

export default HeroCardList;
