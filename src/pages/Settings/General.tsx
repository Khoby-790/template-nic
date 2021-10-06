import React, { Fragment } from 'react'

interface Props {

}

const General = (props: Props) => {
    return (
        <Fragment>
            {/* <!-- Description list with inline editing --> */}
            <div className="mt-10 divide-y divide-gray-200">
                <div className="space-y-1">
                    <h3 className="text-md leading-6 font-medium text-gray-900">
                        Profile
                  </h3>
                    <p className="max-w-2xl text-md text-gray-500">
                        This information will be displayed publicly so be careful what you share.
                  </p>
                </div>
                <div className="mt-6">
                    <dl className="divide-y divide-gray-200">
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-md font-medium text-gray-500">
                                Name
                      </dt>
                            <dd className="mt-1 flex text-md text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">Chelsea Hagon</span>
                                <span className="ml-4 flex-shrink-0">
                                    <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                        Update
                          </button>
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                            <dt className="text-md font-medium text-gray-500">
                                Photo
                      </dt>
                            <dd className="mt-1 flex text-md text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">
                                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixqx=ah3lxr8uqw&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </span>
                                <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                                    <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                        Update
                          </button>
                                    <span className="text-gray-300" aria-hidden="true">|</span>
                                    <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                        Remove
                          </button>
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                            <dt className="text-md font-medium text-gray-500">
                                Email
                      </dt>
                            <dd className="mt-1 flex text-md text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">chelsea.hagon@example.com</span>
                                <span className="ml-4 flex-shrink-0">
                                    <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                        Update
                          </button>
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                            <dt className="text-md font-medium text-gray-500">
                                Job title
                      </dt>
                            <dd className="mt-1 flex text-md text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">Human Resources Manager</span>
                                <span className="ml-4 flex-shrink-0">
                                    <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                        Update
                          </button>
                                </span>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            <div className="mt-10 divide-y divide-gray-200">
                <div className="space-y-1">
                    <h3 className="text-md leading-6 font-medium text-gray-900">
                        Account
                  </h3>
                    <p className="max-w-2xl text-md text-gray-500">
                        Manage how information is displayed on your account.
                  </p>
                </div>
                <div className="mt-6">
                    <dl className="divide-y divide-gray-200">
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-md font-medium text-gray-500">
                                Language
                      </dt>
                            <dd className="mt-1 flex text-md text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">English</span>
                                <span className="ml-4 flex-shrink-0">
                                    <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                        Update
                          </button>
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                            <dt className="text-md font-medium text-gray-500">
                                Date format
                      </dt>
                            <dd className="mt-1 flex text-md text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">DD-MM-YYYY</span>
                                <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                                    <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                        Update
                          </button>
                                    <span className="text-gray-300" aria-hidden="true">|</span>
                                    <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                        Remove
                          </button>
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                            <dt className="text-md font-medium text-gray-500" id="timezone-option-label">
                                Automatic timezone
                      </dt>
                            <dd className="mt-1 flex text-md text-gray-900 sm:mt-0 sm:col-span-2">
                                {/* <!-- Enabled: "bg-purple-600", Not Enabled: "bg-gray-200" --> */}
                                <button type="button" className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto" aria-pressed="true" aria-labelledby="timezone-option-label">
                                    <span className="sr-only">Use setting</span>
                                    {/* <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" --> */}
                                    <span aria-hidden="true" className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                                </button>
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                            <dt className="text-md font-medium text-gray-500" id="auto-update-option-label">
                                Auto-update applicant data
                      </dt>
                            <dd className="mt-1 flex text-md text-gray-900 sm:mt-0 sm:col-span-2">
                                {/* <!-- Enabled: "bg-purple-600", Not Enabled: "bg-gray-200" --> */}
                                <button type="button" className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto" aria-pressed="false" aria-labelledby="auto-update-option-label">
                                    <span className="sr-only">Use setting</span>
                                    {/* <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" --> */}
                                    <span aria-hidden="true" className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                                </button>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

        </Fragment>
    )
}

export default General
