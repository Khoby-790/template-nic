/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useRef } from 'react'
import { Transition } from '../../../components'
import { useOutsideClick } from '../../../hooks';

type GeneratedOffersHeaderProps = {
    header?: string;
    description?: string;
}

const GeneratedOffersHeader = (props: GeneratedOffersHeaderProps) => {
    const saveOptionsREf = useRef(null);
    const [showSaveOptions, setShowSaveOptions] = useState<boolean>(false);

    useOutsideClick(saveOptionsREf, () => setShowSaveOptions(false))

    return (
        <Fragment>
            <div className="flex h-11 justify-between items-center my-3 mr-2 mb-5">
                <div className="flex-1 flex justify-between items-center">
                    <div className="flex-1 px-2 ">
                        <h2 className="text-2xl font-medium">{props.header}</h2>
                        <p className="font-light">{props.description}</p>
                        {/* <button onClick={onNotifyClicked}>Click me</button> */}
                    </div>
                    <div className="flex-1 flex justify-end px-2">
                        <input placeholder="search" type="search" className="border-gray-200 focus:outline-none px-3 border h-10 w-1/2" />
                    </div>
                </div>
                <div className="w-20">
                    <div className="relative inline-block text-left">
                        <div>
                            <button type="button" onClick={() => setShowSaveOptions(true)} className="inline-flex justify-center w-full h-full rounded-none border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-expanded="true" aria-haspopup="true">
                                Save
                                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        <Transition
                            show={showSaveOptions}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <div ref={saveOptionsREf} className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <div className="py-1" role="none">

                                    <a href="#" className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                        {/* <!-- Heroicon name: solid/duplicate --> */}
                                        <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                                            <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                                        </svg>
                                         Duplicate
                                    </a>
                                </div>
                                <div className="py-1" role="none">
                                    <a href="#" className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                        {/* <!-- Heroicon name: solid/archive --> */}
                                        <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                            <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
                                        </svg>
                                        Archive
                                    </a>
                                    <a href="#" className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                        {/* <!-- Heroicon name: solid/arrow-circle-right --> */}
                                        <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                                        </svg>
                                        Move
                                    </a>
                                </div>

                            </div>
                        </Transition>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default GeneratedOffersHeader
