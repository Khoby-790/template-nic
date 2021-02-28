import React, { Fragment } from 'react'
import OffersListing from '../Dashboard/components/OffersListing'
import ReportQueryForm from './ReportQueryForm'

interface Props {

}

const Reports = (props: Props) => {
    return (
        <Fragment>
            <ReportQueryForm />
            <OffersListing />
        </Fragment>
    )
}

export default Reports
