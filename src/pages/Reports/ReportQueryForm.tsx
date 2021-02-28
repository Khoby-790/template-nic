import React, { Fragment } from 'react'
import { Input } from '../../components'

interface Props {

}

const ReportQueryForm = (props: Props) => {
    return (
        <Fragment>
            <div className="bg-white mx-5 py-3 mt-4 shadow-md rounded-md">
                <div className="grid mx-5 grid-cols-2 gap-3 sm:grid-cols-1 md:grid-cols-2">
                    <Input label="Reinsurer" />
                    <Input label="Business Type" />
                </div>
                <div className="grid mx-5 grid-cols-2 gap-3 sm:grid-cols-1 md:grid-cols-2">
                    <Input label="Reinsurer" />
                    <Input label="Business Type" />
                </div>
                <div className="grid mx-5 grid-cols-2 gap-3 sm:grid-cols-1 md:grid-cols-2">
                    <Input label="Reinsurer" />
                    <Input label="Business Type" />
                </div>
                <div className="flex mx-5 flex-1 mt-4">
                    <button className="bg-green-600 text-white flex-1 py-2 flex items-center justify-center">
                        Generate report
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default ReportQueryForm
