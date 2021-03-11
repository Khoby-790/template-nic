import React from 'react'

interface Props {
    
}

const InsurerReinsurerSelect = (props: Props) => {
    return (
        <div className="flex flex-row">
            <div className="flex-1 bg-white mx-5 py-4 my-3 rounded-md border border-blue-500">
                <div className="w-14 flex flex-row">
                    <div className="h-11 rounded-full mx-3 bg-gray-300 w-11"></div>
                    <div className="h-full bg-gray-400"></div>
                </div>
            </div>
        </div>
    )
}

export default InsurerReinsurerSelect
