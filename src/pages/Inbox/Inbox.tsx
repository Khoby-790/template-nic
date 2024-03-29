/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useRef } from 'react'
import { Transition } from '../../components'
import { useOutsideClick } from '../../hooks'

interface Props {

}

const Inbox = (props: Props) => {
    const detailsRef = useRef(null);
    const openRef = useRef(null);
    const [openOpenMenu, setOpenOpenMenu] = useState(false)
    const [showDetailsMenu, setShowDetailsMenu] = useState(false);
    useOutsideClick(detailsRef, () => setShowDetailsMenu(false))
    useOutsideClick(openRef, () => setOpenOpenMenu(false))
    return (
        <Fragment>
            <main className="min-w-0 flex-1 overflow-y-scroll border-t border-gray-200 xl:flex">
                <section aria-labelledby="message-heading" className="min-w-0 flex-1 h-full flex flex-col overflow-hidden xl:order-last">
                    {/* <!-- Top section --> */}
                    <div className="flex-shrink-0 bg-white border-b border-gray-200">
                        {/* <!-- Toolbar--> */}
                        <div className="h-16 flex flex-col justify-center">
                            <div className="px-4 sm:px-6 lg:px-8">
                                <div className="py-3 flex justify-between">
                                    {/* <!-- Left buttons --> */}
                                    <div>
                                        <span className="relative z-0 inline-flex shadow-sm rounded-md sm:shadow-none sm:space-x-3">
                                            <span className="inline-flex sm:shadow-sm">
                                                <button type="button" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-md font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                                                    {/* <!-- Heroicon name: solid/reply --> */}
                                                    <svg className="mr-2.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                    </svg>
                                                    <span>Reply</span>
                                                </button>
                                                <button type="button" className="hidden sm:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-md font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                                                    {/* <!-- Heroicon name: solid/pencil --> */}
                                                    <svg className="mr-2.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                    </svg>
                                                    <span>Note</span>
                                                </button>
                                                <button type="button" className="hidden sm:inline-flex -ml-px relative items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-md font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                                                    {/* <!-- Heroicon name: solid/user-add --> */}
                                                    <svg className="mr-2.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                                                    </svg>
                                                    <span>Assign</span>
                                                </button>
                                            </span>

                                            <span className="hidden lg:flex space-x-3">
                                                <button type="button" className="hidden sm:inline-flex -ml-px relative items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-md font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                                                    {/* <!-- Heroicon name: solid/archive --> */}
                                                    <svg className="mr-2.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                                        <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                    </svg>
                                                    <span>Archive</span>
                                                </button>
                                                <button type="button" className="hidden sm:inline-flex -ml-px relative items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-md font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                                                    {/* <!-- Heroicon name: solid/folder-download --> */}
                                                    <svg className="mr-2.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                                                        <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v4m0 0l-2-2m2 2l2-2" />
                                                    </svg>
                                                    <span>Move</span>
                                                </button>
                                            </span>

                                            <span className="-ml-px relative block sm:shadow-sm lg:hidden">
                                                <div>
                                                    <button type="button" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-md font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 sm:rounded-md sm:px-3" id="menu-3" aria-expanded="false" aria-haspopup="true">
                                                        <span className="sr-only sm:hidden">More</span>
                                                        <span className="hidden sm:inline">More</span>
                                                        {/* <!-- Heroicon name: solid/chevron-down --> */}
                                                        <svg className="h-5 w-5 text-gray-400 sm:ml-2 sm:-mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                        </svg>
                                                    </button>
                                                </div>

                                                {/* <!--
                        Dropdown menu, show/hide based on menu state.

                        Entering: "transition ease-out duration-100"
                          From: "transform opacity-0 scale-95"
                          To: "transform opacity-100 scale-100"
                        Leaving: "transition ease-in duration-75"
                          From: "transform opacity-100 scale-100"
                          To: "transform opacity-0 scale-95"
                      --> */}
                                                <Transition
                                                    show={showDetailsMenu}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <div ref={detailsRef} className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-3">
                                                        <div className="py-1">
                                                            <a href="#" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                                                Note
                                                        </a>

                                                            <a href="#" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                                                Assign
                                                        </a>

                                                            <a href="#" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                                                Archive
                                                        </a>

                                                            <a href="#" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                                                Move
                                                        </a>
                                                        </div>
                                                    </div>
                                                </Transition>
                                            </span>
                                        </span>
                                    </div>

                                    {/* <!-- Right buttons --> */}
                                    <nav aria-label="Pagination">
                                        <span className="relative z-0 inline-flex shadow-sm rounded-md">
                                            <a href="#" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-md font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                                                <span className="sr-only">Next</span>
                                                {/* <!-- Heroicon name: solid/chevron-up --> */}
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                                                </svg>
                                            </a>
                                            <a href="#" className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-md font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                                                <span className="sr-only">Previous</span>
                                                {/* <!-- Heroicon name: solid/chevron-down --> */}
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                </svg>
                                            </a>
                                        </span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Message header --> */}
                    </div>

                    <div className="min-h-0 flex-1 overflow-y-auto">
                        <div className="bg-white pt-5 pb-6 shadow">
                            <div className="px-4 sm:flex sm:justify-between sm:items-baseline sm:px-6 lg:px-8">
                                <div className="sm:w-0 sm:flex-1">
                                    <h1 id="message-heading" className="text-md font-medium text-gray-900">
                                        Re: New pricing for existing customers
                </h1>
                                    <p className="mt-1 text-md text-gray-500 truncate">
                                        joearmstrong@example.com
                </p>
                                </div>

                                <div className="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start">
                                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-md font-medium bg-cyan-100 text-cyan-800">
                                        Open
                </span>
                                    <div className="ml-3 relative inline-block text-left">
                                        <div>
                                            <button onClick={() => setOpenOpenMenu(true)} type="button" className="-my-2 p-2 rounded-full bg-white flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600" id="menu-4" aria-expanded="false" aria-haspopup="true">
                                                <span className="sr-only">Open options</span>
                                                {/* <!-- Heroicon name: solid/dots-vertical --> */}
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* <!--
                    Dropdown menu, show/hide based on menu state.

                    Entering: "transition ease-out duration-100"
                      From: "transform opacity-0 scale-95"
                      To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                      From: "transform opacity-100 scale-100"
                      To: "transform opacity-0 scale-95"
                  --> */}

                                        <Transition
                                            show={openOpenMenu}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <div ref={openRef} className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-4">
                                                <div className="py-1">
                                                    <button type="button" className="w-full flex justify-between px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                                        <span>Copy email address</span>
                                                    </button>
                                                    <a href="#" className="flex justify-between px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                                        <span>Previous conversations</span>
                                                    </a>
                                                    <a href="#" className="flex justify-between px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                                        <span>View original</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </Transition>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Thread section--> */}
                        <ul className="py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8">
                            <li className="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
                                <div className="sm:flex sm:justify-between sm:items-baseline">
                                    <h3 className="text-base font-medium">
                                        <span className="text-gray-900">Joe Armstrong</span>
                                        <span className="text-gray-600">wrote</span>
                                    </h3>
                                    <p className="mt-1 text-md text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3">
                                        <time dateTime="2021-01-28T19:24">Yesterday at 7:24am</time>
                                    </p>
                                </div>
                                <div className="mt-4 space-y-6 text-md text-gray-800">
                                    <p>Thanks so much! Can't wait to try it out.</p>
                                </div>
                            </li>

                            <li className="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
                                <div className="sm:flex sm:justify-between sm:items-baseline">
                                    <h3 className="text-base font-medium">
                                        <span className="text-gray-900">Monica White</span>
                                        <span className="text-gray-600">wrote</span>
                                    </h3>
                                    <p className="mt-1 text-md text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3">
                                        <time dateTime="2021-01-27T16:35">Wednesday at 4:35pm</time>
                                    </p>
                                </div>
                                <div className="mt-4 space-y-6 text-md text-gray-800">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.
                                    </p>
                                    <p>
                                        Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.
                                    </p>
                                    <p>
                                        <strong style={{ fontWeight: 600 }}>Monica White</strong><br />
                                            Customer Service
                                        </p>
                                </div>
                            </li>

                            <li className="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
                                <div className="sm:flex sm:justify-between sm:items-baseline">
                                    <h3 className="text-base font-medium">
                                        <span className="text-gray-900">Joe Armstrong</span>
                                        <span className="text-gray-600">wrote</span>
                                    </h3>
                                    <p className="mt-1 text-md text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3">
                                        <time dateTime="2021-01-27T16:09">Wednesday at 4:09pm</time>
                                    </p>
                                </div>
                                <div className="mt-4 space-y-6 text-md text-gray-800">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.
                </p>
                                    <p>
                                        Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.
                </p>
                                    <p>
                                        – Joe
                </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* <!-- Message list--> */}
                <aside className="hidden xl:block xl:flex-shrink-0 xl:order-first">
                    <div className="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100">
                        <div className="flex-shrink-0">
                            <div className="h-16 bg-white px-6 flex flex-col justify-center">
                                <div className="flex items-baseline space-x-3">
                                    <h2 className="text-ls font-medium text-gray-900">Inbox</h2>
                                    <p className="text-md font-medium text-gray-500">12 messages</p>
                                </div>
                            </div>
                            <div className="border-t border-b border-gray-200 bg-gray-50 px-6 py-2 text-md font-medium text-gray-500">
                                Sorted by date
            </div>
                        </div>
                        <nav aria-label="Message list" className="min-h-0 flex-1 overflow-y-auto">
                            <ul className="border-b border-gray-200 divide-y divide-gray-200">
                                <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                                    <div className="flex justify-between space-x-3">
                                        <div className="min-w-0 flex-1">
                                            <a href="#" className="block focus:outline-none">
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                                <p className="text-md font-medium text-gray-900 truncate">Gloria Roberston</p>
                                                <p className="text-md text-gray-500 truncate">Velit placeat sit ducimus non sed</p>
                                            </a>
                                        </div>
                                        <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-md text-gray-500">1d ago</time>
                                    </div>
                                    <div className="mt-1">
                                        <p className="line-clamp-2 text-md text-gray-600">
                                            Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                  </p>
                                    </div>
                                </li>

                                <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                                    <div className="flex justify-between space-x-3">
                                        <div className="min-w-0 flex-1">
                                            <a href="#" className="block focus:outline-none">
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                                <p className="text-md font-medium text-gray-900 truncate">Virginia Abshire</p>
                                                <p className="text-md text-gray-500 truncate">Nemo mollitia repudiandae adipisci explicabo optio consequatur tempora ut nihil</p>
                                            </a>
                                        </div>
                                        <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-md text-gray-500">1d ago</time>
                                    </div>
                                    <div className="mt-1">
                                        <p className="line-clamp-2 text-md text-gray-600">
                                            Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                  </p>
                                    </div>
                                </li>

                                <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                                    <div className="flex justify-between space-x-3">
                                        <div className="min-w-0 flex-1">
                                            <a href="#" className="block focus:outline-none">
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                                <p className="text-md font-medium text-gray-900 truncate">Kyle Gulgowski</p>
                                                <p className="text-md text-gray-500 truncate">Doloremque reprehenderit et harum quas explicabo nulla architecto dicta voluptatibus</p>
                                            </a>
                                        </div>
                                        <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-md text-gray-500">1d ago</time>
                                    </div>
                                    <div className="mt-1">
                                        <p className="line-clamp-2 text-md text-gray-600">
                                            Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                  </p>
                                    </div>
                                </li>

                                <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                                    <div className="flex justify-between space-x-3">
                                        <div className="min-w-0 flex-1">
                                            <a href="#" className="block focus:outline-none">
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                                <p className="text-md font-medium text-gray-900 truncate">Hattie Haag</p>
                                                <p className="text-md text-gray-500 truncate">Eos sequi et aut ex impedit</p>
                                            </a>
                                        </div>
                                        <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-md text-gray-500">1d ago</time>
                                    </div>
                                    <div className="mt-1">
                                        <p className="line-clamp-2 text-md text-gray-600">
                                            Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                  </p>
                                    </div>
                                </li>

                                <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                                    <div className="flex justify-between space-x-3">
                                        <div className="min-w-0 flex-1">
                                            <a href="#" className="block focus:outline-none">
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                                <p className="text-md font-medium text-gray-900 truncate">Wilma Glover</p>
                                                <p className="text-md text-gray-500 truncate">Quisquam veniam explicabo</p>
                                            </a>
                                        </div>
                                        <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-md text-gray-500">1d ago</time>
                                    </div>
                                    <div className="mt-1">
                                        <p className="line-clamp-2 text-md text-gray-600">
                                            Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                  </p>
                                    </div>
                                </li>

                                <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                                    <div className="flex justify-between space-x-3">
                                        <div className="min-w-0 flex-1">
                                            <a href="#" className="block focus:outline-none">
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                                <p className="text-md font-medium text-gray-900 truncate">Dolores Morissette</p>
                                                <p className="text-md text-gray-500 truncate">Est ratione molestiae modi maiores consequatur eligendi et excepturi magni</p>
                                            </a>
                                        </div>
                                        <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-md text-gray-500">1d ago</time>
                                    </div>
                                    <div className="mt-1">
                                        <p className="line-clamp-2 text-md text-gray-600">
                                            Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                  </p>
                                    </div>
                                </li>

                                <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                                    <div className="flex justify-between space-x-3">
                                        <div className="min-w-0 flex-1">
                                            <a href="#" className="block focus:outline-none">
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                                <p className="text-md font-medium text-gray-900 truncate">Guadalupe Walsh</p>
                                                <p className="text-md text-gray-500 truncate">Commodi deserunt aut veniam rem ipsam</p>
                                            </a>
                                        </div>
                                        <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-md text-gray-500">1d ago</time>
                                    </div>
                                    <div className="mt-1">
                                        <p className="line-clamp-2 text-md text-gray-600">
                                            Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                  </p>
                                    </div>
                                </li>

                                <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                                    <div className="flex justify-between space-x-3">
                                        <div className="min-w-0 flex-1">
                                            <a href="#" className="block focus:outline-none">
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                                <p className="text-md font-medium text-gray-900 truncate">Jasmine Hansen</p>
                                                <p className="text-md text-gray-500 truncate">Illo illum aut debitis earum</p>
                                            </a>
                                        </div>
                                        <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-md text-gray-500">1d ago</time>
                                    </div>
                                    <div className="mt-1">
                                        <p className="line-clamp-2 text-md text-gray-600">
                                            Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                  </p>
                                    </div>
                                </li>

                                <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                                    <div className="flex justify-between space-x-3">
                                        <div className="min-w-0 flex-1">
                                            <a href="#" className="block focus:outline-none">
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                                <p className="text-md font-medium text-gray-900 truncate">Ian Volkman</p>
                                                <p className="text-md text-gray-500 truncate">Qui dolore iste ut est cumque sed</p>
                                            </a>
                                        </div>
                                        <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-md text-gray-500">1d ago</time>
                                    </div>
                                    <div className="mt-1">
                                        <p className="line-clamp-2 text-md text-gray-600">
                                            Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                  </p>
                                    </div>
                                </li>

                                <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                                    <div className="flex justify-between space-x-3">
                                        <div className="min-w-0 flex-1">
                                            <a href="#" className="block focus:outline-none">
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                                <p className="text-md font-medium text-gray-900 truncate">Rafael Klocko</p>
                                                <p className="text-md text-gray-500 truncate">Aut sed aut illum delectus maiores laboriosam ex</p>
                                            </a>
                                        </div>
                                        <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-md text-gray-500">1d ago</time>
                                    </div>
                                    <div className="mt-1">
                                        <p className="line-clamp-2 text-md text-gray-600">
                                            Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                  </p>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
            </main>
        </Fragment>
    )
}

export default Inbox
