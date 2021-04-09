/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from 'react'
import { PageBreadCrum } from '../../components';
import SubGraphsBarchart from '../Dashboard/components/SubGraphsBarchart';
import GraphSection from './sections/GraphSection';
import StatsSection from './sections/StatsSection';
import ForAllBrokers from './tabs/ForAllBrokers';
import FromEachReinsuredTab from './tabs/FromEachReinsuredTab';
import FromEachReinsurerTab from './tabs/FromEachReinsurerTab';

interface Props {

}




const inActive = "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm";
const active = "border-indigo-500 text-indigo-600 flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm";

type Tabs = "for_each_reinsurer" | "for_each_broker" | "for_all_brokers" | "for_all_reinsurers"



const NicStatsExpansion = (props: Props) => {
    const [tab, setTab] = useState<string>("for_each_reinsurer")
    return (
        <Fragment>
            <div className="px-3 py-4">
                <div>
                    <PageBreadCrum page="NIC Levy Overview" />
                    {/* <div /> */}
                    <GraphSection />
                    <StatsSection />

                    <div>
                        <div className="sm:hidden my-3">
                            <label htmlFor="tabs" className="sr-only">Select a tab</label>
                            <select onChange={e => setTab(e.target.value)} id="tabs" name="tabs" className="block w-full p-2 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                                <option value="for_all_brokers">For All Brokers</option>
                                <option value="for_each_reinsurer">From Each Reinsured</option>
                                <option value="for_each_broker">From Each Reinsurer</option>
                            </select>
                        </div>
                        <div className="hidden sm:block">
                            <div className="border-b border-gray-200">
                                <nav className="-mb-px flex" aria-label="Tabs">
                                    <a href="#" onClick={() => setTab("for_all_brokers")} className={tab === "for_all_brokers" ? active : inActive}>
                                        For All Brokers
                                </a>
                                    <a href="#" onClick={() => setTab("for_each_reinsurer")} className={tab === "for_each_reinsurer" ? active : inActive}>
                                        From Each Reinsured
                                </a>

                                    <a href="#" onClick={() => setTab("for_each_broker")} className={tab === "for_each_broker" ? active : inActive}>
                                        From Each Reinsurer
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
            </div>
        </Fragment>
    )
}

export default NicStatsExpansion
