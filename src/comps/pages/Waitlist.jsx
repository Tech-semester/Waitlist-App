import React from "react";
import WaitlistNav from "../scalables/waitlist/WaitlistNav";
import WaitlistBody from "../scalables/waitlist/WaitlistBody";
const Waitlist = ({ mailModal, setMailModal }) => {
  return (
    <>
      <WaitlistNav />
      <WaitlistBody {...{ mailModal, setMailModal }} />
    </>
  );
};

export default Waitlist;
