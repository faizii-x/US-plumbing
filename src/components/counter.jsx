import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import Aos from "aos";
import "aos/dist/aos.css";

function Counter() {
  const formatValue = (value) => `${value}`;
  const [isAnimated, setIsAnimated] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef(null);

  const handleScroll = () => {
    const element = counterRef.current;

    if (element) {
      const top = element.getBoundingClientRect().top;
      const bottom = element.getBoundingClientRect().bottom;

      const isVisible = top < window.innerHeight && bottom >= 0;
      if (isVisible) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isInView && !isAnimated) {
      setIsAnimated(true);
    }
  }, [isInView, isAnimated]);

  const resetAnimation = () => {
    setIsAnimated(false);
  };

  useEffect(() => {
    const initializeAos = () => {
      if (window.innerWidth > 768) {
        // Adjust the breakpoint as needed
        Aos.init({ duration: 1000, disable: false });
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
      <section className="imagebgg110 mb-8">
        <h3 className="text-center font-Roboto font-bold text-white text-[40px]" data-aos="fade-down">
          ACHEIVEMENTS
        </h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-16 w-full mt-5 container mx-auto" data-aos="fade-down">
          <div className="bg-white rounded-md p-3">
            <div className="flex items-center gap-4 justify-start">
              {/* <p className="border-r-2 border-customGreen-light w-[40px] h-[40px] lg:block hidden"></p> */}
              <div className="flex justify-center items-center mx-auto gap-1">
                {/* <p className="text-white text-[40px] font-Roboto font-medium">20</p> */}
                <CountUp
                  className="text-customBlue-light font-bold font-Roboto text-[40px]"
                  start={0}
                  end={20}
                  duration={10}
                  formattingFn={formatValue}
                  redraw={true}
                  step={20}
                />
                <p className="text-customBlue-light font-bold text-[40px] font-Roboto">
                  +
                </p>
              </div>
            </div>
            <p className="text-customBlue-light text-center text-[20px] font-Roboto ">
              STAFF
            </p>
          </div>
          {/* ......................... */}

          <div className="bg-white rounded-md p-3">
            <div className="flex items-center gap-4 justify-start">
              {/* <p className="border-r-2 border-customGreen-light w-[40px] h-[40px] lg:block hidden"></p> */}
              <div className="flex justify-center items-center mx-auto gap-1">
                {/* <p className="text-white text-[40px] font-Roboto font-medium">20</p> */}
                <CountUp
                  className="text-customBlue-light font-bold font-Roboto text-[40px]"
                  start={0}
                  end={100}
                  duration={20}
                  formattingFn={formatValue}
                  redraw={true}
                  step={20}
                />
                <p className="text-customBlue-light font-bold text-[40px] font-Roboto">
                  +
                </p>
              </div>
            </div>
            <p className="text-customBlue-light text-center text-[20px] font-Roboto ">
              CLIENTS
            </p>
          </div>
          {/* .............................. */}
          <div className="bg-white rounded-md p-3">
            <div className="flex items-center gap-4 justify-start">
              {/* <p className="border-r-2 border-customGreen-light w-[40px] h-[40px] lg:block hidden"></p> */}
              <div className="flex justify-center items-center mx-auto gap-1">
                {/* <p className="text-white text-[40px] font-Roboto font-medium">20</p> */}
                <CountUp
                  className="text-customBlue-light font-bold font-Roboto text-[40px]"
                  start={0}
                  end={500}
                  duration={20}
                  formattingFn={formatValue}
                  redraw={true}
                  step={20}
                />
                <p className="text-customBlue-light text-[40px] font-Roboto">
                  +
                </p>
              </div>
            </div>
            <p className="text-customBlue-light text-center text-[20px] font-Roboto ">
              PROJECTS
            </p>
          </div>
        </div>
        <p className="text-center text-white container font-medium text-[24px] mx-auto mt-4" data-aos="fade-down">
          Empowering Excellence: Our goal is simple – to be your top choice for
          demolition and plumbing services. We prioritize safety,
          sustainability, and client satisfaction in every project, ensuring
          unmatched quality and reliability.
        </p>
      </section>
    </>
  );
}

export default Counter;
