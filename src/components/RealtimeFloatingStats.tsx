import React, { Fragment, useEffect, useState } from 'react'

interface Props {

}

const RealtimeFloatingStats = (props: Props) => {
    const [time, setTime] = useState<string>(new Date().toTimeString())
    const [currentDate] = useState<string>(new Date().toDateString())
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toTimeString())
        }, 1000)
    }, [])
    return (
        <Fragment>
            <div className="absolute bottom-10 w-6/12 right-0 shadow-xl rounded-lg bg-white">
                <div className="h-9 border-b px-5 flex items-center justify-between">
                    <span className="text-lg">Realtime Data on placed offers</span>
                    <svg className="h-6 text-gray-700 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                </div>
                <div className="flex px-5">
                    <div className="flex flex-col">
                        <span>{currentDate}</span>
                        <span>{time}</span>
                    </div>
                </div>
                <div className="">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200" >
                                <thead>
                                    <tr>
                                        <th>Brokers</th>
                                        <th>Policy</th>
                                        <th>Premium</th>
                                        <th>Timestamp</th>
                                        <th>Reinsurer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            National Insurance Company Limited
                                                  </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                            <span>12,000</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                            <span>12,000</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                            <span>12,000</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <svg onClick={() => {}} className="text-indigo-600 h-6 cursor-pointer hover:text-indigo-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default RealtimeFloatingStats
