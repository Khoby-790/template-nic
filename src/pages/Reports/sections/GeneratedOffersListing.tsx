import React, { Fragment } from 'react'
import { useToast } from '../../../providers/ToastProvider'
import OfferLisitngItem from '../../Dashboard/components/OfferLisitngItem'

interface Props {
    header?: string;
    description?: string
}

const OffersListing = (props: Props) => {
    const { notify } = useToast()
    const onNotifyClicked = () => {
        notify({ message: "Hello", description: "It is working" })
    }

    return (
        <Fragment>
            <div className="mx-5 mt-5">
                <div className="flex h-11 justify-between items-center my-3 mb-5">
                    <div className="flex-1 px-2 ">
                        <h2 className="text-2xl font-medium">{props.header}</h2>
                        <p className="font-light">{props.description}</p>
                        {/* <button onClick={onNotifyClicked}>Click me</button> */}
                    </div>
                    <div className="flex-1 flex justify-end px-2">
                        <input placeholder="search" type="search" className="border-gray-200 focus:outline-none px-3 border h-12 w-1/2" />
                    </div>
                </div>
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
