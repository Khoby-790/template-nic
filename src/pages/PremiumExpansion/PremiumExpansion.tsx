/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from "react";
import { CustomLineChart, PageBreadCrum } from "../../components";
import ForAllBrokers from "./tabs/ForAllBrokers";
import FromEachReinsuredTab from "./tabs/FromEachReinsuredTab";
import FromEachReinsurerTab from "./tabs/FromEachReinsurerTab";

interface Props {}

const data = [
  {
    name: "Jan",
    paid: 4000,
    outstanding: 2400,
    total: 2400,
  },
  {
    name: "Feb",
    paid: 3000,
    outstanding: 1398,
    total: 2210,
  },
  {
    name: "Mar",
    paid: 2000,
    outstanding: 9800,
    total: 2290,
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
  { name: "total", title: "Total Premium", width: 2, color: "#A1C181" },
  { name: "paid", title: "Paid Premium", width: 2, color: "#FE7F2D" },
  {
    name: "outstanding",
    title: "Outstanding Premium",
    width: 2,
    color: "#619B8A",
  },
];

const inActive =
  "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm";
const active =
  "border-indigo-500 text-indigo-600 flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm";

type Tabs =
  | "for_each_reinsurer"
  | "for_each_broker"
  | "for_all_brokers"
  | "for_all_reinsurers";

const PremiumExpansion = (props: Props) => {
  const [tab, setTab] = useState<Tabs>("for_each_reinsurer");
  return (
    <Fragment>
      <div className="px-3 py-4">
        <div>
          <PageBreadCrum page="Premium Summary" />
        </div>

        <div className="h-auto mt-3 bg-white py-3">
          <div className="flex justify-end">
            <div className="flex border  mr-2 p-2 mb-1 rounded items-baseline">
              <label className="mr-3" htmlFor="">
                Filter by currency
              </label>
              <select name="" id="">
                <option value="">GHC</option>
                <option value="">GHC</option>
                <option value="">GHC</option>
              </select>
            </div>
          </div>
          <CustomLineChart data={data} lines={lines} />
        </div>

        <div>
          <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-base font-normal text-gray-900">
                Total Premium
              </dt>
              <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                  71,897
                  <span className="ml-2 text-sm font-medium text-gray-500">
                    from 70,946
                  </span>
                </div>

                <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                  <svg
                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Increased by</span>
                  12%
                </div>
              </dd>
            </div>

            <div className="px-4 py-5 sm:p-6">
              <dt className="text-base font-normal text-gray-900">
                Total Outstanding Premium
              </dt>
              <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                  12,506,588
                  <span className="ml-2 text-sm font-medium text-gray-500">
                    from 14,254,214
                  </span>
                </div>

                <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                  <svg
                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Increased by</span>
                  2.02%
                </div>
              </dd>
            </div>

            <div className="px-4 py-5 sm:p-6">
              <dt className="text-base font-normal text-gray-900">
                Total Paid Premium
              </dt>
              <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                  6,555,636
                  <span className="ml-2 text-sm font-medium text-gray-500">
                    from 5,635,785
                  </span>
                </div>

                <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
                  <svg
                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Decreased by</span>
                  4.05%
                </div>
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            <select
              id="tabs"
              name="tabs"
              className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            >
              <option>For All Reinsurance Brokers</option>
              <option> For All Insurers</option>
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex" aria-label="Tabs">
                <a
                  href="#"
                  onClick={() => setTab("for_all_brokers")}
                  className={tab === "for_all_brokers" ? active : inActive}
                >
                  For All Reinsurance Brokers
                </a>
                <a
                  href="#"
                  onClick={() => setTab("for_each_reinsurer")}
                  className={tab === "for_each_reinsurer" ? active : inActive}
                >
                  For All Insurers
                </a>
              </nav>
            </div>
          </div>
        </div>

        <Fragment>
          {tab === "for_all_brokers" && <ForAllBrokers />}
          {tab === "for_each_broker" && <FromEachReinsurerTab />}
          {tab === "for_each_reinsurer" && <FromEachReinsuredTab />}
        </Fragment>
      </div>
    </Fragment>
  );
};

export default PremiumExpansion;
