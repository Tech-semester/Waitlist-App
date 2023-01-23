import React from "react";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
import ios from "../../assets/images/ios.png";
import android from "../../assets/images/android.png";
import { Link } from "react-router-dom";

const navigation = {
  main: [
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
    { name: "Terms", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://facebook.com/ogamonihq",
      icon: facebook,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/ogamonihq",
      icon: instagram,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/ogamonihq",
      icon: linkedin,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/ogamonihq",
      icon: twitter,
    },
  ],
};
const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <h1 className="text-center font-extrabold leading-none text-4xl text-white pt-3 pb-5">
          Start Your Personal Finance Today!
        </h1>
        <div className="flex flex-row items-center justify-center pb-10">
          <div className="px-2">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={android} alt="ogamoni" />
            </a>
          </div>
          <div className="px-2">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={ios} alt="ogamoni" />
            </a>
          </div>
        </div>
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                to={item.href}
                className="text-base text-white hover:font-bold"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-xs text-gray-400">
          &copy; {date} Ogamoni Technologies Ltd, All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-HEIGHT-400 hover:text-gray-500"
            >
              <img
                src={item.icon}
                alt="ogamoni"
                className="h-6 w-6"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
