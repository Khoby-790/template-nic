import React, { Fragment, useState } from 'react'
import { Modal } from '../../../components'

interface Props {

}

const OfferLisitngItem = (props: Props) => {
    const [showOffer, setShowOffer] = useState(false)
    return (
        <Fragment>
            <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="" />
                        </div>
                        <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                                Vanguard Reinsurance
                                                        </div>
                            <div className="text-sm text-gray-500">
                                info@example.com
                                                        </div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Visal Insurance Company</div>
                    <div className="text-sm text-gray-500">Yaw Bossman</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        up
                                                </span>
                    <span className="ml-2">
                        {(34683579).toLocaleString(undefined, { currency: "USD", style: "currency" })}
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Admin
                                            </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <svg onClick={() => setShowOffer(true)} className="h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </td>
            </tr>

            <Modal show={showOffer} size={50} setShow={setShowOffer}>
                <div className="py-4"></div>
            </Modal>
        </Fragment>
    )
}

export default OfferLisitngItem
