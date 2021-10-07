/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ReinsurerPill from '../components/ReinsurerPill'
import { insurers } from '../data/others'

interface Props {

}

const ForEachReinsurerTab = (props: Props) => {
    return (
        <div className="py-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {insurers.map((insurer, insurerId)=><ReinsurerPill broker={insurer} key={insurerId} />)}                
            </div>

        </div>
    )
}

export default ForEachReinsurerTab
