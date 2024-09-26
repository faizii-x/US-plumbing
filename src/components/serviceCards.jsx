import { useEffect } from "react";
import Icon from "../../public/png/icon.png";
import a from "../../public/png/1.png";
import b from "../../public/png/2.png";
import c from "../../public/png/3.png";
import d from "../../public/png/4.png";
import Aos from "aos";
import "aos/dist/aos.css";

function ServiceCards() {
  useEffect(() => {
    const initializeAos = () => {
      if (window.innerWidth > 768) {
        // Adjust the breakpoint as needed
        Aos.init({ duration: 2000, disable: false });
      } else {
        Aos.init({ disable: true });
      }
    };

    initializeAos();

    const handleResize = () => {
      if (window.innerWidth > 768) {
        Aos.refreshHard();
      } else {
        Aos.init({ disable: true });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="container mx-auto pt-16 mb-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 content-center">
          <div className=" p-6 bg-white border" data-aos="fade-up">
            <img
              src={Icon}
              alt="Residential Plumbing Icon"
              className="mx-auto mb-4"
            />
            <h3 className="text-[22px] font-Roboto font-medium text-center mb-2">
              Residential Plumbing
            </h3>
            <p className="text-[16px] font-Roboto font-light text-[#969696] text-center ">
              <span className="text-customBlue-light ">A1 plumbing</span> offer
              reliable and efficient residential plumbing services, ensuring
              quick response times and trustworthy solutions for all your
              plumbing needs. Your satisfaction and home’s functionality are our
              top priorities.
            </p>
          </div>

          <div className=" p-6 bg-white border" data-aos="fade-up">
            <img
              src={a}
              alt="Commercial Plumbing Icon"
              className="mx-auto mb-4"
            />
            <h3 className="text-[22px] font-Roboto font-medium text-center mb-2">
              Commercial Plumbing
            </h3>
            <p className="text-[16px] font-Roboto font-light text-[#969696] text-center">
              <span className="text-customBlue-light">A1 plumbing</span> provide
              dependable and prompt commercial plumbing services, delivering
              quick and trustworthy solutions tailored to your business needs.
              Your operation's continuity and satisfaction are our priorities.
            </p>
          </div>

          <div className=" p-6 bg-white border" data-aos="fade-up">
            <img src={b} alt="Drain Cleaning Icon" className="mx-auto mb-4 " />
            <h3 className="text-[22px] font-Roboto font-medium text-center mb-2">
              Drain Cleaning
            </h3>
            <p className="text-[16px] font-Roboto font-light text-[#969696] text-center ">
              <span className="text-customBlue-light">A1 plumbing</span> offer
              fast and reliable drain cleaning services, ensuring your drains
              are cleared and functioning smoothly. Trust us for quick,
              hassle-free solutions to keep your plumbing in top condition.
            </p>
          </div>

          <div
            className=" p-6 bg-white border md:col-span-1"
            data-aos="fade-up"
          >
            <img src={c} alt="Leak Detection Icon" className="mx-auto mb-4 " />
            <h3 className="text-[22px] font-Roboto font-medium text-center mb-2">
              Leak Detection
            </h3>
            <p className="text-[16px] font-Roboto font-light text-[#969696] text-center ">
              <span className="text-customBlue-light">A1 plumbing</span>{" "}
              specialize in fast and accurate leak detection and repair
              services, ensuring your plumbing issues are resolved efficiently.
              Trust us for quick, reliable solutions to protect your home or
              business from water damage.
            </p>
          </div>

          <div className="p-6 bg-white border md:col-span-1" data-aos="fade-up">
            <img
              src={d}
              alt="Maintenance & Repair Icon"
              className="mx-auto mb-4"
            />
            <h3 className="text-[22px] font-Roboto font-medium text-center mb-2">
              Maintenance & Repair
            </h3>
            <p className="text-[16px] font-Roboto font-light text-[#969696] text-center">
              <span className="text-customBlue-light">A1 plumbing</span> provide
              comprehensive maintenance and repair services, ensuring your
              plumbing systems run smoothly and efficiently. Trust us for quick,
              reliable solutions to keep your home or business in top shape.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceCards;
