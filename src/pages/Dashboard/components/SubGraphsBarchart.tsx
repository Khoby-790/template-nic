import React, { Fragment } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Props {
    data: any[]
    bars: {
        name: string;
        color: string;
        title?: string;
    }[]
}

// const data_ = [
//     {
//         name: "Users",
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: "Orders",
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: "Clients",
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     {
//         name: "Revenue",
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//     },
//     {
//         name: "Other",
//         uv: 1890,
//         pv: 4800,
//         amt: 2181,
//     },
// ];


// const getIntroOfPage = (label: any) => {
//     if (label === "") {
//         return "Users is about number of users";
//     }
//     if (label === "Orders") {
//         return "Overview of incoming orders";
//     }
//     if (label === "Clients") {
//         return "Prospective clients";
//     }
//     if (label === "Revenue") {
//         return "Gross net worth";
//     }
//     if (label === "Other") {
//         return "Other items";
//     }
// };

// const CustomTooltip = ({ active, payload, label }: any) => {
//     if (active) {
//         return (
//             <div className="custom-tooltip">
//                 <p className="label">{`${label} : ${payload[0].value}`}</p>
//                 <p className="intro">{getIntroOfPage(label)}</p>
//                 <p className="desc">Anything you want can be displayed here.</p>
//             </div>
//         );
//     }

//     return null;
// };

const SubGraphsBarchart = ({ data = [], bars }: Props) => {
    return (
        <Fragment>
            <div className="h-80 max-h-80 bg-white  my-3 py-4 ">
                <ResponsiveContainer width="99%" height="100%">
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
                        <Tooltip />
                        <Legend />
                        {bars.map((bar, id) => (
                            <Bar key={id} dataKey={bar.name} name={bar.title || bar.name} fill={bar.color} />
                        ))}
                        {/* <Bar dataKey="total"  /> */}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Fragment>
    )
}

export default SubGraphsBarchart
