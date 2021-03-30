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
                    <table>
                        <thead>
                            <tr>
                                <th>Brokers</th>
                                <th>Policy</th>
                                <th>Premium</th>
                                <th>Timestamp</th>
                                <th>Reinsurer</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default RealtimeFloatingStats
