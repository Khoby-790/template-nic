import React, { Fragment, useEffect, useState } from 'react'

interface Props {

}

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
            <div className="absolute bottom-10 w-auto right-6 shadow-xl rounded-lg bg-white-100">
                Hello
            </div>
        )
    }

    return (
        <Fragment>
            <div className="absolute bottom-10 w-6/12 right-6 shadow-xl rounded-lg bg-gray-100">
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
                <div className="w-full max-h-96 overflow-y-scroll">
                    <div className="py-2 min-w-full align-middle inline-block sm:px-2">
                        <div className="shadow align-middle border-b min-w-full border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200" >
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Brokers
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Plicy
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Premium
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Timestamp
                                        </th>
                                        <th scope="col" className="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Reinsurer
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-green-300">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            VRB
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                                            <span>VR</span>
                                        </td>
                                    </tr>
                                    <tr className="bg-red-300">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            VRB
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                                            <span>VR</span>
                                        </td>
                                    </tr>
                                    <tr className="bg-red-300">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            VRB
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                                            <span>VR</span>
                                        </td>
                                    </tr>
                                    <tr className="bg-red-300">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            VRB
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                                            <span>VR</span>
                                        </td>
                                    </tr>
                                    <tr className="bg-green-300">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            VRB
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                                            <span>VR</span>
                                        </td>
                                    </tr>
                                    <tr className="bg-green-300">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            VRB
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span>GHC</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                                            <span>VR</span>
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
