/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

interface Props {

}

const ForEachReinsurerTab = (props: Props) => {
    return (
        <div className="py-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=ah3lxr8uqw&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <a href="#" className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true"></span>
                            <p className="text-sm font-medium text-gray-900">
                                Leslie Alexander
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                                Co-Founder / CEO
                            </p>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ForEachReinsurerTab