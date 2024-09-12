import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <section className="w-full h-auto  imagebgg11 relative overflow-hidden mb-8 ">
        <div className="text-container ">
          <p className="text-[24px] font-Roboto font-normal text-white text-center mb-2 pt-8">
            If you need any emergency plumbing service, simply call our 24 hour
            emergency number
          </p>
          <p className="text-[42px] font-Roboto font-normal text-white text-center mb-8">
            Reliable Emergency Plumbing Service with Fair rates
          </p>

          <Link
            to="/"
            className="border border-customBlue-light font-bold text-[20px] bg-white text-customBlue-light flex justify-center items-center w-[160px] p-3 mx-auto"
          >
            123-456-789
          </Link>
        </div>
      </section>
    </>
  );
}

export default Banner;
