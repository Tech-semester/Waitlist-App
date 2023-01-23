import React from "react";

const WaitlistFooter = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="bottom-0 fixed w-full">
      <div>
        <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8 ">
          <div className="mt-2 font-bold text-black xl:order-1 lg:order-1 md:order-2">
            <p className="text-center text-base">
              <a href="/" rel="noopener noreferrer">
                &copy; {date} Team Techsemester.
              </a>
            </p>
          </div>
          <div className="hidden lg:block text-center xl:order-2 lg:order-2 md:order-1 ">
            <div className="flex justify-center items-center pt-4 -mb-24  "></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WaitlistFooter;
