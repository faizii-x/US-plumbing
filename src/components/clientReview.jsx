import Slider from "react-slick";
// import Img from "../../public/png/img.png";
import David from "../../public/png/man1.png";
import Jenifer from "../../public/png/man2.png";
import Jesica from "../../public/png/man3.png";
import YellowStar from "../../public/png/yellowStar.png";

function ClientReview() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
    
  return (
    <>
      <section className="slider-container bg-[#e6edfc] mt-8 mb-8">
        <h2 className="text-[38px] text-customBlue-light font-roboto font-medium text-center pt-[30px]">
        What’s Our Client Say
        </h2>
        <div className="p-8 lg:w-[80%] w-full mx-auto">
          <Slider {...settings}>
            <div className="p-3">
              <div className="bg-white rounded-xl p-6 lg:h-[300px] h-auto">
                <p className="text-[20px] font-roboto font-normal">
                 
                  “Simply the best. Better than all the rest. I’d recommend A1 plumbing service  they are best in the market .”
                </p>
                <div className="flex justify-start gap-3 mt-[90px]">
                  <div>
                    <img src={Jenifer} alt="" className="w-[70px] h-[70px]" />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-roboto font-bold mt-3">
                      Sarah Thompson
                    </h4>
                    <div className="flex justify-start ">
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[14px] h-[14px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[14px] h-[14px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[14px] h-[14px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[14px] h-[14px]"
                      />
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="bg-white rounded-xl p-6 lg:h-[300px] h-auto">
                <p className="text-[20px] font-roboto font-normal">
                “A1 plumbing service provides high-quality work, quick response times, transparent pricing, and professional customer service.”
                </p>
                <div className="flex justify-start gap-3 mt-[90px]">
                  <div>
                    <img src={David} alt="" className="w-[70px] h-[70px]" />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-roboto font-bold mt-3">
                      David Johnson
                    </h4>
                    <div className="flex justify-start ">
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[14px] h-[14px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[14px] h-[14px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[14px] h-[14px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[14px] h-[14px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[14px] h-[14px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="bg-white rounded-xl p-6 lg:h-[300px] h-auto">
                <p className="text-[20px] font-roboto font-normal">
                “I recently hired A1 Plumbing for a major plumbing issue at my home, and I couldn't be more satisfied with their service! From the moment I called, their team was prompt, professional, and courteous..”
                </p>
                <div className="flex justify-start gap-3 mt-8">
                  <div>
                    <img src={Jesica} alt="" className="w-[70px] h-[70px]" />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-roboto font-bold mt-3">
                      Michael Brown
                    </h4>
                    <div className="flex justify-start ">
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[14px] h-[14px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[14px] h-[14px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[14px] h-[14px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[14px] h-[14px]"
                      />
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </Slider>
        </div>
      </section>
    </>
  );
}

export default ClientReview;
