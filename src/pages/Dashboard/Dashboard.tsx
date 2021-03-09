/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import GraphTabs from './components/GraphTabs';
import OffersListing from './components/OffersListing';
import Stats from './components/Stats';
import SubGraphsBarchart from './components/SubGraphsBarchart';
import SubGraphsMixedChart from './components/SubGraphsMixedChart';
import SubGraphsPieChart from './components/SubGraphsPieChart';


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
            <div className="flex mx-5 mt-4 flex-row">
                <div className="flex-1 mr-3">
                    <GraphTabs data={data} />
                </div>
                <div className="w-1/3 h-full">
                    <div className="bg-white px-3 pt-3 h-full w-full overflow-y-scroll">
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
        <div className="flex my-2 items-center justify-center flex-row">
            <div className="w-20 bg-gray-600 rounded-md text-white h-20 flex items-center justify-center">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            </div>
            <div className="flex ml-5 flex-col">
                <span>Activity 1</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            </div>
        </div>
    )
}