import React from "react";
import { Link } from "react-router-dom";
import { CustomeAreaChart } from "../../../components";

interface Props { }

const data = [
  {
    name: "Jan",
    paid: 3000,
    outstanding: 1000,
    total: 4000,
  },
  {
    name: "Feb",
    paid: 3000,
    outstanding: 1598,
    total: 3000 - 1598,
  },
  {
    name: "Mar",
    paid: 0,
    outstanding: 9800,
    total: 9800,
  },
  {
    name: "Apr",
    paid: 2780,
    outstanding: 3908,
    total: 2000,
  },
  {
    name: "May",
    paid: 1890,
    outstanding: 4800,
    total: 2181,
  },
  {
    name: "Jun",
    paid: 2390,
    outstanding: 3800,
    total: 2500,
  },
  {
    name: "Jul",
    paid: 3490,
    outstanding: 4300,
    total: 2100,
  },
  {
    name: "Aug",
    paid: 4000,
    outstanding: 2400,
    total: 2400,
  },
  {
    name: "Sep",
    paid: 3000,
    outstanding: 1398,
    total: 2210,
  },
  {
    name: "Oct",
    paid: 2000,
    outstanding: 9800,
    total: 2290,
  },
  {
    name: "Nov",
    paid: 2780,
    outstanding: 3908,
    total: 2000,
  },
  {
    name: "Dec",
    paid: 1890,
    outstanding: 4800,
    total: 2181,
  },
];

const lines = [
  { dataKey: "total", name: "Total Claims", width: 2, stroke: "#A1C181" },
  { dataKey: "paid", name: "Paid Claims", width: 2, stroke: "#FE7F2D" },
  {
    dataKey: "outstanding",
    name: "Outstanding Claims",
    width: 2,
    stroke: "#619B8A",
  },
];

const ClaimsSection = (props: Props) => {
  return (
    <div className="bg-white shadow-lg my-4 mb-4 mx-2">
      <div className="lg:h-16 h-auto flex flex-col lg:flex-row justify-between py-2 px-3">
        <div className="flex">
          <div className=" mr-3">
            <svg
              className="h-8 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold ">Claims</span>
            <span className="text-md font-light">
              Brief But detailed description of claims in it's enirety
            </span>
          </div>
        </div>
        <div className="flex justify-between my-3 lg:my-0">
          <div className="flex border text-md mr-2 p-2 mb-1 rounded items-baseline">
            <label className="mr-3 text-md" htmlFor="">
              Filter by currency
            </label>
            <select className="text-md" name="" id="">
              <option value="">GHC</option>
              <option value="">USD</option>
              <option value="">EUR</option>
            </select>
          </div>
          <Link
            to="/app/claims"
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
      </div>
      <div className="flex h-auto">
        <div className="flex-1">
          <CustomeAreaChart data={data} lines={lines} />
        </div>
      </div>
    </div>
  );
};

export default ClaimsSection;
