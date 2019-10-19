import styled, { css } from "styled-components";

const HeroCardWrapper = styled.div`
  border-radius: 7px;
  background-color: #1d66bb;
  transition: ALl 500ms ease-in-out;
  &:hover {
    background-color: #222;
    .flip-button {
      display: block;
      margin-bottom: 60%;
    }

    img {
      opacity: 0;
    }
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

  /* primary starts here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

  ${props =>
    props.primary &&
    css`


#303b47;
padding: 10px;



border: 1px solid orange;

 background-repeat: no-repeat;
        background-size: cover;




width: 95%;
max-width: 350px;
margin: 200px auto;

height: 450px;
overflow-Y: scroll;

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



    img {

    }
 
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


&:hover {
background-color: #222;
    .flip-button {
      color: #222;
      display: block;
      margin-bottom: 0;
      
    }


    img {
      opacity: 1;
    }

    `}

  button {
    padding: 10px;
    border-radius: 8px;
    background-color: #f5f5f5;
  }
`;

export default HeroCardWrapper;
