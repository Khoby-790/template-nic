import React from "react";
import ClipLoader from "react-spinners/GridLoader";
import nicLogo from "../assets/nic-logo.png";

interface Props {}

const Loader = (props: Props) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative h-20 w-20 flex">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
        <img src="./images/nic-logo.png" alt="" />
      </div>
    </div>
  );
};

export default Loader;
