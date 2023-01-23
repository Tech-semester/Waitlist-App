import React from "react";
import Footer from "../scalables/home/Footer";
import Navbar from "../scalables/home/Navbar";
import Reminderbill1 from "../assets/images/reminderbill1.png";
import Reminderbill2 from "../assets/images/reminderbill2.png";

const people = [
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  // More people...
];

const About = () => {
  return (
    <>
      <Navbar />
      <div className="py-8">
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          <div>
            <div className="flex justify-center items-center overflow-hidden">
              <img src={Reminderbill1} alt="ogamoni" className="" />
            </div>
          </div>
          <div>
            <div className="space-y-5 pt-40 pb-4 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-4xl text-center font-extrabold tracking-tight sm:text-4xl">
                About Ogamoni
              </h2>
              <p className="text-sm font-light text-center  text-gray-900">
                <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                  <p className="text-sm font-light text-center  text-gray-900">
                    Ogamoni is a personal finance app founded to help everyone
                    manage their finance in a smart way without stress. We want
                    to give you the best finance tool all in one place to help
                    you get the work done.
                  </p>
                  <p className="text-sm font-light text-center  text-gray-900">
                    You don’t need to be a professional before you can take your
                    personal finance to the next level, it’s all about clicking
                    to get it done fast.
                  </p>
                  <p className="text-sm font-light text-center  text-gray-900">
                    We have built our finance model around efficient and
                    scalable framework to provide a smooth and faster
                    experience.
                  </p>
                  <p className="text-sm font-light text-center  text-gray-900">
                    Ogamoni has discovered alot of Africans find it difficult to
                    manage their money, or remember what a particular money was
                    meant for.
                  </p>
                  <p className="text-sm font-light text-center  text-gray-900">
                    We are closing the gap between customers and personal
                    finance in a digital way.
                  </p>
                </div>
              </p>
              <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                <h2 className="text-3xl pt-8 text-center font-extrabold tracking-tight sm:text-4xl">
                  Our Mission
                </h2>
                <p className="text-sm font-light text-center  text-gray-900">
                  We see a world were personal finance change how we approach
                  money. Aimed at helping you plan how to accomplish goals, and
                  realizing your life dreams with all in one personal finance
                  tool.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center overflow-hidden">
              <img src={Reminderbill2} alt="ogamoni" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Meet Our Leadership Team
              </h2>
              <p className="text-sm font-light text-center  text-gray-900">
                We are dedicated people who will like to contribute to your
                journey by solving the most impactful issues with the best
                personal finance tool. We want your money to help you accomplish
                your goals.
              </p>
            </div>
            <ul
              className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <img
                      className="mx-auto h-24 w-24 rounded-full lg:w-32 lg:h-32"
                      src={person.imageUrl}
                      alt="ogamoni-team"
                    />
                    <div className="space-y-2">
                      <div className="text-xs  lg:text-sm">
                        <h3 className="text-xl font-bold">{person.name}</h3>
                        <p className="text-gray-600 font-light ">
                          {person.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
