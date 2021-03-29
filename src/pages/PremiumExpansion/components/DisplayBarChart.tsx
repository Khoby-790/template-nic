import React, { Fragment } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CustomLineChart } from '../../../components';

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

}

const lines = [
    { name: "total", title: "Total Premium", width: 2, color: "#A1C181" },
    { name: "paid", title: "Paid Premium", width: 2, color: "#FE7F2D" },
    { name: "outstanding", title: "Outstanding Premium", width: 2, color: "#619B8A" },
]

const DisplayBarChart = (props: Props) => {
    return (
        <Fragment>
            <div className="h-16 px-4 py-3 flex justify-between">
                <div className="flex flex-col">
                    <span className="text-xl font-bold">Summary</span>
                    <span className="font-light">Mainstream Reinsurance House</span>
                </div>
                <div className="flex items-baseline">
                    <label className="mr-3" htmlFor="">Filter by currency</label>
                    <select name="" id="">
                        <option value="">GHC</option>
                        <option value="">EUR</option>
                        <option value="">USD</option>
                    </select>
                </div>
            </div>
            <div className="h-96">
                <CustomLineChart data={data} lines={lines} />
            </div>
        </Fragment>
    )
}

export default DisplayBarChart
