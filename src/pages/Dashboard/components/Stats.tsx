import React from 'react'

interface Props {

}

const Stats = (props: Props) => {
    return (
        <div className="grid mx-5 grid-cols-4 gap-3">
            <div className="bg-white px-4 flex items-center flex-row py-3">
                <div className="bg-red-200">
                    <svg className="text-red-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Stats
