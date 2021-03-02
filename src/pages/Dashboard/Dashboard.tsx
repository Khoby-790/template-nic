/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import OffersListing from './components/OffersListing';
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
            <div className="h-96 max-h-96 bg-white mx-5 my-3 py-4 shadow-md rounded-md">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="pv" stroke="#D1FAE5" fill="#D1FAE5" />
                        <Area type="monotone" dataKey="amt" stroke="#edb7dd" fill="#edb7dd" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className="grid mb-3 gap-2 mx-5 h-64 lg:grid-cols-3">
                <div className="bg-white py-2 px-2 shadow-md rounded-md">
                    <SubGraphsBarchart />
                </div>
                <div className="bg-white py-2 px-2 shadow-md rounded-md">
                    <SubGraphsPieChart />
                </div>
                <div className="bg-white py-2 px-2 shadow-md rounded-md">
                    <SubGraphsMixedChart />
                </div>
            </div>
            <OffersListing header="Current Offers" description="Offers that appear here are realtime" />
        </Fragment>
    )
}

export default Dashboard
