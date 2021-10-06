import React from 'react'

interface Props {

}

const InsurerReinsurerSelect = (props: Props) => {
    return (
        <div className="flex flex-col mx-2">
            <Option name="Brokers" />
            <Option name="Reinsurers" />
            <Option name="Insurers" />
        </div>
    )
}

export default InsurerReinsurerSelect

type OptionProps = {
    name: string
}

const Option = ({ name }: OptionProps) => {
    return (
        <div className="flex-1 h-11 flex group flex-row hover:bg-blue-500 hover:border-blue-200 hover:shadow-md cursor-pointer hover:-translate-y-1 transform transition bg-gray-100  my-1 rounded-md border border-blue-50">
            <div className="h-full flex flex-row flex-1">
                <div className="flex w-20 items-center justify-center h-full ">
                    <svg className="text-gray-400 group-hover:text-white h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                <div className="flex items-center h-full">
                    <span className="font-semibold text-md transform transition group-hover:text-white text-gray-400">{name || "Not Specified"}</span>
                </div>
            </div>
            <div className="w-14 flex flex-row">
                <div className="w-20 flex items-center justify-center">
                    <div className="h-6 rounded-full border border-blue-50 bg-white  cursor-pointer w-6"></div>
                </div>
            </div>
        </div>
    )
}
