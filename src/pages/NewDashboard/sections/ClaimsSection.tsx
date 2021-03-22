import React from 'react'
import { Link } from 'react-router-dom'

interface Props {

}

const ClaimsSection = (props: Props) => {
    return (
        <div className="bg-white shadow-lg my-4">
            <div className="h-16 flex justify-between py-2 px-3">
                <div className="flex">
                    <div className=" mr-3">
                        <svg className="h-12 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold ">Claims</span>
                        <span>Brief But detailed description of claims in it's enirety</span>
                    </div>
                </div>
                <Link to="/nic" className=" flex justify-center h-full items-center px-4 cursor-pointer hover:bg-gray-400 rounded-full">
                    <svg className="h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default ClaimsSection
