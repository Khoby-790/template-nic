/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

interface Props {

}

const WelcomeSection = (props: Props) => {
    return (
        <>
            <section aria-labelledby="profile-overview-title ">
                <div className="rounded-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 overflow-hidden shadow">
                    <h2 className="sr-only" id="profile-overview-title">Profile Overview</h2>
                    <div className="bg-gradient-to-r from-indigo-700 via-indigo-500 to-purple-500 p-6">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <div className="sm:flex sm:space-x-5">
                                <div className="flex-shrink-0">
                                    <img className="mx-auto h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                </div>
                                <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                    <p className="text-sm font-medium text-gray-100">Welcome back,</p>
                                    <p className="text-xl font-bold text-gray-900 sm:text-2xl">Rebecca Nicholas</p>
                                    <p className="text-sm font-medium text-gray-300">Managing Director</p>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-center sm:mt-0">
                                <a href="#" className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                    View profile
                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WelcomeSection
