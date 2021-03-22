import React from 'react'
import ReinsurerPill from '../../PremiumExpansion/components/ReinsurerPill'

interface Props {

}

const ForAllBrokers = (props: Props) => {
    return (
        <div className="py-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <ReinsurerPill name="Visal Reinsurance Company" />
                <ReinsurerPill name="Kek Reinsurance Company" />
                <ReinsurerPill name="iRisk Reinsurance Company" />
            </div>

        </div>
    )
}

export default ForAllBrokers
