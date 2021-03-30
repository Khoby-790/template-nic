/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ClaimsSection from './sections/ClaimsSection'
import NICSection from './sections/NICSection'
import OffersPlaced from './sections/OffersPlaced'
import PremiumSection from './sections/PremiumSection'
import WelcomeSection from './sections/WelcomeSection'



interface Props {

}

const NewDashboard = (props: Props) => {
    return (
        <div className="px-3 py-4">
            <div className="flex flex-col items-baseline justify-end lg:flex-col">
                <div className="flex-1">
                    <WelcomeSection />
                </div>
                <div className="flex-1">
                    <OffersPlaced />
                </div>
            </div>
            <NICSection />
            <PremiumSection />
            <ClaimsSection />
        </div>
    )
}

export default NewDashboard
