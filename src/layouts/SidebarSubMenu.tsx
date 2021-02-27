import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

interface Props {

}

const SidebarSubMenu = (props: Props) => {
    const isOpen = useSelector<SidebarState>(state => state.sidebarOpen)
    return !isOpen ? null : (
        <Fragment>
            <aside className="hidden lg:block lg:flex-shrink-0 lg:order-first">
                <div className="h-full relative flex flex-col w-64 border-r border-gray-200 bg-gray-200">
                    {/* <!-- Your content --> */}
                </div>
            </aside>
        </Fragment>
    )
}

export default SidebarSubMenu
