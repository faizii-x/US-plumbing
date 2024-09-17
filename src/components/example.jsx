import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Logo from "../../public/png/logo2.png";
import { Link } from "react-router-dom";
import Modal from "./modal";

export default function Example({ open, setOpen  }) {
  const [hello, setHello] = useState(false);

  const openModal = () => {
    setHello(true);
  };

  const closeModal = () => {
    setHello(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 " />
        </Transition.Child>
        <div className="">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-xs pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-1 right-2  flex">
                      <button
                        type="button"
                        className="rounded-md text-white hover:text-white focus:outline-none focus:ring-1 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex  h-full flex-col overflow-y-scroll bg-[#393A3B] z-50 py-6 shadow-xl">
                    <div className="container grid grid-cols-1 p-3">
                      <Link to="/">
                        <img src={Logo} />
                      </Link>
                      <Link to="/">
                        <p className="hover:text-hover  text-white pt-5">
                          Home
                        </p>
                      </Link>

                      <Link
                        to="/service/"
                        className="hover:text-hover  text-white pt-5"
                      >
                        Services
                      </Link>

                      <Link
                        to="/about-us/"
                        className="hover:text-hover font-montserrat text-white pt-5"
                      >
                        About Us
                      </Link>

                      <Link
                        to="/contact-us/"
                        className="hover:text-hover font-montserrat text-white pt-5"
                      >
                        Contact
                         </Link>

                      <button
                        onClick={openModal}
                        className="mt-[18px] w-[149px] h-[42px] bg-white hover:bg-[#15A7AD] font-inter text-[16px] text-black rounded-[15px]"
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                  {hello && <Modal closeModal={closeModal} />}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
