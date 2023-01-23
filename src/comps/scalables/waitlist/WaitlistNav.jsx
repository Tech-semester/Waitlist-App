import { Disclosure } from "@headlessui/react";
import Talntsapp from "../../assets/images/logo.png";

const WaitlistNav = () => {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-left h-16">
              <div className="flex-1 flex ">
                <div className="flex-shrink-0 flex items-start pt-3">
                  <a href="/" rel="noopener noreferrer">
                    <img className="z-50" src={Talntsapp} alt="Talntsapp" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default WaitlistNav;
