import React from 'react'
import ReinsurerPill from '../components/ReinsurerPill'
import { brokers } from '../data/others'

interface Props {

}

const ForAllBrokers = (props: Props) => {
    return (
        <div className="py-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {brokers.map((broker, brokerId) => <ReinsurerPill broker={broker} key={brokerId} />)}
            </div>

        </div>
    )
}

export default ForAllBrokers
