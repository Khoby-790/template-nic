/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Transition } from '../components';
import { useOutsideClick } from '../hooks';
import { CLOSE_SUB_MENU } from '../store/actionTypes';

interface Props {

}

const SidebarSubMenu = (props: Props) => {
    const dsipatch = useDispatch<SidebarDispatchType>();
    const menuRef = useRef(null);
    useOutsideClick(menuRef, () => {
        dsipatch({
            type: CLOSE_SUB_MENU
        })
    });
    const isOpen = useSelector<SidebarState>(state => state.sidebarOpen)
    return (
        <Transition show={isOpen ? true : false}>
            <Transition
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="opacity-100 translate-x-0 sm:scale-100"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="opacity-100 translate-x-0 sm:scale-100"
                leaveTo="-translate-x-full"
            >
                <aside ref={menuRef} className="hidden absolute top-16 bottom-0 overflow-hidden lg:block lg:flex-shrink-0 lg:order-first">
                    <div className="h-full relative flex flex-col w-64 border-r border-gray-200 bg-gray-200">
                        {/* <!-- Your content --> */}
                        <nav className="mt-5 px-2 space-y-1">
                            {/* <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" --> */}
                            <Link to="/" className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                {/* <!-- Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500" --> */}
                                {/* <!-- Heroicon name: outline/home --> */}
                                <svg className="text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                </svg>

                            Dashboard
                            </Link>

                            <Link to="/reports" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                {/* <!-- Heroicon name: outline/users --> */}
                                <svg className="text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                </svg>
                                Reports
                            </Link>

                            <Link to="/" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                {/* <!-- Heroicon name: outline/folder --> */}
                                <svg className="text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                </svg>
                            Projects
                            </Link>

                            <Link to="/" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                {/* <!-- Heroicon name: outline/calendar --> */}
                                <svg className="text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                </svg>
                              Calendar
                            </Link>

                            <Link to="/" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                {/* <!-- Heroicon name: outline/inbox --> */}
                                <svg className="text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                </svg>
                              Documents
                            </Link>

                            <Link to="/" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                {/* <!-- Heroicon name: outline/chart-bar --> */}
                                <svg className="text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                </svg>
                              Reports
                            </Link>
                        </nav>
                    </div>
                </aside>
            </Transition>

        </Transition>
    )
}

export default SidebarSubMenu
