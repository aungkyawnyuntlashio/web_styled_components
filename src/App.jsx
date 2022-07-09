import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(70% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 30% 100%, 0 100%);
  background-color: pink;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 30% 0%, 30% 100%, 0 100%);
  background-color: #f88497;
`;
const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(30% 0, 100% 0%, 100% 100%, 70% 100%);
  background-color: crimson;
`;

const ContactShape = styled.div`
  ${Shape}
  clip-path: polygon(70% 0, 100% 0%, 100% 100%, 30% 100%);
  background-color: gray;
`;

function App() {
  const smallScreen = window.screen.width <=480 ?true:false;
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape/>
      </Container>
      <Container>
        <Service />
        {!smallScreen&&<ServiceShape/>}
      </Container>
      <Container>
        <Price />
        <PriceShape/>
      </Container>
      <Container>
        <Contact />
        <Footer/>
      </Container>
    </>
  );
}

export default App;
