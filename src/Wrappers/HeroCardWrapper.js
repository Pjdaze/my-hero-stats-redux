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
      background: #222;
      color: #fff;
    `}
`;

export default HeroCardWrapper;
