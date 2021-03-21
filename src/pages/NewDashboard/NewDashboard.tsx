/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import WelcomeSection from './sections/WelcomeSection'

interface Props {

}

const NewDashboard = (props: Props) => {
    return (
        <div className="px-3 py-4">
            <WelcomeSection />
            <div className="bg-white shadow-lg my-4">
                <div className="h-16 flex justify-between px-3">
                    <div className="flex flex-col">
                        <span className="font-semibold ">NIC</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewDashboard
