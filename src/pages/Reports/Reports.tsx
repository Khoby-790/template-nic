import React, { Fragment } from 'react'
import OffersListing from './sections/GeneratedOffersListing'
import ReportQueryForm from './ReportQueryForm'

interface Props {

}




const Reports = (props: Props) => {
    return (
        <Fragment>
            <div className="flex flex-row h-full">
                <div className="flex-1 overflow-x-scroll">
                    <OffersListing header="Generated Offers" description="All offers are subject to the query parameters" />
                </div>
                <div className="w-96 h-full">
                    <ReportQueryForm />
                </div>
            </div>
        </Fragment>
    )
}

export default Reports
