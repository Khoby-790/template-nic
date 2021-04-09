import React, { Fragment } from 'react'
import SubGraphsBarchart from '../../Dashboard/components/SubGraphsBarchart'
import data from '../data.json'
interface Props {

}

const bars = [
    { name: "paid", color: "#BA5624", title: "Paid NIC Levy" },
    { name: "outstanding", color: "#381D2A", title: "Outstanding NIC Levy" },
    { name: "total", color: "#FCDE9C", title: "Total NIC Levy" }
]

const GraphSection = (props: Props) => {
    return (
        <Fragment>
            <div className="bg-white mt-4 pt-3">
                <div className="flex justify-end">
                    <div className="flex border  mr-2 p-2 mb-1 rounded items-baseline">
                        <label className="mr-3" htmlFor="">Filter by currency</label>
                        <select name="" id="">
                            <option value="">GHC</option>
                            <option value="">GHC</option>
                            <option value="">GHC</option>
                        </select>
                    </div>
                </div>
                <SubGraphsBarchart bars={bars} data={data} />
            </div>
        </Fragment>
    )
}

export default GraphSection
