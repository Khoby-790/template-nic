import React, { Fragment } from 'react'

interface Props {

}

const MainStats = (props: Props) => {
    return (
        <Fragment>
            <div className="bg-purple-600 flex max-h-42  w-full h-full">
                <div className="flex-1 grid grid-cols-4 divide-x-2 border-gray-400 h-40">
                    <div className="flex justify-end py-10 px-11 h-full flex-col">
                        <div className="flex items-baseline">
                            <h1 className="text-6xl text-white font-bold font-mono">12</h1>
                            <svg className="h-9 text-green-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                            </svg>
                        </div>
                        <div className="flex items-center">
                            <p className="font-mono font-thin text-md text-gray-100">Pending offers</p>
                            {/* <svg className="h-6 ml-3 text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg> */}
                        </div>
                    </div>
                    <div className="flex justify-end py-10 px-11 h-full flex-col">
                        <div className="flex items-baseline">
                            <h1 className="text-6xl text-white font-bold font-mono">12</h1>
                            <svg className="h-9 text-green-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                            </svg>
                        </div>
                        <div className="flex items-center">
                            <p className="font-mono font-thin text-md text-gray-100">Pending offers</p>
                            {/* <svg className="h-6 ml-3 text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg> */}
                        </div>
                    </div>
                    <div className="flex justify-end py-10 px-11 h-full flex-col">
                        <div className="flex items-baseline">
                            <h1 className="text-6xl text-white font-bold font-mono">12</h1>
                            <svg className="h-9 text-green-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                            </svg>
                        </div>
                        <div className="flex items-center">
                            <p className="font-mono font-thin text-md text-gray-100">Pending offers</p>
                            {/* <svg className="h-6 ml-3 text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg> */}
                        </div>
                    </div>
                    <div className="flex justify-end py-10 px-11 h-full flex-col">
                        <div className="flex items-baseline">
                            <h1 className="text-6xl text-white font-bold font-mono">12</h1>
                            <svg className="h-9 text-green-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                            </svg>
                        </div>
                        <div className="flex items-center">
                            <p className="font-mono font-thin text-md text-gray-100">Pending offers</p>
                            {/* <svg className="h-6 ml-3 text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg> */}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MainStats
