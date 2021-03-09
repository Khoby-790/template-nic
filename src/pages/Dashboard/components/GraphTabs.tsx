import React, { Fragment } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Props {
    data: any[]
}

const GraphTabs = ({ data = [] }: Props) => {
    return (
        <Fragment>
            <div className="h-96 max-h-96 bg-white mx-5 my-3 py-4 shadow-md rounded-md">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="pv" stroke="#D1FAE5" fill="#D1FAE5" />
                        <Area type="monotone" dataKey="amt" stroke="#edb7dd" fill="#edb7dd" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Fragment>
    )
}

export default GraphTabs
