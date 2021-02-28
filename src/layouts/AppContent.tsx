import React, { Fragment } from 'react'
import Dashboard from '../pages/Dashboard/Dashboard'
import SidebarSubMenu from './SidebarSubMenu'

interface Props {

}

const AppContent = (props: Props) => {
    return (
        <Fragment>
            <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
                {/* <!-- Primary column --> */}
                <section aria-labelledby="primary-heading" className="min-w-0 flex-1 h-full flex flex-col overflow-y-scroll lg:order-last">
                    <h1 id="primary-heading" className="sr-only">Home</h1>
                    {/* <!-- Your content --> */}
                    <Dashboard />
                </section>

                {/* <!-- Secondary column (hidden on smaller screens) --> */}
                <SidebarSubMenu />
            </main>
        </Fragment>
    )
}

export default AppContent
