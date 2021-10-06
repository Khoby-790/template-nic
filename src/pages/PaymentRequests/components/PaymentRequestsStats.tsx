import React, { Fragment } from 'react'

interface Props {

}

const PaymentRequestsStats = (props: Props) => {
    return (
        <Fragment>
            <div className="mx-2">
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                        <dt className="text-md font-medium text-gray-500 truncate">
                            Total Pending
                        </dt>
                        <dd className="mt-1 text-md font-semibold text-gray-900">
                            97
                        </dd>
                    </div>

                    <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                        <dt className="text-md font-medium text-gray-500 truncate">
                            Total Accepted
                        </dt>
                        <dd className="mt-1 text-md font-semibold text-gray-900">
                            14
                        </dd>
                    </div>

                    <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                        <dt className="text-md font-medium text-gray-500 truncate">
                            Total Rejected
                        </dt>
                        <dd className="mt-1 text-md font-semibold text-gray-900">
                            5
                        </dd>
                    </div>
                </dl>
            </div>

        </Fragment>
    )
}

export default PaymentRequestsStats
