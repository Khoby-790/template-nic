import React, { Fragment } from 'react'

interface Props {

}

const colors = ["green", "red", "yellow", "indigo"]

const RealtimeBreakDown = (props: Props) => {
    return (
        <Fragment>
            <div className="bg-gray-300 max-h-64 h-full px-4 py-5 overflow-y-scroll">
                <div>
                    {colors.map((color, id) => (
                        <div key={id}></div>
                    ))}
                </div>
                <div></div>
            </div>
        </Fragment>
    )
}

export default RealtimeBreakDown
