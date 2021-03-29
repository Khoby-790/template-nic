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

            <div className="h-full flex">
                <Sidebar />
                <div className="flex-1">
                    <Navbar />

                    <AppContent />
                </div>
            </div>

            <div className="h-screen overflow-hidden bg-gray-100 flex flex-col">
                {/* <!-- Top nav--> */}
                {/* <!-- Bottom section --> */}
                <div className="min-h-0 flex-1 flex overflow-hidden">
                    {/* <!-- Narrow sidebar--> */}
                    {/* <Sidebar /> */}
                    {/* <!-- Main area --> */}
                </div>
            </div>
        </Fragment>
    )
}

export default AppLayout
