import React from 'react'

interface Props {

}

const Stats = (props: Props) => {
    return (
        <div className="grid mt-5 mx-5 grid-cols-4 gap-3">
            <StatsPill color="red" />
            <StatsPill color="green" />
            <StatsPill color="yellow" />
            <StatsPill color="blue" />
        </div>
    )
}

export default Stats


type StatsPillProps = {
    color: string;
}

const StatsPill = ({ color }: StatsPillProps) => {
    return (
        <div className="bg-white px-4 flex items-center flex-row py-3">
            <div className={`bg-${color}-200 rounded-lg p-4`}>
                <svg className={`text-${color}-500 h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            </div>
            <div className="flex ml-5 flex-col">
                <span>Title</span>
                <span className="font-bold text-xl">Value</span>
            </div>
        </div>
    )
}
