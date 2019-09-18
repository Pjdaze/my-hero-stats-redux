import styled from "styled-components";

const ScrollBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  grid-gap: 10px 10px;
  position: relative;
  margin: 100px auto;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default ScrollBox;
