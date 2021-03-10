import React, { Fragment } from 'react'
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coordinate,
    Label,
    Legend,
    Interval,
    Util
} from 'bizcharts';


const data = [
    {
        country: "中国",
        population: 131744
    },
    {
        country: "印度",
        population: 104970
    },
    {
        country: "美国",
        population: 29034
    },
    {
        country: "印尼",
        population: 23489
    },
    {
        country: "巴西",
        population: 18203
    }
];
interface Props {

}

const BizBarChart = (props: Props) => {
    return (
        <Fragment>
            <Chart height={400} data={data} autoFit>
                <Coordinate transpose/>
            </Chart>
        </Fragment>
    )
}

export default BizBarChart
