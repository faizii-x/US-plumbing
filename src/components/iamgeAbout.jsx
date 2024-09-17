import Nonactive from "../../public/png/nonactive.png";
import Active from "../../public/png/active.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ImageAbout() {
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
      <div className="container mx-auto">
        <h3 className="text-[36px] font-Roboto font-semibold">
          MEET OUR <span className="text-customBlue-light">EXPERT TEAM</span>
        </h3>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-6">
          <div className="col-span-2" data-aos="fade-right">
            <p className="text-[#545454] font-Roboto text-[16px] mb-2">
              Collaborating with our skilled demolition and plumbing specialists
              provides invaluable insights into your property's structural and
              plumbing systems. Their expertise ensures prompt identification
              and resolution of potential issues, prioritizing the safety and
              functionality of your space.
            </p>
            <h4 className="text-black font-Roboto text-[28px] mb-2">
              Our team specializes in:
            </h4>

            <li className="text-[#545454] font-Roboto text-[20px]">
              Precision Demolition for Homes & Businesses
            </li>
            <li className="text-[#545454] font-Roboto text-[20px]">
              Plumbing Solutions for Renovations
            </li>
            <li className="text-[#545454] font-Roboto text-[20px]">
              Emergency Plumbing Repairs
            </li>

            <li className="text-[#545454] font-Roboto text-[20px] mb-1">
              Demolition Debris Disposal
            </li>

            <h4 className="text-black font-Roboto text-[28px] mb-16">
              Trust us for all your Demolition & Plumbing needs.
            </h4>
          </div>
          <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto relative" data-aos="fade-left">
            <img src={Active} alt="" />
            <img
              src={Nonactive}
              alt=""
              className="absolute -mt-24 left-24 lg:block hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageAbout;
