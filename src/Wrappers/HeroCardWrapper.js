import styled, { css } from "styled-components";

const HeroCardWrapper = styled.div`
  border: 1px solid #222;
  border-radius: 7px;
  padding: 10px;

  img {
    width: 200px;
  }

  ${props =>
    props.primary &&
    css`
 background: #000046;
        background: -webkit-linear-gradient(to bottom, #1CB5E0, #000046);
        background: linear-gradient(to bottom, #1CB5E0, #000046);

        background-Position: center;
        background-repeat: no-repeat;
        background-size: contain
        overflow-Y: scroll;
        height: 350px;
        color #fff;
        text-shadow: 0px 1px 5px #003F7F;

        position: absolute;
    left: 50%;
    margin-left: -180px;
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
