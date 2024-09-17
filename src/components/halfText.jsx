import { Link } from "react-router-dom";
import Pic1 from "../../public/png/pic1.png";
import Pic2 from "../../public/png/pic2.png";
import Pic3 from "../../public/png/pic3.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function HalfText() {
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
    <section className="bg-[#c7d9fc] p-8 mb-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 container mx-auto mt-8 mb-24">
        <div className="col-span-2">
          <h3 className="text-black text-[42px] font-Roboto font-semibold mb-2">
            WHO <span className="text-customBlue-light ">WE ARE ?</span>
          </h3>
          <p
            className="text-[#545454] text-[18px] font-Roboto font-light mb-24"
            data-aos="fade-right"
          >
            At A1 Demolition & Plumbing, our top priority is to ensure your
            satisfaction with our services. Our dedicated team is committed to
            meeting your needs and exceeding your expectations. From start to
            finish, we strive to make your experience with us a positive one.
            Get in touch with us today, and let us handle your demolition and
            plumbing needs with expertise and care.
          </p>
          <Link
            to="/"
            className="font-medium text-customBlue-light hover:bg-customBlue-light hover:text-white  bg-transparent border border-customBlue-light w-[150px] flex justify-center items-center p-3 cursor-pointer rounded-lg"
          >
            View more
          </Link>
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-1 ">
          {/* <div className="flex justify-end lg:justify-center h-[100%] lg:h-[600px] "> */}
            <div className="relative w-[90%] h-[100%] ">
              <img
                src={Pic1}
                alt=""
                className="w-[60%]  left-[10%] absolute bottom-[80px] z-10"
                data-aos="fade-up"
              />
              <img src={Pic2} alt="" className="w-[60%]" data-aos="fade-down" />
              <img
                style={{ transform: `translateY(-50%)` }}
                src={Pic3}
                alt=""
                className="lg:w-[60%] xl:w-[70%] w-[50%] absolute  top-[40%] right-0 "
                data-aos="fade-left"
              />
            </div>
          {/* </div> */}
        </div>
      </div>
      </section>
    </>
  );
}

export default HalfText;
