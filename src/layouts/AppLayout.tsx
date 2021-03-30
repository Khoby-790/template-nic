/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react'
import AppContent from './AppContent'
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import { RouteComponentProps, } from 'react-router-dom';


interface StaticContext {
    statusCode?: number;
}

type Props = RouteComponentProps<any, StaticContext, unknown>

const AppLayout = ({ history, match }: Props) => {
    return (
        <Fragment>
            <div className="h-screen flex">
                <Sidebar />
                <div className="flex-1 flex flex-col h-full">
                    <Navbar />
                    <div className="bg-gray-100 flex-1 max-h-full h-full overflow-y-scroll">
                        <AppContent />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-10 w-9/12 right-0 shadow-xl rounded-lg px-5 bg-white">
                <div className="h-9 flex items-center justify-between">
                    <span className="text-lg">Realtime Data on placed offers</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                </div>

            </div>
        </Fragment>
    )
}

export default AppLayout
