import React from "react";
import { PageBreadCrum } from "../../components";
import PlacementItem from "./components/PlacementItem";
import PlacementRequestsStats from "./components/PlacementRequestsStats";

interface Props { }

const data = [
    {
        insurer: {
            "name": "Donovan Clemons",
            "email": "undefined",
        },
        reinsurers: ["Alexis Galloway", "Mari Bradley", "Camille Baldwin"],
        approval_request: "Camille Baldwin",
        status: "Approved",
    },
    {
        insurer: {
            "name": "Donovan Clemons",
            "email": "undefined",
        },
        reinsurers: ["Alexis Galloway", "Mari Bradley", "Camille Baldwin"],
        approval_request: "Camille Baldwin",
        status: "Pending",
    },
    {
        insurer: {
            "name": "Donovan Clemons",
            "email": "undefined",
        },
        reinsurers: ["Alexis Galloway", "Mari Bradley", "Camille Baldwin"],
        approval_request: "Camille Baldwin",
        status: "Rejected",
    },
    {
        insurer: {
            "name": "Donovan Clemons",
            "email": "undefined",
        },
        reinsurers: ["Alexis Galloway", "Mari Bradley", "Camille Baldwin"],
        approval_request: "Camille Baldwin",
        status: "Pending",
    }
]

const PlacementRequests = (props: Props) => {
    return (
        <div className="px-3 py-4">
            <PageBreadCrum page="Placement requests" />
            <PlacementRequestsStats />
            <div className="rounded my-5 overflow-hidden mx-3">
                <div className="bg-gray-200 mt-6 px-5 p-3 text-gray-500 uppercase">
                    Placement requests
                </div>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Insurer
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Reinsurers
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Approval Request
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Risk Details
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {data.map((item, key) => (
                                            <PlacementItem data={item} key={key} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlacementRequests;
