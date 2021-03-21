/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

interface Props {
    name?: string
}

const ReinsurerPill = ({ name }: Props) => {
    return (
        <>
            <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=ah3lxr8uqw&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div className="flex-1 min-w-0">
                    <a href="#" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true"></span>
                        <p className="text-sm font-medium text-gray-900">
                            {name || "Leslie Alexander"}
                        </p>
                        <p className="text-sm flex items-center text-gray-500 truncate">
                            <svg className="h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span>East Legon</span>
                        </p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default ReinsurerPill
