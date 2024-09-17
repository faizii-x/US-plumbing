import { Link } from "react-router-dom";

function AboutBanner() {
  return (
    <>
      <section className="w-full h-auto  imagebgg11 relative overflow-hidden mb-8 ">
        <div className="text-container1 container mx-auto ">
          <p className="text-[40px] font-Roboto font-semibold text-white  mb-2 pt-8">
          Trustworthy  A1 Plumbing 
          </p>
          <p className="text-[22px] font-Roboto font-normal text-white  mb-8">
          Trustworthy A1 Plumbing is a reliable service provider known for using advanced technology and skilled professionals to deliver high-quality plumbing solutions with a focus on customer satisfaction and transparency

          </p>

          <Link
            to="/"
            className="border border-customBlue-light font-bold text-[18px] bg-white text-customBlue-light hover:bg-customBlue-light hover:text-white  p-3 mx-auto"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}

export default AboutBanner;
