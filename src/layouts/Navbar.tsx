/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/nic-logo.png";
import avatar from "../assets/23511370.jpg";
import { Transition } from "../components";
import { useOutsideClick } from "../hooks";

interface Props {}

const Navbar = (props: Props) => {
  const profileRef = useRef(null);
  useOutsideClick(profileRef, () => setShowProfileMenu(false));
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  return (
    <Fragment>
      <header className="flex-shrink-0 relative h-16 bg-white flex items-center">
        {/* <!-- Logo area --> */}
        <div className="absolute lg:hidden inset-y-0 z-10 left-0 md:static md:flex-shrink-0">
          <a
            href="#"
            className="flex items-center z-10 justify-center h-16 w-16  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20"
          >
            <img className="h-11 w-auto" src={logo} alt="Workflow" />
          </a>
        </div>

        {/* <!-- Menu button area --> */}
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 md:hidden">
          {/* <!-- Mobile menu button --> */}
          <button
            onClick={() => setShowSideBar(true)}
            type="button"
            className="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {/* <!-- Heroicon name: outline/menu --> */}
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* <!-- Desktop nav area --> */}
        <div className="hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <div className="max-w-2xl relative text-gray-400 focus-within:text-gray-500">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <input
                id="search"
                type="search"
                placeholder="Search"
                className="hidden w-full border-transparent pl-12 placeholder-gray-500 focus:border-transparent sm:text-md focus:ring-0"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
                {/* <!-- Heroicon name: solid/search --> */}
                <svg
                  className="h-5 w-5 hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
            <nav aria-label="Global" className="flex space-x-10">
              {/* <Link to="/inbox" className="text-md font-medium text-gray-900">Inboxes</Link> */}
              <Link to="/reports" className="text-md font-medium text-gray-900">
                Reporting
              </Link>
              <Link
                to="/settings"
                className="text-md font-medium text-gray-900"
              >
                Settings
              </Link>
            </nav>
            <div className="flex items-center space-x-8">
              <span className="inline-flex">
                <a
                  href="#"
                  className="-mx-1 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  {/* <!-- Heroicon name: outline/bell --> */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </a>
              </span>

              <div className="relative inline-block text-left">
                <button
                  onClick={() => setShowProfileMenu(true)}
                  type="button"
                  className="bg-white rounded-full flex text-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                  id="menu-1"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src={avatar} alt="" />
                </button>

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
                  show={showProfileMenu}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <div
                    ref={profileRef}
                    className="origin-top-right absolute z-30 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-1"
                  >
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 focus:bg-gray-100"
                        role="menuitem"
                      >
                        Your Profile
                      </a>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 focus:bg-gray-100"
                        role="menuitem"
                      >
                        Sign Out
                      </Link>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide this `div` based on menu open/closed state --> */}
        <Transition
          show={showSideBar}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 z-40 md:hidden">
            {/* <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      --> */}
            <div
              className="hidden sm:block sm:fixed sm:inset-0 md:hidden"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>

            {/* <!--
        Mobile menu, toggle classes based on menu state.

        Entering: "transition ease-out duration-150 sm:ease-in-out sm:duration-300"
          From: "transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
          To: "transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100"
        Leaving: "transition ease-in duration-150 sm:ease-in-out sm:duration-300"
          From: "transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
          To: "transform opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100"
      --> */}
            <Transition
              enter="ransition ease-out duration-150 sm:ease-in-out sm:duration-300"
              enterFrom="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
              enterTo="transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100"
              leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
              leaveFrom="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
              leaveTo="transform opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100"
            >
              <nav
                className="fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg md:hidden"
                aria-label="Global"
              >
                <div className="h-16 flex items-center justify-between px-4 sm:px-6">
                  <a href="#">
                    <img
                      className="block h-8 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                  </a>
                  <button
                    onClick={() => setShowSideBar(false)}
                    type="button"
                    className="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    {/* <!-- Heroicon name: outline/x --> */}
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-2 hidden max-w-8xl mx-auto px-4 sm:px-6">
                  <div className="relative text-gray-400 focus-within:text-gray-500">
                    <label htmlFor="search" className="sr-only">
                      Search all inboxes
                    </label>
                    <input
                      id="search"
                      type="search"
                      placeholder="Search all inboxes"
                      className="block w-full border-gray-300 rounded-md pl-10 placeholder-gray-500 focus:border-indigo-600 focus:ring-indigo-600"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                      {/* <!-- Heroicon name: solid/search --> */}
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="max-w-8xl mx-auto py-3 px-2 sm:px-4">
                  <Link
                    to="/app/"
                    className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/app/nic"
                    className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                  >
                    NIC Levy
                  </Link>
                  <Link
                    to="/app/placements"
                    className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                  >
                    Placement Request
                  </Link>
                  <Link
                    to="/app/payments"
                    className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                  >
                    Payment Request
                  </Link>

                  <Link
                    to="/app/premium"
                    className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                  >
                    Premium
                  </Link>
                  <Link
                    to="/app/claims"
                    className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                  >
                    Claims
                  </Link>
                  {/* <Link
                    to="/_offers"
                    className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                  >
                    Offers placed
                  </Link> */}
                  <Link
                    to="/app/reports"
                    className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                  >
                    Reports
                  </Link>
                </div>
                <div className="border-t border-gray-200 pt-4 pb-3">
                  <div className="max-w-8xl mx-auto px-4 flex items-center sm:px-6">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3 min-w-0 flex-1">
                      <div className="text-base font-medium text-gray-800 truncate">
                        Whitney Francis
                      </div>
                      <div className="text-md font-medium text-gray-500 truncate">
                        whitneyfrancis@example.com
                      </div>
                    </div>
                    <a
                      href="#"
                      className="ml-auto flex-shrink-0 bg-white p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">View notifications</span>
                      {/* <!-- Heroicon name: outline/bell --> */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="mt-3 max-w-8xl mx-auto px-2 space-y-1 sm:px-4">
                    <a
                      href="#"
                      className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      Your Profile
                    </a>

                    <Link
                      to="/auth"
                      className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      Sign out
                    </Link>
                  </div>
                </div>
              </nav>
            </Transition>
          </div>
        </Transition>
      </header>
    </Fragment>
  );
};

export default Navbar;
