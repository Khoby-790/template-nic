/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

interface Props {

}

const ReinsurersList = (props: Props) => {
    return (
        <div>
            <div className="h-auto px-4 py-3 flex justify-between">
                <div className="flex flex-col">
                    <span className="text-xl font-bold">Summary</span>
                    <span className="font-light">Visal Reinsurance Brokers</span>
                    <span className="font-light">Total NIC Levies for 2021</span>
                </div>
                <div>
                    <div className="flex border p-2 mb-1 rounded items-baseline">
                        <label className="mr-3" htmlFor="">Filter by currency</label>
                        <select name="" id="">
                            <option value="">GHC</option>
                            <option value="">GHC</option>
                            <option value="">GHC</option>
                        </select>
                    </div>
                    <div className="flex border p-2 rounded justify-between items-baseline">
                        <label className="mr-3" htmlFor="">Filter by year</label>
                        <select name="" id="">
                            <option value="">2021</option>
                            <option value="">2020</option>
                            <option value="">2019</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="py-4">
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Reinsurer
                                        </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Paid
                                        </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Outstanding
                                        </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Total
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* <!-- Odd row --> */}
                                        <tr className="bg-white">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                Aveni Reinsurance Company Limited
                                        </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <span>GHC</span>
                                                <span>12,000</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <span>GHC</span>
                                                <span>12,000</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <span>GHC</span>
                                                <span>12,000</span>
                                            </td>

                                        </tr>

                                        {/* <!-- Even row --> */}
                                        <tr className="bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                Ghana Reinsurance Company Limited
                                        </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <span>GHC</span>
                                                <span>12,000</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <span>GHC</span>
                                                <span>12,000</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <span>GHC</span>
                                                <span>12,000</span>
                                            </td>

                                        </tr>
                                        <tr className="bg-white">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                GN Reinsurance Company Limited
                                        </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <span>GHC</span>
                                                <span>12,000</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <span>GHC</span>
                                                <span>12,000</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <span>GHC</span>
                                                <span>12,000</span>
                                            </td>

                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                Mainstream Reinsurance Company Limited
                                        </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <span>GHC</span>
                                                <span>12,000</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <span>GHC</span>
                                                <span>12,000</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <span>GHC</span>
                                                <span>12,000</span>
                                            </td>

                                        </tr>
                                        {/* <!-- More items... --> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="border-t mt-3 mb-5 mx-5 border-gray-200 px-4 flex items-center justify-between sm:px-0">
                <div className="-mt-px w-0 flex-1 flex">
                    <a href="#" className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                        {/* <!-- Heroicon name: solid/arrow-narrow-left --> */}
                        <svg className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                        </svg>
      Previous
    </a>
                </div>
                <div className="hidden md:-mt-px md:flex">
                    <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                        1
    </a>
                    {/* <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" --> */}
                    <a href="#" className="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium" aria-current="page">
                        2
    </a>
                    <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                        3
    </a>
                    <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                        ...
    </span>
                    <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                        8
    </a>
                    <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                        9
    </a>
                    <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                        10
    </a>
                </div>
                <div className="-mt-px w-0 flex-1 flex justify-end">
                    <a href="#" className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                        Next
      {/* <!-- Heroicon name: solid/arrow-narrow-right --> */}
                        <svg className="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </nav>


        </div>
    )
}

export default ReinsurersList
