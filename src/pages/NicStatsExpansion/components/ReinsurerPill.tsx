/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Modal } from '../../../components'
import DisplayBarChart from './DisplayBarChart'

interface Props {
    name?: string
}

const ReinsurerPill = ({ name }: Props) => {
    const [showGraph, setShowGraph] = useState<boolean>(false)
    return (
        <>
            <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=ah3lxr8uqw&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex">
                        <div className="">
                            <a href="#" className="focus:outline-none">
                                {/* <span className="absolute inset-0" aria-hidden="true"></span> */}
                                <p className="text-sm font-medium text-gray-900">
                                    {name || "Leslie Alexander"}
                                </p>
                                <p className="text-sm flex items-center text-gray-500 truncate">
                                    <svg className="h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    <span>East Legon</span>
                                </p>
                            </a>
                            <div onClick={() => setShowGraph(true)} className="flex text-gray-500 items-center rounded-xl hover:bg-indigo-100 p-2 my-3">
                                View
                                <svg className="h-6 ml-3 text-sm text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                        </div>
                        <div className="px-5 grid grid-cols-3 gap-x-5">
                            <div className="flex flex-col">
                                <span className="font-thin">Total</span>
                                <span className="font-semibold text-xl">12,022,152</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-thin">Paid</span>
                                <span className="font-semibold text-xl">12,022,152</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-thin">Outstanding</span>
                                <span className="font-semibold text-xl">12,022,152</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal size={80} show={showGraph} setShow={setShowGraph}>
                <DisplayBarChart />
            </Modal>
        </>
    )
}

export default ReinsurerPill
