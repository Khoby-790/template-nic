/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ReinsurerPill from '../components/ReinsurerPill'

interface Props {

}

const ForEachReinsurerTab = (props: Props) => {
    return (
        <div className="py-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <ReinsurerPill />
            </div>

        </div>
    )
}

export default ForEachReinsurerTab
