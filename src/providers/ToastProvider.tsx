import React, { Fragment, ReactNode } from 'react'

interface Props {
    chidren: ReactNode
}

const ToastProvider = (props: Props) => {
    return (
        <Fragment>
            {props.chidren}
        </Fragment>
    )
}

export default ToastProvider
