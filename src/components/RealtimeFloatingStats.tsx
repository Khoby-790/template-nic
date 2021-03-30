import React, { Fragment, useEffect, useState } from 'react'

interface Props {

}

const colors = ["green", "red", "yellow", "indigo"]

const RealtimeFloatingStats = (props: Props) => {
    const [showDetails, setShowDetails] = useState<boolean>(true)
    const [time, setTime] = useState<string>(new Date().toTimeString())
    const [currentDate] = useState<string>(new Date().toDateString())
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toTimeString())
        }, 1000)
    }, []);


    if (!showDetails) {
        return (
            <div className="absolute bottom-10 w-auto right-6 shadow-xl rounded-lg bg-white-100">
                Hello
            </div>
        )
    }

    return (
        <Fragment>
            <div className="absolute bottom-10 w-6/12 right-6 shadow-xl rounded-lg bg-gray-800">
                <div className="h-9 border-b px-5 flex items-center justify-between">
                    <span className="text-lg text-gray-200">Realtime Data on placed offers</span>
                    <svg className="h-6 text-gray-200 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                </div>
                <div className="flex pt-2 px-5">
                    <div className="flex text-gray-200 flex-col">
                        <span>{currentDate}</span>
                        <span>{time}</span>
                    </div>
                </div>
                <div className="w-full max-h-96 overflow-y-scroll">
                    <div className="py-2 min-w-full align-middle inline-block sm:px-2">
                        <div className="shadow align-middle border-b min-w-full border-gray-700 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200" >
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                                            Brokers
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                                            Policy Type
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                                            Premium
                                        </th>
                                        <th scope="col" className="relative px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                                            Reinsured
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                                            Timestamp
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {colors.map((color, colorID) => (
                                        <tr className="">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                <span className={`bg-${color}-300 px-2 rounded text-${color}-700`}>VRB</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                                                <span>MC</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                                                <span>GHC 45,000</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                                                <span>VACL</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
                                                <span>{"5 mins ago"}</span>
                                            </td>
                                        </tr>
                                    ))}
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
