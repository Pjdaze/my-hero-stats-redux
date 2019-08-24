import styled from "styled-components";

const ScrollBox = styled.div`
  margin: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  width: 100%;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default ScrollBox;
