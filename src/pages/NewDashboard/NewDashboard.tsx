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
        <div className="lg:px-3 sm:px-1 py-4">
            <div className="lg:flex flex-col lg:items-baseline lg:justify-end lg:flex-row">
                <div className="lg:flex-1 sm:w-full lg:mx-2 mx-3 sm:my-4">
                    <WelcomeSection />
                </div>
                <div className="lg:flex-1 lg:mx-0 mx-2 lg:mt-0 mt-2">
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
