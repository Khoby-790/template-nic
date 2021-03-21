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
                                </a>
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
