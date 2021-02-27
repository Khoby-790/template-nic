import React, { Fragment, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOutsideClick } from '../hooks';
import { CLOSE_SUB_MENU } from '../store/actionTypes';

interface Props {

}

const SidebarSubMenu = (props: Props) => {
    const dsipatch = useDispatch<SidebarDispatchType>();
    const menuRef = useRef(null);
    useOutsideClick(menuRef, () => {
        dsipatch({
            type: CLOSE_SUB_MENU
        })
    });
    const isOpen = useSelector<SidebarState>(state => state.sidebarOpen)
    return !isOpen ? null : (
        <Fragment>
            <aside ref={menuRef} className="hidden transform transition-all duration-100 lg:block lg:flex-shrink-0 lg:order-first">
                <div className="h-full relative flex flex-col w-64 border-r border-gray-200 bg-gray-200">
                    {/* <!-- Your content --> */}
                </div>
            </aside>
        </Fragment>
    )
}

export default SidebarSubMenu
