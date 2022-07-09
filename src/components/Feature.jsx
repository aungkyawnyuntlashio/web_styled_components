import React from "react";
import styled from "styled-components";
import App from "../img/app.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  height: 100vh;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;
const Left = styled.div`
@media only screen and (max-width:480px) {
  display: none;
}
  width: 50%;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width:480px) {
    width: 100%;
  }
`;

const Image = styled.img`
  /* width: 80%; */
  height: 100%;
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px){
    font-size: 50px;
  }
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 150px;
  border: none;
  padding: 10px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
  letter-spacing: 2px;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>good</b> design
          <br />
          <b>good</b> business
        </Title>
        <SubTitle>We know that good design means good business.</SubTitle>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
          mollitia? Aliquam ipsum optio inventore, maxime, dolores iure soluta
          aliquid deleniti velit quod totam in? Iste vel esse perspiciatis ex
          aliquam?
        </Desc>
        <Desc>
          Aliquam ipsum optio inventore, maxime, dolores iure soluta aliquid
          deleniti velit quod totam in?
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes/>
    </Container>
  );
};

export default Feature;
