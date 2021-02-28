import React, { Fragment } from 'react'

interface Props {

}


type InputHtmlProps = HTMLInputElement

const Input = ({ name, value, id }: Props & InputHtmlProps) => {
    return (
        <Fragment>
            <div className="flex flex-col">
                <label htmlFor="">Reinsurer</label>
                <input type="text" className="border border-gray-300 h-11 px-3 outline-none focus:outline-none" />
            </div>
        </Fragment>
    )
}

export default Input
