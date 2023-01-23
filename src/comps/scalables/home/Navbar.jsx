import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-white ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <img src={Logo} alt="Talntsapp" />
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/about"
                  className=" text-gray-900 inline-flex items-center px-1 pt-1  text-base font-medium"
                >
                  Company
                </Link>
                <Link
                  to="/faqs"
                  className="border-transparent text-gray-900  inline-flex items-center px-1 pt-1  text-base font-medium"
                >
                  FAQs
                </Link>
                <Link
                  to="/contact"
                  className="border-transparent text-gray-900  inline-flex items-center px-1 pt-1  text-base font-medium"
                >
                  Contact
                </Link>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 cursor-pointer  outline-none ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as={Link}
                to="/about"
                className="text-gray-900   block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Company
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="/faqs"
                className="border-transparent text-gray-900   block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                FAQs
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="/contact"
                className="border-transparent text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
