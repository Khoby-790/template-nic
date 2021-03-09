import React, { Fragment } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


interface Props {
  data: any[]
}

const SubGraphsPieChart = ({ data = [] }: Props) => {
  return (
    <Fragment>

    </Fragment>
  )
}

export default SubGraphsPieChart
