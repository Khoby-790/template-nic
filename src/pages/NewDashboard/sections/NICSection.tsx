import React from 'react'
import { Link } from 'react-router-dom';
import SubGraphsBarchart from '../../Dashboard/components/SubGraphsBarchart';

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

const bars = [
    { name: "paid", color: "#BA5624", title: "Paid NIC Levy" },
    { name: "outstanding", color: "#381D2A", title: "Outstanding NIC Levy" },
    { name: "total", color: "#FCDE9C", title: "Total NIC Levy" }
]

interface Props {

}

const NICSection = (props: Props) => {
    return (
        <>
            <div className="bg-white shadow-lg my-4">
                <div className="lg:h-16 h-auto flex lg:flex-row flex-col justify-between py-2 px-3">
                    <div className="flex">
                        <div className=" mr-3">
                            <svg className="h-12 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold ">NIC Levy</span>
                            <span className="text-sm font-light">Bar Graph that gives a detailed description of the levies  </span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex border  mr-2 p-2 mb-1 rounded items-baseline">
                            <label className="mr-3" htmlFor="">Filter by currency</label>
                            <select name="" id="">
                                <option value="">GHC</option>
                                <option value="">GHC</option>
                                <option value="">GHC</option>
                            </select>
                        </div>
                        <Link to="/nic" className=" flex justify-center h-full items-center px-4 cursor-pointer hover:bg-gray-400 rounded-full">
                            <svg className="h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="flex h-96">
                    <div className="flex-1">
                        <SubGraphsBarchart data={data} bars={bars} />
                    </div>
                    <div className="px-5 grid grid-cols-1 gap-y-3">

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
