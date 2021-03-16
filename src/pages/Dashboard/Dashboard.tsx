/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import GraphTabs from './components/GraphTabs';
import OffersListing from './components/OffersListing';
import Stats from './components/Stats';


interface Props {

}


const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const Dashboard = (props: Props) => {
    return (
        <Fragment>
            <Stats />
            <div className="flex mx-5 mt-4 justify-center items-start flex-row">
                <div className="flex-1 mr-3">
                    <GraphTabs data={data} />
                </div>
                <div style={{ height: "54vh" }} className="w-1/3 h-full">
                    <div className=""></div>
                    <div className="bg-white border border-dashed px-3 pt-3 h-full w-full overflow-y-scroll">
                        <ul className="divide-y divide-gray-200">
                            <Activity />
                            <Activity />
                            <Activity />
                            <Activity />
                            <Activity />
                            <Activity />
                            <Activity />
                            <Activity />
                            <Activity />
                            <Activity />
                        </ul>

                    </div>
                </div>
            </div>
            <OffersListing header="Current Offers" description="Offers that appear here are realtime" />
        </Fragment>
    )
}

export default Dashboard


const Activity = () => {
    return (
        <li className="py-4">
            <div className="flex space-x-3">
                <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=ah3lxr8uqw&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="" />
                <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">Whitney Francis</h3>
                        <p className="text-sm text-gray-500">1h</p>
                    </div>
                    <p className="text-sm text-gray-500">Deployed Workcation (2d89f0c8 in master) to production</p>
                </div>
            </div>
        </li>
    )
}