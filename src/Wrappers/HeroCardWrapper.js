import styled, { css } from "styled-components";

const HeroCardWrapper = styled.div`
  border-radius: 7px;
  background-color: #1d66bb;
  margin: 0 auto;

  img {
    width: 150px;
    border-radius: 5px;
  }

  .info {
    h2 {
      color: #f5f5f5;

      font-family: "Teko", sans-serif;

      font-size: calc(18px + 0.5vw);
      margin: 1% auto;
    }
  }
  .flip-button {
    margin: 1% auto;
    background-color: transparent;
    border: none;
    font-weight: bold;
    transition: linear 0.3s ease-in-out;

    &:hover {
      border: 0.1px solid #fff;
      border-radius: 0px;
    }
  }

  box-shadow: 0 0 5px 0px #f5f5f5;

  ${props =>
    props.primary &&
    css`
 background: #000046;
        background: -webkit-linear-gradient(to bottom, #1CB5E0, #000046);
        background: linear-gradient(to bottom, #1CB5E0, #000046);
  width: 350px;
  margin: 0 auto;

        background-Position: center;
        background-repeat: no-repeat;
        background-size: contain
        overflow-Y: scroll;
        height: 500px;
        color #fff;
        text-shadow: 0px 1px 5px #003F7F;

        position: absolute;
    left: 50%;
    margin-left: -175px;
        img {
    border-radius: 50%;
    height: 150px;
    width: 150px;
 
  }



    `}

  button {
    padding: 10px;
    border-radius: 8px;
    background-color: #f5f5f5;
  }
`;

export default HeroCardWrapper;
