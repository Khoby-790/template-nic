import React from 'react'
import { LineChart, Line, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CurveType } from 'recharts/types/shape/Curve';

interface Props {
    data: any[];
    lines: {
        name: string;
        color?: string;
        title?: string;
        width?: number;
        type?: CurveType;
    }[]
}

const CustomLineChart = ({ data, lines }: Props) => {
    return (
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={300} height={100} data={data}>
                    {lines.map((line, id) => (
                        <Line type={line.type || "monotone"} name={line.title || line.name} dataKey={line.name} stroke={line.color || '#A1C181'} strokeWidth={line.width || 2} />
                    ))}
                    {/* <Line type="monotone" dataKey="total" stroke="#A1C181" strokeWidth={2} />
                    <Line type="monotone" dataKey="paid" stroke="#FE7F2D" strokeWidth={2} />
                    <Line type="monotone" dataKey="outstanding" stroke="#619B8A" strokeWidth={2} /> */}
                    <XAxis dataKey="name" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CustomLineChart
