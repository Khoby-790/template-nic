import React, { Fragment } from 'react'

interface Props {

}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const colors = ["green", "red", "yellow", "indigo"]
const companies = ["VRB", "KRB", "ARB", "VRBb"]

const RealtimeBreakDown = (props: Props) => {
    return (
        <Fragment>
            <div className="bg-gray-300 max-h-64 h-full px-4 py-5 overflow-y-scroll">
                <div className="flex justify-between">
                    <svg className="text-gray-600 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <div>
                    {colors.map((color, id) => (
                        <div className="my-2 flex justify-between" key={id}>
                            <span className={`bg-${color}-300 px-2 rounded text-${color}-700`}>{companies[id]}</span>
                            <span>{getRandomArbitrary(6, 25).toFixed()}</span>
                        </div>
                    ))}
                </div>
                <div></div>
            </div>
        </Fragment>
    )
}

export default RealtimeBreakDown
