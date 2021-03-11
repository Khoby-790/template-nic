import React, { Fragment } from 'react'
import { DonutChart } from 'bizcharts';


interface Props {

}

const data = [
    {
        type: "分类一",
        value: 27,
    },
    {
        type: "分类二",
        value: 25,
    },
    {
        type: "分类三",
        value: 18,
    },
    {
        type: "分类四",
        value: 15,
    },
    {
        type: "分类五",
        value: 10,
    },
    {
        type: "其它",
        value: 5,
    },
];

const PieChart = (props: Props) => {
    return (
        <Fragment>
            <DonutChart
                data={data || []}
                title={{
                    visible: true,
                    text: "环图",
                }}
                autoFit
                description={{
                    visible: true,
                    text: "环图的外半径决定环图的大小，而内半径决定环图的厚度。",
                }}
                height={350}
                radius={0.8}
                padding="auto"
                angleField="value"
                colorField="type"
                pieStyle={{ stroke: "white", lineWidth: 5 }}
            />
        </Fragment>
    )
}

export default PieChart
