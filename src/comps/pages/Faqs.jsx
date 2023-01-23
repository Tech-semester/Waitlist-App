import React from "react";
import Navbar from "../scalables/home/Navbar";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "What is Ogamoni all About?",
    answer:
      "Ogamoni is a personal finance app founded to help everyone manage their finance in a smart way without stress. We want to give you the best finance tool all in one place to help you get the work done.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Faqs = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50">
        <div className="w-full h-72 greenbg flex justify-center items-center flex-col">
          <h2 className="text-center text-5xl font-extrabold text-white ">
            Frequently asked questions
          </h2>
          <p className="text-center py-1 text-white font-light text-xs">
            Need Answers ?,Find them here.
          </p>
        </div>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:py-8 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-extrabold text-lg  text-gray-900">
                            {faq.question}
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            {open ? (
                              <MinusIcon
                                className={classNames(
                                  open ? "-rotate-180" : "rotate-0",
                                  "h-6 w-6 transform"
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className={classNames(
                                  open ? "-rotate-180" : "rotate-0",
                                  "h-6 w-6 transform"
                                )}
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-gray-500">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
