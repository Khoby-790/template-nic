import React, { Fragment } from 'react'
import { DonutChart } from 'bizcharts';


interface Props {

}

const data = [
    {
        type: "Bond",
        value: 27,
    },
    {
        type: "Motor Comprehensive",
        value: 25,
    },
    {
        type: "Property",
        value: 18,
    },
    {
        type: "Perfomance 2",
        value: 15,
    },
    {
        type: "Perfomance 1",
        value: 10,
    },
    {
        type: "Perfomance",
        value: 5,
    },
];

const PieChart = (props: Props) => {
    return (
        <Fragment>
            <div className="h-96">
                <DonutChart
                    data={data || []}
                    title={{
                        visible: true,
                        text: "Test",
                    }}
                    autoFit
                    description={{
                        visible: true,
                        text: "Description of the Piechart",
                    }}
                    label={{
                        type: "outter"
                    }}
                    height={350}
                    radius={0.8}
                    padding="auto"
                    angleField="value"
                    colorField="type"
                    pieStyle={{ stroke: "white", lineWidth: 5 }}
                />
            </div>
        </Fragment>
    )
}

export default PieChart
