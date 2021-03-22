import React, { Fragment, useState } from 'react'
import { PageBreadCrum } from '../../components';
import SubGraphsBarchart from '../Dashboard/components/SubGraphsBarchart';
import ForAllBrokers from './tabs/ForAllBrokers';
import ForEachReinsurerTab from './tabs/ForEachReinsurerTab'
import FromEachReinsurerTab from './tabs/FromEachReinsurerTab';
interface Props {

}

const data = [
    {
        name: 'Jan',
        paid: 4000,
        outstanding: 2400,
        total: 2400,
    },
    {
        name: 'Feb',
        paid: 3000,
        outstanding: 1398,
        total: 2210,
    },
    {
        name: 'Mar',
        paid: 2000,
        outstanding: 9800,
        total: 2290,
    },
    {
        name: 'Apr',
        paid: 2780,
        outstanding: 3908,
        total: 2000,
    },
    {
        name: 'May',
        paid: 1890,
        outstanding: 4800,
        total: 2181,
    },
    {
        name: 'Jun',
        paid: 2390,
        outstanding: 3800,
        total: 2500,
    },
    {
        name: 'Jul',
        paid: 3490,
        outstanding: 4300,
        total: 2100,
    },
    {
        name: 'Aug',
        paid: 4000,
        outstanding: 2400,
        total: 2400,
    },
    {
        name: 'Sep',
        paid: 3000,
        outstanding: 1398,
        total: 2210,
    },
    {
        name: 'Oct',
        paid: 2000,
        outstanding: 9800,
        total: 2290,
    },
    {
        name: 'Nov',
        paid: 2780,
        outstanding: 3908,
        total: 2000,
    },
    {
        name: 'Dec',
        paid: 1890,
        outstanding: 4800,
        total: 2181,
    },
];

const inActive = "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm";
const active = "border-indigo-500 text-indigo-600 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm";

type Tabs = "for_each_reinsurer" | "for_each_broker" | "for_all_brokers" | "for_all_reinsurers"

const ClaimsExpansion = (props: Props) => {
    return (
        <div>

        </div>
    )
}

export default ClaimsExpansion
