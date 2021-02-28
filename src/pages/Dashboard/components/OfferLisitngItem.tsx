import React, { Fragment, useRef, useState } from 'react'
import { Modal, Transition } from '../../../components'
import { useOutsideClick } from '../../../hooks';

interface Props {
    index: number
}

const OfferLisitngItem = (props: Props) => {
    const ref = useRef(null)
    const [showOffer, setShowOffer] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    useOutsideClick(ref, () => setShowMenu(false))
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
                <td className="px-6 py-4 flex items-center whitespace-nowrap">
                    {props.index % 2 === 0 ?
                        <svg className="text-green-800 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg> :
                        <svg className="text-red-800 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                        </svg>}
                    <span className="ml-2">
                        {(34683579).toLocaleString(undefined, { currency: "USD", style: "currency" })}
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Admin
                                            </td>
                <td className="px-6 py-4 flex justify-end whitespace-nowrap text-right text-sm font-medium">
                    <svg onClick={() => setShowOffer(true)} className="h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <button onClick={() => setShowMenu(true)} className="bg-gray-100 ml-3 rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
                        <span className="sr-only">Open options</span>
                        {/* <!-- Heroicon name: solid/dots-vertical --> */}
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                    </button>

                </td>
            </tr>

            <Modal show={showOffer} size={50} setShow={setShowOffer}>
                <div className="py-4"></div>
            </Modal>


            <Fragment>
                {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
                <div className="relative text-left">
                    <div>

                    </div>

                    <Transition
                        show={showMenu}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <div ref={ref} className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Account settings</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Support</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">License</a>
                                <form method="POST" action="#">
                                    <button type="submit" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                        Sign out
                                            </button>
                                </form>
                            </div>
                        </div>
                    </Transition>
                </div>

            </Fragment>
        </Fragment>
    )
}

export default OfferLisitngItem
