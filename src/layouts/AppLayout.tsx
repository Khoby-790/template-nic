/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react'
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
                    <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
                        {/* <!-- Primary column --> */}
                        <section aria-labelledby="primary-heading" className="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last">
                            <h1 id="primary-heading" className="sr-only">Home</h1>
                            {/* <!-- Your content --> */}
                        </section>

                        {/* <!-- Secondary column (hidden on smaller screens) --> */}
                        <aside className="hidden lg:block lg:flex-shrink-0 lg:order-first">
                            <div className="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100">
                                {/* <!-- Your content --> */}
                            </div>
                        </aside>
                    </main>
                </div>
            </div>

        </Fragment>
    )
}

export default AppLayout
