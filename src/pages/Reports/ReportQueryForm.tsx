import React, { Fragment } from 'react'
import { Select } from '../../components'
import Calendar from 'react-calendar'
import InsurerReinsurerSelect from './sections/InsurerReinsurerSelect'
interface Props {

}

const ReportQueryForm = (props: Props) => {
    return (
        <Fragment>
            <div className="bg-white py-3 overflow-y-scroll h-full max-h-full  shadow-md rounded-md">
                <div className="mx-5 mb-3">
                    <h1 className="font-bold text-md">Report Generator</h1>
                    <p className="font-light">Provide essential information to generate report based on realtime data</p>
                </div>
                <div className="flex mx-2 flex-col">
                    <div className="flex-1">
                        <InsurerReinsurerSelect />
                        <div className="grid mx-2 grid-cols-2 gap-3 sm:grid-cols-1 md:grid-cols-1">
                            <Select label="Business Type" />
                        </div>
                        <div className="grid mx-2 grid-cols-2 gap-3 sm:grid-cols-1 md:grid-cols-1">
                            <Select label="Visible Columns" />
                        </div>
                        <div className="mx-2 mt-2">
                            <Calendar selectRange />
                        </div>
                        <div className="flex mx-2 flex-1 mt-5">
                            <button className="bg-green-400 hover:bg-green-600 text-white outline-none focus:outline-none flex-1 py-2 flex items-center justify-center">
                                Generate report
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default ReportQueryForm
