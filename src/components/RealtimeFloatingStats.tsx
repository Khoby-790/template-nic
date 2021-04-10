import React, { Fragment, useEffect, useState } from 'react'

interface Props {

}

const colors = ["green", "red", "yellow", "indigo"]

const RealtimeFloatingStats = (props: Props) => {
    const [showDetails, setShowDetails] = useState<boolean>(false)
    const [time, setTime] = useState<string>(new Date().toTimeString())
    const [currentDate] = useState<string>(new Date().toDateString())
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toTimeString())
        }, 1000)
    }, []);


    if (!showDetails) {
        return (
            <div onClick={() => setShowDetails(true)} className="fixed lg:absolute z-20 lg:animate-bounce group lg:bottom-10 bottom-0 w-auto  lg:right-6 shadow-xl rounded-lg p-2 bg-yellow-300">
                <svg className="h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            </div>
        )
    }

    return (
        <Fragment>
            <div className="fixed lg:bottom-0 bottom-0 lg:w-6/12 w-full h-screen lg:right-0 shadow-xl rounded-none bg-gray-800">
                <div className="h-9 border-b px-5 flex items-center justify-between">
                    <span className="text-lg text-gray-200">Realtime Data on placed offers</span>
                    <svg onClick={() => setShowDetails(false)} className="h-6 text-gray-200 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                                        <tr key={colorID} className="">
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
