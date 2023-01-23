import React from "react";
import android from "../../assets/images/android.png";
import ios from "../../assets/images/ios.png";
import Dash01 from "../../assets/images/dash01.png";
import Ellipse4 from "../../assets/images/Ellipse4.png";
import Ellipse5 from "../../assets/images/Ellipse5.png";
import Ellipse6 from "../../assets/images/Ellipse6.png";
import Reminderbill from "../../assets/images/reminderbill.png";
import Budget from "../../assets/images/budget.png";
import { ChevronRightIcon } from "@heroicons/react/outline";

const supportLinks = {
  testimonial: [
    {
      name: "Ridwan Abiola",
      username: "ridwantil",
      img: Ellipse4,
      description:
        "The app is amazing, now i don’t have to worry about my bills again! Thanks for introducing the app to Africa and the world.",
    },
    {
      name: "Aminu Bisi",
      username: "Bissgiyrl",
      img: Ellipse5,
      description:
        "I don’t have to worry about bugeting, Ogamoni budget is the best and i will always recommend it to anyone who seek my advice for best budgeting app.",
    },
    {
      name: "Amaka Ngozi",
      username: "Ngozifinace",
      img: Ellipse6,
      description:
        "Bill reminder feature helps me alot, i don’t have to forget when it time to pay for something at school, thanks for introducing this app to us.",
    },
  ],
  contact: [
    {
      topic: "Save for Bills",
      content:
        "Save for bills so you don’t spend the money with our save for bills feature, this will help you plan ahead for those bills you want to pay.",
      time: "Coming Soon",
    },
    {
      topic: "Business Finance",
      content:
        "Small businesses and startups can now manage their finance using the business finance feature, start managing your finance in just one-click.",
      time: "Coming Soon",
    },
  ],
};
const Section = () => {
  return (
    <div className="">
      <div className="mt-20">
        <div className="max-w-6xl mx-auto py-5 sm:px-2 sm:py-5 lg:px-4 greenpattern rounded-3xl ">
          <div className="max-w-2xl mx-auto px-6 lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
              <div>
                <h2 className="text-5xl font-extrabold tracking-tight py-2  text-white">
                  Oversee all your personal finance in one place.
                </h2>
                <p className="my-4 text-white  text-sm font-light">
                  Start managing your finance in a smart way, We are dedicated
                  to making personal finance seamless for Africans and the
                  world.
                </p>
                <div className="flex flex-row items-center justify-start pt-12  pb-10">
                  <div className="pr-2">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <img src={android} alt="ogamoni" />
                    </a>
                  </div>
                  <div className="pl-2">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <img src={ios} alt="ogamoni" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center overflow-hidden">
                <img src={Dash01} alt="ogamoni" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="max-w-6xl mx-auto py-5 sm:px-2 sm:py-5 lg:px-4 darkpattern rounded-3xl ">
          <div className="max-w-2xl mx-auto px-6 lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
              <div className="flex justify-center items-center overflow-hidden -mt-20">
                <img src={Reminderbill} alt="ogamoni" className="" />
              </div>
              <div>
                <h2 className="text-5xl font-extrabold tracking-tight py-2  text-white">
                  Bill Reminder
                </h2>
                <p className="my-1 text-white  text-base font-light">
                  Let’s remain you when it’s time to pay those bills, don’t ever
                  forget them again.
                </p>
                <div className=" text-white text-sm font-light ">
                  <ul className="list-disc pl-9">
                    <li>Download our Mobile App.</li>
                    <li> Create an Account or Login your Existing Account.</li>
                    <li>Click on the Bills Menu button.</li>
                    <li>Click on “Add New Bills”. </li>
                    <li>Fill Bill Information & Set due date.</li>
                    <li>Save Bills.</li>
                  </ul>
                </div>
                <p className="my-2 text-white  text-base font-light">
                  Get Notified When Bill is Due even if it’s 1 year ✌
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="max-w-6xl mx-auto py-5 sm:px-2 sm:py-5 lg:px-4 greenpattern rounded-3xl ">
          <div className="max-w-2xl mx-auto px-10 lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
              <div>
                <h2 className="text-5xl font-extrabold tracking-tight py-2  text-white">
                  Smart Budget
                </h2>
                <p className="my-1 text-white  text-base font-light">
                  Use our smart budgeting feature to plan how to spend and use
                  your money wisely.
                </p>
                <div className=" text-white text-sm font-light ">
                  <ul className="list-disc pl-6">
                    <li>Download our Mobile App.</li>
                    <li> Create an Account or Login your Existing Account.</li>
                    <li>Click on the Bills Menu button.</li>
                    <li>Click on “Get Started”. </li>
                    <li>Start Budgeting</li>
                    <li>Save Bills.</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center overflow-hidden lg:-mt-20">
                <img src={Budget} alt="ogamoni" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className=" max-w-6xl pt-14 mx-auto relative z-10 pb-10 "
        aria-labelledby=""
      >
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.contact.map((link) => (
            <div
              key={link.topic}
              className="flex flex-col darkpattern rounded-2xl shadow-xl"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="text-4xl font-bold py-4 text-white">
                  {link.topic}
                </div>
                <p className="mt-4 text-base font-light text-white">
                  {link.content}
                </p>

                <div className="pt-8 pb-4 cursor-pointer">
                  <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gray-100 text-gray-900">
                    {link.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className=" max-w-6xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <div className="text-center">
          <h1 className="text-gray-900 py-14 font-extrabold  text-6xl">
            What Our Happy <br />
            <span>Users Says</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.testimonial.map((link) => (
            <div
              key={link.name}
              className="flex flex-col bg-white rounded-2xl shadow-xl"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                    <img
                      className=" rounded-full"
                      src={link.img}
                      alt="ogamoni"
                    />
                  </div>
                  <div className="ml-2 mt-2">
                    <div className="text-base font-bold text-gray-900">
                      {link.name}
                    </div>
                    <div className="text-sm font-light text-gray-500">
                      @{link.username}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-base font-light text-gray-500">
                  {link.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center pt-12">
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-green-600 bg-white focus:outline-none ring-2 ring-offset-2 ring-green-600"
          >
            More Testimonials
            <ChevronRightIcon
              className="ml-3 -mr-1 h-5 w-5"
              aria-hidden="true"
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Section;
