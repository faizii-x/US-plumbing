import { useEffect } from "react";
import Banner from "../components/banner";
import ContactHome from "../components/contactHome";
import Emergency from "../components/emergency";
import HalfText from "../components/halfText";
import Hero from "../components/hero";
import HomeCards from "../components/homeCards";
import Icon from "../components/icon";

function Landing() {
  // To bring page to top on page render
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Hero />
      <HomeCards /> 
      <HalfText />
      <Emergency />
      <Banner />
      <Icon />
      <ContactHome />
    </>
  );
}

export default Landing;
