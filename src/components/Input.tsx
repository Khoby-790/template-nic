import React, { Fragment } from 'react'

interface Props {
    label?: string;
    type?: "date" | "text" | "password" | "email"
}


type InputHtmlProps = HTMLInputElement | any

const Input = ({ label, type = "text" }: Props) => {
    return (
        <Fragment>
            <div className="flex flex-col">
                <label htmlFor="">{label}</label>
                <input type={type} className="border border-gray-300 h-11 px-3 outline-none focus:outline-none" />
            </div>
        </Fragment>
    )
}

export default Input
