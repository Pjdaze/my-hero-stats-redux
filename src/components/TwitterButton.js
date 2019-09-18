import React from "react";
import { TwitterShareButton, TwitterFollowButton } from "react-twitter-embed";
const TwitterButton = props => {
  return (
    <TwitterShareButton
      url={"https://pjdaze.github.io/my-hero-stats-redux/"}
      options={{
        text: "So This Are The Stats On My Favorite Super Hero!"
      }}
    />
  );
};

export default TwitterButton;
