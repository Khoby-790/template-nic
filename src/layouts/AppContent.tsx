import React, { Fragment } from 'react'

interface Props {
    
}

const AppContent = (props: Props) => {
    return (
        <Fragment>
            <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
                        {/* <!-- Primary column --> */}
                        <section aria-labelledby="primary-heading" className="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last">
                            <h1 id="primary-heading" className="sr-only">Home</h1>
                            {/* <!-- Your content --> */}
                        </section>

                        {/* <!-- Secondary column (hidden on smaller screens) --> */}
                        <aside className="hidden lg:block lg:flex-shrink-0 lg:order-first">
                            <div className="h-full relative flex flex-col w-96 border-r border-gray-200 bg-red-100">
                                {/* <!-- Your content --> */}
                            </div>
                        </aside>
                    </main>
        </Fragment>
    )
}

export default AppContent
