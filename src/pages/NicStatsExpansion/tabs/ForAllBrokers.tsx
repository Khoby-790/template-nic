import React from 'react'
import ReinsurerPill from '../components/ReinsurerPill'

interface Props {

}

const ForAllBrokers = (props: Props) => {
    return (
        <div className="py-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <ReinsurerPill name="Visal Reinsurance Brokers" />
                <ReinsurerPill name="Kek Reinsurance Brokers" />
                <ReinsurerPill name="iRisk Reinsurance Brokers" />
                <ReinsurerPill name="Afro-asian Reinsurance Brokers" />
            </div>

        </div>
    )
}

export default ForAllBrokers
