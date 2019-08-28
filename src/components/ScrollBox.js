import styled from "styled-components";

const ScrollBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);

  grid-gap: 10px 10px;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default ScrollBox;
