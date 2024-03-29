import React, { useRef, Fragment, ReactNode } from "react";
import Transition from "./Transition";
import { useOutsideClick } from "../hooks";
import { useMediaQuery } from "react-responsive";




const Modal = ({ show, setShow, size = 35, children, canClose = true, height = 50 }) => {
    const ref = useRef(null);
    useOutsideClick(ref, () => {
        if (canClose) setShow(false);
    });
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

    const allChildren = React.Children.map(children, (child) => {
        // console.log(child);
        if (child) {
            if (typeof child.type !== "function") return child;
            const clone = React.cloneElement(child, {
                setShow: setShow,
            });

            return clone;
        }
        return null;
    });

    return (
        <Fragment>
            <Transition show={show}>
                <div className="fixed z-20 bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
                    <Transition
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-out duration-300"
                        leaveFrom="translate-x-0"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed  inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-black opacity-50" />
                        </div>
                    </Transition>

                    <Transition
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enterFrom="translate-x-32"
                        enterTo="opacity-100 translate-x-0 sm:scale-100"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leaveFrom="opacity-100 translate-x-0 sm:scale-100"
                        leaveTo="-translate-x-full"
                    >
                        <div className="fixed z-20 bottom-0  inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
                            <div
                                ref={ref}
                                style={{ width: `${isTabletOrMobile ? 90 : size}vw`, }}
                                className="bg-white  rounded-md w-full  overflow-scroll shadow-xl max-h-screen shadow-xl transform transition-all"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="modal-headline"
                            >
                                {allChildren}
                            </div>
                        </div>
                    </Transition>
                </div>
            </Transition>
        </Fragment>
    )
}

export default Modal


