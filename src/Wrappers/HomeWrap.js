import styled from "styled-components";
import SpaceBG from "../assets/space.jpg";
const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;
  margin: 0 auto;

  background-image: url(${SpaceBG});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;

  header {
    h1 {
      font-family: "Monoton", sans-serif;
      color: #fff;
    }
  }
`;

export default HomeWrap;
