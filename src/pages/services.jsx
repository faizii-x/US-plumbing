import ClientReview from "../components/clientReview";
import ServiceCards from "../components/serviceCards";
import ServiceHero from "../components/serviceHero";
import ContactHome from "../components/contactHome";
import OurProjects from "../components/ourProjects";
import { useEffect } from "react";

function Services() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <ServiceHero />
      <ServiceCards />
      <OurProjects />
      <ClientReview />
      <ContactHome />
    </>
  );
}

export default Services;
