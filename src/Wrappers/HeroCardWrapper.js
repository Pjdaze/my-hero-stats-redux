import styled, { css } from "styled-components";

const HeroCardWrapper = styled.div`
  border-radius: 7px;
  background-color: #1d66bb;
  transition: 500ms ease-in-out;
  &:hover {
    background-color: #222;
    .flip-button {
      display: block;
      margin-bottom: 60%;
    }

    img {
      opacity: 0;
    }
    width: 300px;
    height: 550px;
  }
  width: 150px;
  position: relative;

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
    border: 2px solid #f5f5f5 !important;
    font-weight: bold;
    transition: linear 0.3s ease-in-out;
    color: #f5f5f5;
    display: none;
  }

  box-shadow: 0 0 5px 0px #f5f5f5;

  ${props =>
    props.primary &&
    css`


background: #a8ff78;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #78ffd6, #a8ff78);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #78ffd6, #a8ff78); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
padding: 10px;


position: absolute;
left: 50%;
margin-left: -175px;
 background-repeat: no-repeat;
        background-size: cover;
        overflow-Y: scroll;
width: 425px;
        height: 600px;
        color: #f5f5f5;
        text-shadow: 0px 1px 5px #003F7F;
.flipped-card {



  *{

  border 1px solid #fff;
}


display: grid; 
grid-template-columns: 1fr 1fr;


text-align: left
p {
  padding: 15px;

  margin-bottom: 8px;
}


}

&:hover {
    background-color: #222;
    .flip-button {
      display: block;
      margin-bottom: 60%;
    }

    img {
      opacity: 0;
    }
    width: 425px;
    height: 650px;
  }

.power-stats {
  *{
    box-sizing: border-box;
  border 1px solid #fff;
  text-align: left;

}
  display: grid; 

grid-template-columns: 1fr 1fr;

}
    
img {
    border-radius: 50%;
    height: 150px;
    width: 150px;
 
  }
  li {
  padding: 15px;
}


    `}

  button {
    padding: 10px;
    border-radius: 8px;
    background-color: #f5f5f5;
  }
`;

export default HeroCardWrapper;
