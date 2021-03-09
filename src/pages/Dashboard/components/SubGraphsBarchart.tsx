import React, { Fragment } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Props {
    data: any[]
}


const getIntroOfPage = (label: any) => {
    if (label === "Users") {
        return "Users is about number of users";
    }
    if (label === "Orders") {
        return "Overview of incoming orders";
    }
    if (label === "Clients") {
        return "Prospective clients";
    }
    if (label === "Revenue") {
        return "Gross net worth";
    }
    if (label === "Other") {
        return "Other items";
    }
};

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
                <p className="intro">{getIntroOfPage(label)}</p>
                <p className="desc">Anything you want can be displayed here.</p>
            </div>
        );
    }

    return null;
};

const SubGraphsBarchart = ({ data = [] }: Props) => {
    return (
        <Fragment>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={650}
                    height={350}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="pv" barSize={20} fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </Fragment>
    )
}

export default SubGraphsBarchart
