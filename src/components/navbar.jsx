import Logo2 from "../../public/png/logo2.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Example from "./example";
import "flowbite";
import Modal from "./modal";

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const [open, setOpen] = useState(false);

  const handleOnClose = () => setOpen(false);

  const [clickForm, setClickForm] = useState(false);
  const handleClick = () => setClickForm(false);

  return (
    <>
      <header className="fixed max-w-full container mx-auto z-30 shadow-lg bg-white">
        <main className="flex justify-between gap-12 ml-4 mr-4">
          <Link to="/">
            <img
              className="cursor-pointer mx-auto w-[130px] "
              src={Logo2}
              alt=""
            />
          </Link>

          <nav className="class-hide-nav mt-7">
            <div className="flex justify-center gap-6 ">
              <Link
                to="/"
                className="text-[18px]  font-Roboto text-customBlue-para font-normal hover:text-customBlue-light"
              >
                {pathname === "/" ? (
                  <span className=" text-customBlue-light ">Home</span>
                ) : (
                  "Home"
                )}
              </Link>

              <Link
                to="/service"
                className="text-[18px]  font-Roboto font-normal text-customBlue-para hover:text-customBlue-light"
              >
                {pathname === "/service" ? (
                  <span className=" text-customBlue-light ">Services</span>
                ) : (
                  "Services"
                )}
              </Link>

              <Link
                to="/about-us/"
                className="text-[18px]  font-Roboto font-normal text-customBlue-para hover:text-customBlue-light"
              >
                {pathname === "/about-us/" ? (
                  <span className="text-customBlue-light">About Us</span>
                ) : (
                  "About Us"
                )}
              </Link>

              <Link
                to="/contact-us/"
                className="text-[18px]  font-Roboto font-normal text-customBlue-para hover:text-customBlue-light"
              >
                {pathname === "/contact-us/" ? (
                  <span className="text-customBlue-light"> Contact Us</span>
                ) : (
                  " Contact Us"
                )}
              </Link>
            </div>
          </nav>
          <div className="hidden lg:block self-center">
            <button
              onClick={() => setClickForm(true)}
              className="text-customBlue-light border font-medium w-[140px]  font-Roboto rounded-md hover:bg-customBlue-light hover:text-white h-[50px] self-center flex justify-center items-center cursor-pointer hover:zoom-in"
            >
              Get Started
            </button>
          </div>

          {clickForm && <Modal handleClick={handleClick} />}

          <div className="flex lg:hidden justify-end mt-6">
            <svg
              onClick={() => setOpen(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 bg-red rounded-md text-[#004750]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </main>

        <Example open={open} setOpen={handleOnClose} />
      </header>
    </>
  );
}

export default Navbar;
