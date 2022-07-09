import React from "react";
import styled from "styled-components";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";

const Container = styled.div`
  height: 90%;
  background-image: linear-gradient(
      45deg,
      transparent 20%,
      lightgray 25%,
      transparent 25%
    ),
    linear-gradient(-45deg, transparent 20%, lightgray 25%, transparent 25%),
    linear-gradient(-45deg, transparent 75%, lightgray 80%, transparent 0),
    radial-gradient(#fbf1f1 2px, transparent 0);
  background-size: 20px 20px, 20px 20px;
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  }
`;
const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    height: 50%;
  }
`;
const Input = styled.input`
  width: 200px;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;
const TextArea = styled.textarea`
  width: 200px;
  padding: 20px;
  height: 60%;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 13px;
  }
`;
const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    padding: 10px;
    margin-top: 13px;
    font-size: 13px;
  }
`;
const Title = styled.h1`
  margin: 50px 50px;
  margin-left: 100px;
  margin-top: 0;
  @media only screen and (max-width: 480px) {
    margin: 20px;
  }
`;
const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;
const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;
const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 13px;
  }
`;
const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Question? <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>35 St, 91F St., Mandalay, Myanmar.</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>(+95)9 977 525 810</Text>
            <Text>(+95)9 798 610 046</Text>{" "}
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>miemiethaw9@gmail.com</Text>
            <Text>aungkyawnyunt.lashio@outlook.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
