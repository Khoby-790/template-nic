import React, { Fragment, Suspense, useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import RealtimeGraph from './Graphs/RealtimeGraph';

interface Props {
    data: any[]
}

const GraphTabs = ({ data = [] }: Props) => {
    const [tab, setTab] = useState<string>("realtime")
    return (
        <Fragment>
            <div
                style={{ height: "54vh" }}
                className="bg-white  border border-dashed  col-span-2"
            >
                <div>
                    <div className="hidden sm:block">
                        <div className="border-b border-gray-200 bg-white shadow ">
                            <nav className="flex -mb-px">
                                <button
                                    onClick={() => setTab("realtime")}
                                    className={`ml-8 group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 ${tab === "barChart"
                                        ? "text-blue-600 border-blue-600"
                                        : "text-gray-500 hover:border-gray-300"
                                        }  focus:outline-none focus:text-blue-800 focus:border-blue-700`}
                                    aria-current="page"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-5 w-5 mr-3 ${tab === "barChart" ? "text-blue-600 " : "text-gray-500"
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        />
                                    </svg>

                                    <span>Realtime Chart</span>
                                </button>
                                <button
                                    onClick={() => setTab("pieChart")}
                                    className={`ml-8 group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 ${tab === "pieChart"
                                        ? "text-blue-600 border-blue-600"
                                        : "text-gray-500 hover:border-gray-300"
                                        }  focus:outline-none focus:text-blue-800 focus:border-blue-700`}
                                    aria-current="page"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-5 w-5 mr-3 ${tab === "pieChart" ? "text-blue-600 " : "text-gray-500"
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                                        />
                                    </svg>

                                    <span>Pie Chart</span>
                                </button>
                                <button
                                    onClick={() => setTab("lineChart")}
                                    className={`ml-8 group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 ${tab === "lineChart"
                                        ? "text-blue-600 border-blue-600"
                                        : "text-gray-500 hover:border-gray-300"
                                        }  focus:outline-none focus:text-blue-800 focus:border-blue-700`}
                                    aria-current="page"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-5 w-5 mr-3 ${tab === "lineChart" ? "text-blue-600 " : "text-gray-500"
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                                        />
                                    </svg>

                                    <span>Line Chart</span>
                                </button>
                            </nav>
                        </div>
                    </div>
                    <div className={"px-5"}>
                        <Suspense fallback={<h1>loading</h1>}>
                            {tab === "realtime" && <RealtimeGraph data={data} />}
                        </Suspense>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default GraphTabs
