import React, { Fragment, useState, createContext, useContext, useRef } from 'react'
import { Transition } from '../components'
import { useOutsideClick } from '../hooks';

type ToastContextProps = {
    showNotif: boolean;
    message: string;
    description: string;
    notify: ({ message, description }: {
        message: string,
        description: string
    }) => void
}

const ToastContext = createContext<ToastContextProps>({
    notify: () => { },
    showNotif: false,
    description: "",
    message: "Alert"
});

export const useToast = () => useContext(ToastContext)




const ToastProvider: React.FC = ({ children }) => {
    const notificationRef = useRef(null)
    const [showNotif, setShowNotif] = useState(false);
    const [message, setMessage] = useState("");
    const [description, setDescription] = useState("");
    useOutsideClick(notificationRef, () => setShowNotif(false))

    const notify = ({ message, description }: {
        message: string,
        description: string
    }) => {
        setMessage(message);
        setDescription(description)
        setShowNotif(true)
    }

    return (
        <ToastContext.Provider value={{ notify, showNotif, message, description }}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider
