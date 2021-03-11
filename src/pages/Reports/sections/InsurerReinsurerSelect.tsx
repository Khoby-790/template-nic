import React from 'react'

interface Props {

}

const InsurerReinsurerSelect = (props: Props) => {
    return (
        <div className="flex flex-row">
            <Option />
            <Option />
        </div>
    )
}

export default InsurerReinsurerSelect

const Option = () => {
    return (
        <div className="flex-1 hover:bg-blue-200 hover:border-blue-200 hover:shadow-md cursor-pointer hover:-translate-y-1 transform transition bg-gray-50 mx-5 py-4 my-3 rounded-md border border-blue-50">
            <div className="w-14 flex flex-row">
                <div className="w-20 flex items-center justify-center">
                    <div className="h-11 rounded-full border border-blue-50 bg-white  cursor-pointer w-11"></div>
                </div>
                <div className="h-full bg-gray-400"></div>
            </div>
        </div>
    )
}
