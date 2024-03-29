import React, { Fragment, useRef } from 'react'
import { Transition } from '.'
import { useToast } from '../providers/ToastProvider'
import { useOutsideClick } from '../hooks';
interface Props {

}

const Taoster = (props: Props) => {
    const notificationRef = useRef(null)
    const { showNotif, description, message, setShowNotif } = useToast()
    useOutsideClick(notificationRef, () => {
        setShowNotif && setShowNotif(false)
    });
    return (
        <Fragment>
            <div className="absolute inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
                <Transition
                    show={showNotif}
                    enter="transform ease-out duration-300 transition"
                    enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                    enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div ref={notificationRef} className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="p-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    {/* <!-- Heroicon name: outline/check-circle --> */}
                                    <svg className="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="ml-3 w-0 flex-1 pt-0.5">
                                    <p className="text-md font-medium text-gray-900">
                                        {message}
                                    </p>
                                    <p className="mt-1 text-md text-gray-500">
                                        {description}
                                    </p>
                                </div>
                                <div className="ml-4 flex-shrink-0 flex">
                                    <button onClick={() => setShowNotif && setShowNotif(false)} className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <span className="sr-only">Close</span>
                                        {/* <!-- Heroicon name: solid/x --> */}
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
            {/* </Transition> */}
        </Fragment>
    )
}

export default Taoster
