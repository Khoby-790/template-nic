import React, { Fragment } from 'react'

interface Props {
    label?: string;
    options?: Option[]
}

type Option = {
    value: any;
    label: string
}
const Select = ({ label, options }: Props) => {
    return (
        <Fragment>
            <div className="flex flex-col">
                <label htmlFor="">{label}</label>
                <select className="border placeholder-gray-200 border-gray-300 h-11 px-3 outline-none focus:outline-none" name="" id="">
                    <option value="">choose one..</option>
                    {options?.map(({ label, value }, key) => (
                        <option key={key} value={value}>{label}</option>
                    ))}
                </select>
            </div>
        </Fragment>
    )
}

export default Select
