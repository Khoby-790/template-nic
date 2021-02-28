import React, { Fragment } from 'react'

interface Props {

}

const ReportQueryForm = (props: Props) => {
    return (
        <Fragment>
            <div className="bg-white mx-5 py-3 mt-4 shadow-md rounded-md">
                <div className="grid mx-5 grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col">
                        <label htmlFor="">Reinsurer</label>
                        <input type="text" className="border border-gray-300 h-11 px-3 outline-none focus:outline-none"/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ReportQueryForm
