import React, { Fragment } from 'react'

type GeneratedOffersHeaderProps = {
    header?: string;
    description?: string;
}

const GeneratedOffersHeader = (props: GeneratedOffersHeaderProps) => {
    return (
        <Fragment>
            <div className="flex h-11 justify-between items-center my-3 mb-5">
                <div className="flex-1 flex justify-between items-center">
                    <div className="flex-1 px-2 ">
                        <h2 className="text-2xl font-medium">{props.header}</h2>
                        <p className="font-light">{props.description}</p>
                        {/* <button onClick={onNotifyClicked}>Click me</button> */}
                    </div>
                    <div className="flex-1 flex justify-end px-2">
                        <input placeholder="search" type="search" className="border-gray-200 focus:outline-none px-3 border h-12 w-1/2" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default GeneratedOffersHeader
