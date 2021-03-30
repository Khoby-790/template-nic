import React, { Fragment } from 'react'

interface Props {

}

const RealtimeFloatingStats = (props: Props) => {
    return (
        <Fragment>
            <div className="absolute bottom-10 w-6/12 right-0 shadow-xl rounded-lg px-5 bg-white">
                <div className="h-9 flex items-center justify-between">
                    <span className="text-lg">Realtime Data on placed offers</span>
                    <svg className="h-6 text-gray-700 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                </div>
                <div className="flex"></div>
            </div>
        </Fragment>
    )
}

export default RealtimeFloatingStats
