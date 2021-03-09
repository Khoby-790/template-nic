import React, { Fragment } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Props {
    data: any[]
}


const SubGraphsBarchart = ({ data = [] }: Props) => {
    return (
        <Fragment>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data}>
                    <Bar dataKey="uv" fill="#8884d8" />
                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>
        </Fragment>
    )
}

export default SubGraphsBarchart
