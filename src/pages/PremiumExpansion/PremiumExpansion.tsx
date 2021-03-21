/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from 'react'
import { PageBreadCrum } from '../../components';

interface Props {

}


const inActive = "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm";
const active = "border-indigo-500 text-indigo-600 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm";

type Tabs = "for_each_reinsurer" | "for_each_broker" | "for_all_brokers" | "for_all_reinsurers"

const PremiumExpansion = (props: Props) => {
    const [tab, setTab] = useState<Tabs>("for_each_reinsurer")
    return (
        <Fragment>
            <div className="px-3 py-4">
                <div>
                    <PageBreadCrum page="Premium Summary" />

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
                                    <svg className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="sr-only">
                                        Increased by
          </span>
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
                                    <svg className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="sr-only">
                                        Increased by
          </span>
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
                                    <svg className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="sr-only">
                                        Decreased by
          </span>
          4.05%
        </div>
                            </dd>
                        </div>
                    </dl>
                </div>



                <div>
                    <div className="sm:hidden">
                        <label htmlFor="tabs" className="sr-only">Select a tab</label>
                        <select id="tabs" name="tabs" className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                            <option>My Account</option>
                            <option>Company</option>
                            <option selected>Team Members</option>
                            <option>Billing</option>
                        </select>
                    </div>
                    <div className="hidden sm:block">
                        <div className="border-b border-gray-200">
                        <nav className="-mb-px flex" aria-label="Tabs">
                                <a href="#" onClick={() => setTab("for_all_brokers")} className={tab === "for_all_brokers" ? active : inActive}>
                                    For All Brokers
                                </a>
                                <a href="#" onClick={() => setTab("for_each_broker")} className={tab === "for_each_broker" ? active : inActive}>
                                    From Each Broker
                                </a>F
                                {/* <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" --> */}
                                <a href="#" onClick={() => setTab("for_all_reinsurers")} className={tab === "for_all_reinsurers" ? active : inActive} aria-current="page">
                                    For Each Reinsured
                                </a>
                                <a href="#" onClick={() => setTab("for_each_reinsurer")} className={tab === "for_each_reinsurer" ? active : inActive}>
                                    From Each Reinsurer
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* <Fragment>
                    {tab === "for_all_reinsurers" && <ForEachReinsurerTab />}
                    {tab === "for_each_reinsurer" && <FromEachReinsurerTab />}
                </Fragment> */}

            </div>
        </Fragment>
    )
}

export default PremiumExpansion
