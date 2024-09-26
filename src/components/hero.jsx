import { Link } from "react-router-dom";
import Slider from "react-slick";

function Hero() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
   
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slider-parent bg-cover bg-center imagebg">
            <div className="container mx-auto">
            <div className=" w-full h-auto sm:h-[541px] flex sm:justify-end justify-start  ">
              <div className="sm:w-[50%] w-full self-center ">
                <h1 className="  md:mt-0 mt-[100px] text-customBlue-light text-[42px] font-Roboto font-bold leading-[50px]">
                  Reliable Plumbing Solutions
                </h1>
                <p className="text-white mt-3  font-light text-[18px]">
                  Experience efficient and safe demolition solutions tailored to
                  your needs. Our expert team ensures precise execution and
                  meticulous site management for every project.
                </p>
                <Link to="/">
                  <button className="mb-3 font-medium text-customBlue-light hover:bg-customBlue-light hover:text-white  bg-transparent border border-customBlue-light w-[150px] flex justify-center items-center mt-6 p-3 cursor-pointer rounded-lg">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            </div>
          </div>
          <div className="slider-parent bg-cover bg-center imagebgg">
            <div className="container mx-auto">
            <div className=" w-full  h-auto sm:h-[541px] flex justify-start  ">
              <div className="sm:w-[50%] w-full self-center  ">
                <h1 className="  md:mt-0 mt-[100px] text-customBlue-light text-[42px] font-Roboto font-bold leading-[50px]">
                  Reliable Plumbing Solutions
                </h1>
                <p className="text-white mt-3  font-light text-[18px]">
                  Experience efficient and safe demolition solutions tailored to
                  your needs. Our expert team ensures precise execution and
                  meticulous site management for every project.
                </p>
                <Link to="/">
                  <button className="mb-3 font-medium text-customBlue-light hover:bg-customBlue-light hover:text-white bg-transparent border border-customBlue-light w-[150px] flex justify-center items-center mt-6 p-3 cursor-pointer rounded-lg">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Hero;
