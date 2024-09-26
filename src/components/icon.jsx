import { useEffect } from "react";
import Icon1 from "../../public/png/icon1.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Icon() {

  useEffect(() => {
    const initializeAos = () => {
      if (window.innerWidth > 768) {
        // Adjust the breakpoint as needed
        Aos.init({ duration: 1500, disable: false });
      } else {
        Aos.init({ disable: true });
      }
    };

    initializeAos();

    const handleResize = () => {
      if (window.innerWidth > 768) {
        Aos.refreshHard(); // Re-enable AOS on larger screens
      } else {
        Aos.init({ disable: true }); // Disable AOS on smaller screens
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="bg-[#F6F6F6] sm:p-16 p-3">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 container mx-auto">
          <div className="bg-white p-8" data-aos="fade-right">
            <img src={Icon1} alt="" className="mx-auto mb-6" />
            <p className="text-[20px] font-Roboto font-medium text-center mb-4">
              Lots of Plumbers
            </p>
            <p className="text-[16px] font-Roboto font-light text-center">
              Our company provides skilled and reliable plumbers who are
              licensed and committed to delivering high-quality work.{" "}
            </p>
          </div>
          {/* ..................... */}
          <div className="bg-white p-8" data-aos="fade-up">
            <img src={Icon1} alt="" className="mx-auto mb-6" />
            <p className="text-[20px] font-Roboto font-medium text-center mb-4">
              We are Trusted
            </p>
            <p className="text-[16px] font-Roboto font-light text-center">
              We are a trusted provider in the plumbing industry, known for our
              expertise, reliability, and commitment to delivering top-notch
              service.
            </p>
          </div>
          {/* ....................... */}
          <div className="bg-white p-8" data-aos="fade-left">
            <img src={Icon1} alt="" className="mx-auto mb-6" />
            <p className="text-[20px] font-Roboto font-medium text-center mb-4">
              Best Supports
            </p>
            <p className="text-[16px] font-Roboto font-light text-center">
              We provide the best support in plumbing, offering expert
              solutions, responsive service, and personalized care to meet all
              your needs efficiently and effectively.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Icon;
