import styled from "styled-components";

const ScrollBox = styled.div`
  max-width: 2000px;

  display: grid;
  grid-template-columns: repeat(6, 1fr);

  grid-gap: 10px 10px;
  position: relative;
  margin: 60px auto;
  @media only screen and (max-width: 965px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (max-width: 675px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default ScrollBox;
