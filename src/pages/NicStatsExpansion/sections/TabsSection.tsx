/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from "react";
import ForAllBrokers from "../tabs/ForAllBrokers";
import FromEachReinsuredTab from "../tabs/FromEachReinsuredTab";
import FromEachReinsurerTab from "../tabs/FromEachReinsurerTab";

interface Props { }

// type Tabs = "for_all_insurers" | "for_each_broker" | "for_all_brokers" | "for_all_reinsurers"

const inActive =
  "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 flex-1 py-4 px-1 text-center border-b-2 font-medium text-md";
const active =
  "border-indigo-500 text-indigo-600 flex-1 py-4 px-1 text-center border-b-2 font-medium text-md";

const TabsSection = (props: Props) => {
  const [tab, setTab] = useState<string>("for_all_insurers");
  return (
    <Fragment>
      <div>
        <div className="sm:hidden my-3">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            onChange={(e) => setTab(e.target.value)}
            id="tabs"
            name="tabs"
            className="block w-full p-2 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          >
            <option value="for_all_brokers">For Reinsurance Brokers</option>
            <option value="for_all_insurers">For All Insurers</option>
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
                For Reinsurance Brokers
              </a>
              <a
                href="#"
                onClick={() => setTab("for_all_insurers")}
                className={tab === "for_all_insurers" ? active : inActive}
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
        {tab === "for_all_insurers" && <FromEachReinsuredTab />}
      </Fragment>
    </Fragment>
  );
};

export default TabsSection;
