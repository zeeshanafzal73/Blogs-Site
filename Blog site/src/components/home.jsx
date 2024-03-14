import NAVBAR from "./navbar/nav";
import HeroSection from "./herosection";
import Cards from "./cards";

const Home = ({ theme }) => {
  return (
    <>
      <NAVBAR theme={theme} />
      <HeroSection />
      <Cards />
    </>
  );
};

export default Home;
