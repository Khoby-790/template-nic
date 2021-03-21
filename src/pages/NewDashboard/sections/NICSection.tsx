import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        paid: 4000,
        outstanding: 2400,
        total: 2400,
    },
    {
        name: 'Feb',
        paid: 3000,
        outstanding: 1398,
        total: 2210,
    },
    {
        name: 'Mar',
        paid: 2000,
        outstanding: 9800,
        total: 2290,
    },
    {
        name: 'Apr',
        paid: 2780,
        outstanding: 3908,
        total: 2000,
    },
    {
        name: 'May',
        paid: 1890,
        outstanding: 4800,
        total: 2181,
    },
    {
        name: 'Jun',
        paid: 2390,
        outstanding: 3800,
        total: 2500,
    },
    {
        name: 'Jul',
        paid: 3490,
        outstanding: 4300,
        total: 2100,
    },
];

interface Props {

}

const NICSection = (props: Props) => {
    return (
        <>
            <div className="bg-white shadow-lg my-4">
                <div className="h-16 flex justify-between px-3">
                    <div className="flex flex-col">
                        <span className="font-semibold ">NIC</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                    </div>
                    <div className="">

                    </div>
                </div>
                <div className="flex h-64">
                    <div className="flex-1">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="paid" fill="#8884d8" />
                                <Bar dataKey="outstanding" fill="#82ca9d" />
                                <Bar dataKey="total" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="w-64 grid grid-cols-1 gap-y-3">
                        <div className="flex flex-col">
                            <span className="font-bold text-2xl text-gray-600">121,000</span>
                            <span className="font-light text-gray-600">Total</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-2xl text-gray-600">672,000</span>
                            <span className="font-light text-gray-600">Outstanding</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-2xl text-gray-600">4,506,000</span>
                            <span className="font-light text-gray-600">Paid</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NICSection
