import React, { Fragment } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
    {
        name: 'Aug',
        paid: 4000,
        outstanding: 2400,
        total: 2400,
    },
    {
        name: 'Sep',
        paid: 3000,
        outstanding: 1398,
        total: 2210,
    },
    {
        name: 'Oct',
        paid: 2000,
        outstanding: 9800,
        total: 2290,
    },
    {
        name: 'Nov',
        paid: 2780,
        outstanding: 3908,
        total: 2000,
    },
    {
        name: 'Dec',
        paid: 1890,
        outstanding: 4800,
        total: 2181,
    },
];
interface Props {
    name?: string
}

const DisplayBarChart = ({ name }: Props) => {
    return (
        <Fragment>
            <div className="h-16 px-4 py-3 flex flex-col">
                <span className="text-md font-bold">Summary</span>
                <span className="font-light">{name || "GN Reinsurance"}</span>
            </div>
            <div className="h-96 py-4">
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
                        <Bar dataKey="paid" fill="#4D8B31" />
                        <Bar dataKey="outstanding" fill="#FFC800" />
                        <Bar dataKey="total" fill="#FF8427" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Fragment>
    )
}

export default DisplayBarChart
