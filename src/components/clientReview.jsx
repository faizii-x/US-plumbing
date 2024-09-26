import Slider from "react-slick";
import { CLIENT_REVIEWS_DATA } from "../data";

function ClientReview() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: true,
    slidesToShow: 3,
    speed: 500,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const CustomSlider = CLIENT_REVIEWS_DATA.map((x) => (
    <>
      <div className="review-card-parent p-3 pb-12">
        <div className="review-card bg-white rounded-md p-6 ">
          <div className="flex justify-start gap-1 mb-3">
            {Array(x.stars)
              .fill()
              .map((index) => (
                <>
                  <img
                    key={index}
                    src={x.img}
                    alt=""
                    className="w-[13px] h-[12px] "
                  />
                </>
              ))}
          </div>
          <p className="text-[12px] font-Roboto font-normal h-[100px] overflow-auto">
            {x.para}
          </p>

          <div className="flex justify-start gap-3">
            <img src={x.imgMan} alt="" className="w-[40px] h-[40px]" />
            <div className="">
              <h4 className="text-[10px] font-Roboto font-bold mt-3">
                {x.name}
              </h4>
              <h4 className="text-[10px] font-Roboto font-light ">
                {x.designation}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  ));

  return (
    <>
      <section className="client-review-services-section bg-[#e6edfc] pt-[75px]">
        <h2 className="text-[38px] text-customBlue-light font-roboto font-medium text-center">
          What’s Our Client Say
        </h2>
        <div className="container mx-auto pt-16 ">
          <Slider {...settings}>{CustomSlider}</Slider>
        </div>
      </section>
    </>
  );
}

export default ClientReview;
