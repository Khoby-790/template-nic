/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useToast } from '../../providers/ToastProvider';
import OfferLisitngItem from './components/OfferLisitngItem';


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
    const { notify } = useToast();

    const onNotifyClicked = () => {
        notify({ message: "Hello", description: "It is working" })
    }

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
            <div className="mx-5 mt-5">
                <div className="flex h-11 justify-between items-center my-3 mb-5">
                    <div className="flex-1 px-2 ">
                        <h2 className="text-2xl font-medium">Current Offers</h2>
                        <p className="font-light">Offers that appear here are realtime</p>
                        <button onClick={onNotifyClicked}>Click me</button>
                    </div>
                    <div className="flex-1 flex justify-end px-2">
                        <input placeholder="search" type="search" className="border-gray-200 focus:outline-none px-3 border h-12 w-1/2" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Ceeding
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Quota
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Role
                                            </th>
                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">

                                        {[1, 5, 4, 3, 2].map((_, index) => <OfferLisitngItem key={index} index={index} />)}

                                        {/* <!-- More items... --> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </Fragment>
    )
}

export default Dashboard
