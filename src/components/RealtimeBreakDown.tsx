import React, { Fragment, useEffect, useState } from 'react'
import ClipLoader from "react-spinners/PulseLoader";

interface Props {

}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const colors = ["green", "red", "yellow", "indigo"]
const companies = ["VRB", "KRB", "ARB", "VRBb"]

type Item = {
    color: string;
    company: string;
}

const RealtimeBreakDown = (props: Props) => {
    const [items, setItems] = useState<Item[]>([])
    useEffect(() => {
        const _i = setInterval(() => {
            const newItems: Item[] = colors.map((el, id) => ({ color: el, company: companies[id] }))
            setItems(newItems)
        }, 5000)
        return () => {
            clearInterval(_i)
        }
    }, [])

    if (items.length < 1) {
        return (
            <div className="w-full flex justify-center items-center">
                <ClipLoader color={"#3DA5D9"} margin={6} loading={true} size={10} />
            </div>
        )
    }


    return (
        <Fragment>
            <div className="bg-gray-100 max-h-60 px-4 pb-5 overflow-y-scroll">
                <div className="flex mb-3 p-3 justify-between">
                    <div className="flex cursor-pointer">
                        <svg className="text-gray-600 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View
                    </div>
                    <svg onClick={() => { /** */ }} className="text-gray-600 cursor-pointer h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <Fragment>
                    <div>
                        <div className="my-2 flex justify-between">
                            <span className={` rounded`}>Brokers</span>
                            <span>closed</span>
                        </div>
                        {items.sort().map((item, id) => (
                            <div className="my-2 flex justify-between" key={id}>
                                <span className={`bg-${item.color}-300 px-2 rounded text-${item.color}-700`}>{item.company}</span>
                                <span>{getRandomArbitrary(6, 25).toFixed()}</span>
                            </div>
                        ))}
                    </div>
                    <div></div>
                </Fragment>
            </div>
        </Fragment>
    )
}

export default RealtimeBreakDown
