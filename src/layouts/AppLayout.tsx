/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react'
import AppContent from './AppContent'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
interface Props {

}

const AppLayout = (props: Props) => {
    return (
        <Fragment>

            <div className="h-screen overflow-hidden bg-gray-100 flex flex-col">
                {/* <!-- Top nav--> */}
                <Navbar />
                {/* <!-- Bottom section --> */}
                <div className="min-h-0 flex-1 flex overflow-hidden">
                    {/* <!-- Narrow sidebar--> */}
                    <Sidebar />
                    {/* <!-- Main area --> */}
                    <AppContent />
                </div>
            </div>
        </Fragment>
    )
}

export default AppLayout
