import React, { Fragment } from 'react'
// import { useToast } from '../../../providers/ToastProvider'
import OfferLisitngItem from '../../Dashboard/components/OfferLisitngItem'
import GeneratedOffersHeader from '../components/GeneratedOffersHeader'

interface Props {
    header?: string;
    description?: string
}

const OffersListing = (props: Props) => {
    return (
        <Fragment>
            <div className="mx-5 mt-5">
                <GeneratedOffersHeader header={props.header} description={props.description} />
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Ceeding
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Quota
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Role
                                            </th>
                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">

                                        {[1, 5, 4, 3, 2].map((_, index) => <OfferLisitngItem key={index} index={index} />)}

                                        {/* <!-- More items... --> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </Fragment>
    )
}

export default OffersListing
