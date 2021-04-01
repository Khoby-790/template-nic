/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react'
import AppContent from './AppContent'
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import { RouteComponentProps, } from 'react-router-dom';
import { RealtimeFloatingStats } from '../components';


interface StaticContext {
    statusCode?: number;
}

type Props = RouteComponentProps<any, StaticContext, unknown>

const AppLayout = ({ history, match }: Props) => {
    return (
        <Fragment>
            <div className="lg:h-screen flex">
                <Sidebar />
                <div className="flex-1 flex flex-col h-full overflow-y-scroll">
                    <Navbar />
                    <div className="bg-gray-100 lg:flex-1 max-h-full h-full overflow-y-scroll">
                        <AppContent />
                    </div>
                </div>
            </div>
            <RealtimeFloatingStats />
        </Fragment>
    )
}

export default AppLayout
