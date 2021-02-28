import React from 'react'
import { ToastProvider } from './providers'

const System: React.FC = ({ children }) => {
    return (
        <ToastProvider>
            {children}
        </ToastProvider>
    )
}

export default System
