import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Home from "../../assets/images/logo.png";
import Congrats from "../../assets/images/congrats.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";


const navigation = [
  {
    name: "LinkedIn",
    href: "",
    icon: linkedin,
  },
  {
    name: "Twitter",
    href: "",
    icon: twitter,
  },
];

const Success = ({ mailModal, setMailModal }) => {
  return (
    <div>
      <Transition.Root show={mailModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          open={mailModal}
          onClose={setMailModal}
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y- sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative inline-block align-center align-middle bg-blue-900 rounded-2xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="rounded-md text-white hover:text-white "
                    onClick={() => setMailModal(false)}
                  >
                    <span className="sr-only">Close</span>
                    {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */}
                  </button>
                </div>
                <div className=" py-8 flex justify-center items-center flex-col">
                  <div>
                    <img src={Home} className="z-50" alt="ogamoni" />
                  </div>
                  <div className="p-4 flex justify-center items-center flex-col  text-center">
                    <img
                      src={Congrats}
                      className="h-8 block  w-auto text-center"
                      alt="ogamoni"
                    />{" "}
                    <h1 className="text-white font-bold text-xl text-center">
                      Congratulations
                      <br /> You have been added to our waitlist !!
                    </h1>
                    <p className="pt-8 text-white text-sm">
                      You'd be updated as soon as we launch. Don't Forget to
                      follow us on our social media handles for latest update
                    </p>
                    <div className="flex justify-evenly items-center"></div>
                  </div>

                  <div className="flex justify-center items-center   space-x-6 ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="sr-only">{item.name}</span>
                        <img
                          src={item.icon}
                          className="z-50"
                          aria-hidden="true"
                          alt="ogamoni"
                        />
                      </a>
                    ))}
                  </div>
                  <div>
                    <div className="mt-5">
                      <button
                        type="submit"
                        onClick={() => setMailModal(false)}
                        className="w-full mt-1 flex justify-center py-3 px-10  border-transparent bg-white text-blue-700 rounded-md shadow-sm text-xs font-bold  outline-none "
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Success;
