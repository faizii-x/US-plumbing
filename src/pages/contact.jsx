import { useEffect } from "react";
import ContactBg from "../components/contactBg";
import ContactBody from "../components/contactBody";

function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <ContactBg />
      <ContactBody />
    </>
  );
}

export default Contact;
