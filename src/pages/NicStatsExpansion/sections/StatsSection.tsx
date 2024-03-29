import React, { Fragment } from 'react'

interface Props {

}

const StatsSection = (props: Props) => {
    return (
        <Fragment>
            <div>
                <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
                    <div className="px-4 py-5 sm:p-6">
                        <dt className="text-base font-normal text-gray-900">
                            Total NIC Levy
      </dt>
                        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                            <div className="flex items-baseline text-md font-semibold text-indigo-600">
                                71,897
          <span className="ml-2 text-md font-medium text-gray-500">
                                    from 70,946
          </span>
                            </div>

                            <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-md font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                                <svg className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span className="sr-only">
                                    Increased by
          </span>
          12%
        </div>
                        </dd>
                    </div>

                    <div className="px-4 py-5 sm:p-6">
                        <dt className="text-base font-normal text-gray-900">
                            Total Outstanding NIC Levy
      </dt>
                        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                            <div className="flex items-baseline text-md font-semibold text-indigo-600">
                                12,506,588
          <span className="ml-2 text-md font-medium text-gray-500">
                                    from 14,254,214
          </span>
                            </div>

                            <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-md font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                                <svg className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span className="sr-only">
                                    Increased by
          </span>
          2.02%
        </div>
                        </dd>
                    </div>

                    <div className="px-4 py-5 sm:p-6">
                        <dt className="text-base font-normal text-gray-900">
                            Total Paid NIC Levy
      </dt>
                        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                            <div className="flex items-baseline text-md font-semibold text-indigo-600">
                                6,555,636
          <span className="ml-2 text-md font-medium text-gray-500">
                                    from 5,635,785
          </span>
                            </div>

                            <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-md font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
                                <svg className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span className="sr-only">
                                    Decreased by
          </span>
          4.05%
        </div>
                        </dd>
                    </div>
                </dl>
            </div>


        </Fragment>
    )
}

export default StatsSection
