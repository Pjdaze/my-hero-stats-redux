import styled, { css } from "styled-components";

const HeroCardWrapper = styled.div`
  border-radius: 7px;
  background-color: #1d66bb;
  transition: all 500ms ease-in-out;

  .flip-button {
    margin: 1% auto;
    background-color: transparent;
    border: 2px solid #f5f5f5 !important;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    color: #f5f5f5;
    display: none;
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

  box-shadow: 0 0 5px 0px #f5f5f5;

  &:hover {
    background-color: #222;
    .flip-button {
      display: block;
      margin-bottom: 60%;
      transition: all 0.5s ease-in-out;
    }

    img {
      opacity: 0;
    }
  }
  /* primary starts here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

  ${props =>
    props.flipped &&
    css`

padding: 10px;
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

  transition: all 1s ease-in-out !important;

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



    .img-wrap {
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
.mama {
  box-shadow: 0px 0px 3px #fff;
}

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
background-color: #1d66bb;
    .flip-button {
      color: #fff;

      margin-bottom: 0;
      transition: all 1s ease-in-out;
   
      
    }


    img {
      opacity: 1;
    }

    `}

  button {
    transition: all 1s ease-in-out;
    padding: 10px;
    border-radius: 8px;
    background-color: #f5f5f5;
  }
`;

export default HeroCardWrapper;
