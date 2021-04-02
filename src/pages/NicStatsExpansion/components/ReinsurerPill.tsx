/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from 'react'
import { Modal } from '../../../components'
import ReinsurersList from '../tabs/ReinsurersList';
import DisplayBarChart from './DisplayBarChart'

interface Props {
    name?: string
}

const inActive = "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm";
const active = "border-indigo-500 text-indigo-600 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm";

type Tabs = "stats" | "reinsurers"

const ReinsurerPill = ({ name }: Props) => {
    const [showGraph, setShowGraph] = useState<boolean>(false);
    const [tabs, setTabs] = useState<Tabs>("stats");
    return (
        <>
            <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex flex-col lg:flex-row items-start space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=ah3lxr8uqw&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div className="flex-1 mt-3 min-w-0">
                    <div className="flex flex-col lg:flex-row">
                        <div className="">
                            <a href="#" className="focus:outline-none">
                                {/* <span className="absolute inset-0" aria-hidden="true"></span> */}
                                <p className="text-sm font-medium text-gray-900">
                                    {name || "Leslie Alexander"}
                                </p>
                                <p className="text-sm flex items-start text-gray-500 truncate">
                                    <svg className="h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    <div className="flex flex-col">
                                        <span>Address </span>
                                        <span>Contact Details</span>
                                    </div>
                                </p>
                            </a>
                            <div className="flex">
                                <div onClick={() => setShowGraph(true)} className="flex w-20 cursor-pointer justify-center text-gray-500 items-center rounded-xl hover:bg-indigo-100 p-2 my-3">
                                    <svg className="h-6 text-sm text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <div onClick={() => setShowGraph(true)} className="flex w-20 cursor-pointer justify-center text-gray-500 items-center rounded-xl hover:bg-indigo-100 p-2 my-3">
                                    <svg className="h-6 text-sm text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>


                        </div>
                        <div>
                            <div className="py-3 flex justify-start lg:justify-end">
                                <label className="mr-3" htmlFor="">Filter by currency</label>
                                <select name="" id="">
                                    <option value="">GHC</option>
                                    <option value="">EUR</option>
                                    <option value="">USD</option>
                                </select>
                            </div>
                            <div className="lg:px-5 px-1 grid grid-cols-1 lg:grid-cols-3 gap-x-5">
                                <div className="flex flex-col">
                                    <span className="font-thin">Total</span>
                                    <span className="font-semibold text-xl">GHC 12,022,152</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-thin">Paid</span>
                                    <span className="font-semibold text-xl"> GHC 12,022,152</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-thin">Outstanding</span>
                                    <span className="font-semibold text-xl">GHC 12,022,152</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal size={80} show={showGraph} setShow={setShowGraph}>
                <Fragment>
                    <div className="px-5 mt-4">
                        <div className="sm:hidden">
                            <label htmlFor="tabs" className="sr-only">Select a tab</label>
                            <select id="tabs" name="tabs" className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                                <option>My Account</option>
                                <option>Company</option>
                                <option selected>Team Members</option>
                                <option>Billing</option>
                            </select>
                        </div>
                        <div className="hidden sm:block">
                            <div className="border-b border-gray-200">
                                <nav className="-mb-px flex" aria-label="Tabs">
                                    <a href="#" onClick={() => setTabs("stats")} className={tabs === "stats" ? active : inActive}>
                                        NIC levy summary
                                    </a>
                                    <a href="#" onClick={() => setTabs("reinsurers")} className={tabs === "reinsurers" ? active : inActive}>
                                        Reinsurers
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {tabs === "stats" && <DisplayBarChart />}
                    {tabs === "reinsurers" && <ReinsurersList />}
                </Fragment>
            </Modal>
        </>
    )
}

export default ReinsurerPill
