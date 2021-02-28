import React, { Fragment } from 'react'

interface Props {
    label?: string
}
const Select = ({ label }: Props) => {
    return (
        <Fragment>
            <div className="flex flex-col">
                <label htmlFor="">{label}</label>
                <input type="text" className="border border-gray-300 h-11 px-3 outline-none focus:outline-none" />
                <select className="border border-gray-300 h-11 px-3 outline-none focus:outline-none" name="" id=""></select>
            </div>
        </Fragment>
    )
}

export default Select
