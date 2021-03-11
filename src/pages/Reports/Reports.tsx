import React, { Fragment } from 'react'
import OffersListing from './sections/GeneratedOffersListing'
import ReportQueryForm from './ReportQueryForm'

interface Props {

}

const Reports = (props: Props) => {
    return (
        <Fragment>
            <ReportQueryForm />
            <OffersListing header="Generated Offers" description="All offers are subject to the query parameters" />
        </Fragment>
    )
}

export default Reports
