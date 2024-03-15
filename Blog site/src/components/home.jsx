import HeroSection from "./herosection";
import Cards from "./cards";
import Testimonial from "./testimonial";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        style={{ paddingLeft: "0px", paddingRight: "0px" }}
      >
        <HeroSection />
        <Cards />
        <Testimonial />
      </Container>
    </>
  );
};

export default Home;
