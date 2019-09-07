import React from "react";
import { TwitterShareButton, TwitterFollowButton } from "react-twitter-embed";
const TwitterButton = props => {
  return (
    <TwitterShareButton
      url={"https://www.pjdux.com"}
      options={{
        text: "So This Are The Stats On My Favorite Super Hero!",
        via: "pjdux"
      }}
    />
  );
};

export default TwitterButton;
