import FootLogo from "../../public/png/logo2.png";
import Facebook from "../../public/png/hmm.png";
import Linked from "../../public/png/dashyyy5.png";
import Instagram from "../../public/png/dashyyy4.png";
import Locate from "../../public/png/locate.png";
import Call from "../../public/png/call.png";
import Message from "../../public/png/message.png";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="footer w-full p-4">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-2 container mx-auto gap-2 ">
          <div className="col-span-2 mx-auto">
            <a href="/" onClick={handleScrollToTop}>
              <img src={FootLogo} alt="" className="w-[30%]" />
            </a>
            <p className="text-white text-[16px] w-[80%] font-Roboto">
              Bringing Your Plumbing Projects to Life. Trust our team of skilled
              professionals to deliver top-quality results, whether it's a large
              commercial project or a smaller residential one..
            </p>
            <div className="flex justify-start gap-4 mt-3">
              <div>
                <p className="text-white text-[18px] font-medium font-Roboto">
                  Follow Us
                </p>
              </div>
              <div className="flex justify-start gap-2">
                <img src={Linked} alt="" className="cursor-pointer" />
                <img src={Instagram} alt="" className="cursor-pointer  " />
                <img src={Facebook} alt="" className="cursor-pointer " />
              </div>
            </div>
          </div>
          <div className="col-span-1 mt-16">
            <p className="text-white text-[20px] font-bold font-Roboto">
              Quick Links
            </p>
            <ul className="text-white mt-4">
              <li className="hover:underline font-normal font-Roboto">
                <a href="/">Home</a>
              </li>
              <li className="mt-1 hover:underline font-normal font-Roboto">
                <a href="/about">About Us</a>
              </li>
              <li className="mt-1 hover:underline font-normal font-Roboto">
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 mt-16">
            <p className="text-white text-[20px] font-bold font-Roboto">
              Our Services
            </p>
            <ul className="text-white mt-4">
              <li className="hover:underline font-normal font-Roboto">
                <a href="/plumbing">Plumbing</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 mt-16">
            <p className="text-white text-[20px] font-bold font-Roboto">
              Contact Us
            </p>
            <div className="flex justify-start gap-2 mt-4">
              <img src={Locate} alt="" className="w-[20px] h-[26px]" />
              <p className="text-white font-Roboto">45-Las Angelas,New York</p>
            </div>
            <div className="flex justify-start gap-2 mt-2">
              <img src={Call} alt="" className="w-[20px] h-[20px]" />
              <a href="tel:+718 717 8306">
                <p className="text-white font-Roboto">+718 717 8306</p>
              </a>
            </div>
            <div className="flex justify-start gap-2 mt-2">
              <img src={Message} alt="" className="w-[24px] h-[19px]" />
              <a href="mailto:muhammad@mfbzone.com">
                <p className="text-white font-Roboto">muhammad@mfbzone.com</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ..................... */}
      <div className="p-1">
        <p className="text-black text-[16px] text-center font-Roboto">
          Copyright © 2024 SM Electric Designed By{" "}
          <span className="cursor-pointer">
            <span className="text-[#02F002]">MF</span>{" "}
            <span className="text-[#FF6400]">Bzone</span>
          </span>
        </p>
      </div>
    </>
  );
}

export default Footer;
