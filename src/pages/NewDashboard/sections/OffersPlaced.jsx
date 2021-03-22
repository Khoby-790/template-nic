import React from "react";
import { Link } from "react-router-dom";
import Ringcomponent from "../components/Ringcomponent";

const myData = [
  { type: "Offers", percent: 0.6666 },
  { type: "Claims", percent: 0.3334 },
];
const myContent = {
  siteCode: "Current",
  title: "Offers placed",
  percent: "66.66%",
};

const content2 = {
  siteCode: "Total",
  title: "Offers placed",
  percent: "66.66%",
};

const OffersPlaced = () => {
  return (
    <div className="bg-white mx-2 shadow-lg items-start flex jus">
      <Ringcomponent data={myData} content={myContent} />
      <Ringcomponent data={myData} content={content2} />
      <div className="mx-3 py-4 px-5 flex-col flex-1 flex justify-center items-center">
        <div className="flex justify-end w-full">
          <Link
            to="/claims"
            className=" flex justify-center h-full items-center px-4 cursor-pointer hover:bg-gray-400 rounded-full"
          >
            <svg
              className="h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>
        </div>
        <div className="flex mb-4 flex-col">
          <span className="text-2xl font-semibold">78,564</span>
          <span className="font-light text-gray-400">Current</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-semibold">78,564</span>
          <span className="font-light text-gray-400">Total</span>
        </div>
      </div>
    </div>
  );
};

export default OffersPlaced;
