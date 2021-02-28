import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Transition } from '../components';
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
    return (
        <Transition show={isOpen ? true : false}>
            <Transition
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="opacity-100 translate-x-0 sm:scale-100"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="opacity-100 translate-x-0 sm:scale-100"
                leaveTo="-translate-x-full"
            >
                <aside ref={menuRef} className="hidden absolute top-16 bottom-0 overflow-hidden lg:block lg:flex-shrink-0 lg:order-first">
                    <div className="h-full relative flex flex-col w-64 border-r border-gray-200 bg-gray-200">
                        {/* <!-- Your content --> */}
                        
                    </div>
                </aside>
            </Transition>

        </Transition>
    )
}

export default SidebarSubMenu
