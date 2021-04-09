/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from 'react'
import { PageBreadCrum } from '../../components';
import SubGraphsBarchart from '../Dashboard/components/SubGraphsBarchart';
import GraphSection from './sections/GraphSection';
import StatsSection from './sections/StatsSection';
import TabsSection from './sections/TabsSection';
import ForAllBrokers from './tabs/ForAllBrokers';
import FromEachReinsuredTab from './tabs/FromEachReinsuredTab';
import FromEachReinsurerTab from './tabs/FromEachReinsurerTab';

interface Props {

}





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

                    <TabsSection />

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
