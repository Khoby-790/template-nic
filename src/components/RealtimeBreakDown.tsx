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
