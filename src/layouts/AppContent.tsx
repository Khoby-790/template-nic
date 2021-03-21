import React, { Fragment, lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
const NewDashboard = lazy(() => import('../pages/NewDashboard/NewDashboard'))
const NicStatsExpansion = lazy(() => import('../pages/NicStatsExpansion/NicStatsExpansion'))
const Reports = lazy(() => import('../pages/Reports/Reports'))
const Settings = lazy(() => import('../pages/Settings/Settings'))
const SidebarSubMenu = lazy(() => import('./SidebarSubMenu'))
const Inbox = lazy(() => import('../pages/Inbox/Inbox'))
interface Props {

}

const AppContent = (props: Props) => {
    return (
        <Fragment>
            <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
                {/* <!-- Primary column --> */}
                <section aria-labelledby="primary-heading" className="min-w-0 transition duration-500 flex-1 h-full flex flex-col overflow-y-scroll lg:order-last">
                    <h1 id="primary-heading" className="sr-only">Home</h1>
                    {/* <!-- Your content --> */}
                    <Suspense fallback={<h1>Loading ...</h1>}>
                        <Switch>
                            <Route path="/" exact component={NewDashboard} />
                            <Route path="/nic" component={NicStatsExpansion} />
                            <Route path="/reports" component={Reports} />
                            <Route path="/inbox" component={Inbox} />
                            <Route path="/settings" component={Settings} />
                        </Switch>
                    </Suspense>
                </section>

                {/* <!-- Secondary column (hidden on smaller screens) --> */}
                <SidebarSubMenu />
            </main>
        </Fragment>
    )
}

export default AppContent
