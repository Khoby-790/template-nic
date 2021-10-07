import React from 'react'
import ReinsurerPill from '../../PremiumExpansion/components/ReinsurerPill'
import { brokers } from '../../PremiumExpansion/data/others'

interface Props {

}

const ForAllBrokers = (props: Props) => {
    return (
        <div className="py-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {brokers.map((insurer, insurerId) => <ReinsurerPill broker={insurer} key={insurerId} />)}
            </div>

        </div>
    )
}

export default ForAllBrokers
