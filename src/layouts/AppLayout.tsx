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
                <div className="flex-1 h-full">
                    <Navbar />
                    <div className="bg-red-500 flex-1"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default AppLayout
