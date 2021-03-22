import React from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaProps } from 'recharts';
import { CurveType } from 'recharts/types/shape/Curve';

interface Props {
    data: any[];
    lines: AreaProps[];
}

const CustomeAreaChart = ({ data, lines }: Props) => {
    return (
        <div>
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
                    {lines.map((area, id) => (
                        <Area
                            type={area.type || "monotone"}
                            dataKey={area.dataKey}
                            stroke={area.stroke || "#8884d8"}
                            fill={area.stroke || "#8884d8"}
                        />
                    ))}
                    {/* <Area type="monotone" dataKey="pv" stroke="#D1FAE5" fill="#D1FAE5" />
                    <Area type="monotone" dataKey="amt" stroke="#edb7dd" fill="#edb7dd" /> */}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CustomeAreaChart