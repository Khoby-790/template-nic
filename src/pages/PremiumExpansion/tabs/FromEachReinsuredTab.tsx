import React, { useRef, useState } from 'react'
import { Modal, Transition } from '../../../components'
import { useOutsideClick } from '../../../hooks';
import DisplayBarChart from '../components/DisplayBarChart'

interface Props {

}

const FromEachReinsuredTab = (props: Props) => {
    const saveOptionsREf = useRef(null);
    const [showGraph, setShowGraph] = useState<boolean>(false)
    const [showSaveOptions, setShowSaveOptions] = useState<boolean>(false);
    useOutsideClick(saveOptionsREf, () => setShowSaveOptions(false))
    return (
        <div className="">
            <div className="h-auto px-4 py-3 flex justify-between">
                <div className="flex flex-col">
                    <span className="text-xl font-bold">Summary</span>
                    <span className="font-light">Total Premium for 2021</span>
                </div>
                <div className="flex">
                    <div className="flex border  mr-2 p-2 mb-1 rounded items-baseline">
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
            <div className="flex h-11 justify-between items-center px-5 mx-5 my-3 mr-2 mb-5">
                <div className="flex-1 flex justify-between items-center">

                    <div className="flex-1 flex justify-end px-2">
                        <input placeholder="search" type="search" className="border-gray-200 focus:outline-none px-3 border h-10 w-1/2" />
                    </div>
                </div>
                <div className="w-auto">
                    <div className="relative inline-block text-left">
                        <div>
                            <button type="button" onClick={() => setShowSaveOptions(true)} className="inline-flex justify-center w-full h-full rounded-none border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-expanded="true" aria-haspopup="true">
                                Save as
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
                                        <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                         PDF
                                    </a>
                                </div>
                                <div className="py-1" role="none">
                                    <a href="#" className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                        {/* <!-- Heroicon name: solid/archive --> */}
                                        <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                        Excel
                                    </a>
                                </div>

                            </div>
                        </Transition>
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
                                                Reinsured
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
                                            <th scope="col" className="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* <!-- Odd row --> */}
                                        <tr className="bg-white">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                National Insurance Company Limited
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
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <svg onClick={() => setShowGraph(true)} className="text-indigo-600 h-6 cursor-pointer hover:text-indigo-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                            </td>
                                        </tr>

                                        {/* <!-- Even row --> */}
                                        <tr className="bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                Royal Insurance Company Limited
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
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <svg onClick={() => setShowGraph(true)} className="text-indigo-600 h-6 cursor-pointer hover:text-indigo-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                Vanguard Assurance Company Limited
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
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <svg onClick={() => setShowGraph(true)} className="text-indigo-600 h-6 cursor-pointer hover:text-indigo-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                Enterprise Insurance Company Limited
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
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <svg onClick={() => setShowGraph(true)} className="text-indigo-600 h-6 cursor-pointer hover:text-indigo-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                            </td>
                                        </tr>

                                        {/* <!-- More items... --> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
                <nav className="border-t mt-3 border-gray-200 px-4 flex items-center justify-between sm:px-0">
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


                <Modal size={80} show={showGraph} setShow={setShowGraph}>
                    <DisplayBarChart />
                </Modal>

            </div>
        </div>
    )
}

export default FromEachReinsuredTab
