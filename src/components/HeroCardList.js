import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import HeroCard from "../components/HeroCard";
import ScrollBox from "./ScrollBox";
import FlippedCard from "./FlippedCard";
import { selectHero } from "../actions";

const HeroCardList = ({
  heroes,
  onFlip,
  isFlipped,
  cardToFlip,
  history,
  selectHero
}) => {
  const chooseHero = heroDetail => {
    selectHero(heroDetail);
    history.push("/heroDetail");
  };
  return (
    <ScrollBox>
      {heroes.map((heroDetail, i) => (
        <HeroCard
          key={Math.random() + heroes[i]}
          name={heroes[i].name}
          images={heroes[i].images.lg}
          onFlip={() => {
            chooseHero(heroDetail);
          }}
        />
      ))}
    </ScrollBox>
  );
};

const mapStateToProps = state => ({});

const actions = {
  selectHero
};

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(HeroCardList)
);
