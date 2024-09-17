import { Link } from "react-router-dom";
import Card1 from "../../public/png/card1.png";
import Card2 from "../../public/png/card2.png";
import Card3 from "../../public/png/card3.png";

function HomeCards() {
  return (
    <>
      <h2 className="text-center text-[#000000] text-[42px] font-Roboto mt-8 ">
        Types Of Projects
      </h2>

      <section className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 container mx-auto mt-8 mb-8">
        
        <div className="border ">
          <img src={Card1} alt="" className="w-full" />
          <h3 className="text-black text-[20px] font-Roboto font-medium  p-2">
            Residential Plumbing
          </h3>
          <div className="h-[110px] overflow-auto">
          <p className="text-[#545454] text-[16px] font-Roboto font-light p-2">
            A residential plumbing system can be succinctly described by
            focusing on two essential components: the water supply line and the
            drainage line.{" "}
          </p>
          </div>
          <Link
            to="/"
            className="inline-flex justify-start gap-2 text-customBlue-light p-2 hover:animate-bounce"
          >
            <span>Read more</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 mt-[2px] "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </Link>
        </div>
       
        <div className="border ">
          <img src={Card2} alt="" className="w-full" />
          <h3 className="text-black text-[20px] font-Roboto font-medium  p-2">
            Commerical Plumbing
          </h3>
          <div className="h-[110px] overflow-auto">
          <p className="text-[#545454] text-[16px] font-Roboto font-light p-2">
            Commercial plumbing involves the installation, maintenance, and
            repair of plumbing systems in large buildings like offices and
            hospitals.
          </p>
          </div>
          <Link
            to="/"
            className="inline-flex justify-start gap-2 text-customBlue-light p-2 hover:animate-bounce"
          >
            <span>Read more</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 mt-[2px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </Link>
        </div>
        <div className="border ">
          <img src={Card3} alt="" className="w-full" />
          <h3 className="text-black text-[20px] font-Roboto font-medium  p-2">
            Drain Cleaning
          </h3>
          <div className="h-[110px] overflow-auto">
          <p className="text-[#545454] text-[16px] font-Roboto font-light p-2">
            Drain cleaning involves the removal of clogs and blockages in pipes
            to ensure proper water flow and prevent backups.
          </p>
          </div>
          <Link
            to="/"
            className="inline-flex justify-start gap-2 text-customBlue-light p-2 hover:animate-bounce"
          >
            <span>Read more</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 mt-[2px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomeCards;
