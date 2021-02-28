import React, { useState, createContext, useContext } from 'react'


type ToastContextProps = {
    showNotif: boolean;
    message: string;
    description: string;
    setShowNotif?: (prev: boolean) => void;
    notify: ({ message, description }: {
        message: string,
        description: string
    }) => void
}

const ToastContext = createContext<ToastContextProps>({
    notify: () => { },
    showNotif: false,
    description: "",
    message: "Alert",
});

export const useToast = () => useContext(ToastContext)




const ToastProvider: React.FC = ({ children }) => {
    const [showNotif, setShowNotif] = useState(false);
    const [message, setMessage] = useState("");
    const [description, setDescription] = useState("");


    const notify = ({ message, description }: {
        message: string,
        description: string
    }) => {
        setMessage(message);
        setDescription(description)
        setShowNotif(true)
    }

    return (
        <ToastContext.Provider value={{ notify, showNotif, message, description, setShowNotif }}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider
