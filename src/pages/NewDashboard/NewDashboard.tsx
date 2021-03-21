/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import WelcomeSection from './sections/WelcomeSection'

interface Props {

}

const NewDashboard = (props: Props) => {
    return (
        <div className="px-3 py-4">
            <WelcomeSection />
        </div>
    )
}

export default NewDashboard
