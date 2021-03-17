import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import Inbox from '../pages/Inbox/Inbox'
import Reports from '../pages/Reports/Reports'
import Settings from '../pages/Settings/Settings'
import SidebarSubMenu from './SidebarSubMenu'

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
                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/reports" component={Reports} />
                        <Route path="/inbox" component={Inbox} />
                        <Route path="/settings" component={Settings} />
                    </Switch>
                </section>

                {/* <!-- Secondary column (hidden on smaller screens) --> */}
                <SidebarSubMenu />
            </main>
        </Fragment>
    )
}

export default AppContent
