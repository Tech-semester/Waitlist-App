import React, { useState, useContext, useLayoutEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import { useSnackbar } from "react-simple-snackbar";
import WaitlistFooter from "./WaitlistFooter";
import Mac from "../../assets/images/Mac.png";
import iPhone from "../../assets/images/iPhone.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";

const navigation = [
  {
    name: "LinkedIn",
    href: "/",
    icon: linkedin,
  },
  {
    name: "Twitter",
    href: "/",
    icon: twitter,
  },
];

const options = {
  position: "top-center",
  style: {
    backgroundColor: "white",
    border: "2px solid white",
    color: "red",
    fontSize: "16px",
    fontWeight: "600",
    borderRadius: "5px",
    textAlign: "center",
  },
  closeStyle: {
    color: "red",
    fontSize: "16px",
  },
};
const WaitlistBody = ({ setMailModal }) => {
  const [openSnackbar] = useSnackbar(options);

  const authContext = useContext(AuthContext);

  const { waitlist, message, clearWaitlist } = authContext;
  const [user, setUser] = useState({
    email: "",
  });

  const { email } = user;

  useLayoutEffect(() => {
    if (message === "user subscribed successfully") {
      setMailModal(true);
    }

    setTimeout(() => {
      clearWaitlist();
      setMailModal(false);
    }, 60000);

    // eslint-disable-next-line
  }, [message]);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const regexEmail = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    if (email === "") {
      return openSnackbar(<p>Kindly fill all fields</p>, 2000);
    } else if (!regexEmail.test(email)) {
      return openSnackbar(<p>Invalid Email Address</p>, 2000);
    } else {
      // setMailModal(true);
      // waitlist({
      //   email: email,
      //   status: "subscribed",
      // });
    }
  };
  return (
    <>
      <div className="">
        <div>
          <div className="mt-4">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-10 lg:max-w-none lg:mx-0 lg:px-0 ">
                <div>
                  <div className="mt-6">
                    <h2 className="text-4xl pt-4 font-extrabold tracking-tight text-black">
                      One-stop app to <br />
                      <span className="text-blue-800 text-5xl">
                        Start, Grow and Monetize
                      </span>{" "}
                      <br />
                      your career in tech
                    </h2>

                    <div>
                      <form>
                        <div className="mt-4 relative flex items-center">
                          <input
                            autoComplete="off"
                            aria-autocomplete="none"
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Enter your email address"
                            className=" py-4 pl-3 bg-transparent text-black border-2 outline-none pr-40 placeholder:text-black block w-full  text-sm font-bold border-gray-200 rounded-full"
                          />
                          <div className="absolute  right-0 flex py-3 -mr-1">
                            <p
                              onClick={onSubmit}
                              className="inline-flex bg-gradient-to-r from-purple-600 py-4 rounded-full to-indigo-600 bg-origin-border px-6  border border-transparent text-base font-medium  shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                            >
                              Join Waitlist
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="flex justify-start py-3 ">
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
                            className="z-50 px-2"
                            aria-hidden="true"
                            alt="Talntsapp"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 ">
                <div className="pr-4 sm:pr-6  lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img className="h-70 w-full" src={Mac} alt="Talntsapp" />
                  <div className="">
                    <img
                      className="right-0 absolute -mt-48 w-200 "
                      src={iPhone}
                      alt="Talntsapp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WaitlistFooter />
    </>
  );
};

export default WaitlistBody;
