import React from "react";

interface Props {}

const PlacementRequests = (props: Props) => {
  return (
    <div className="rounded overflow-hidden">
      <div className="bg-gray-200 mt-6 px-5 p-3 text-gray-500 ">
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
                      Approval Reinsurer
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Sum insured
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Premium
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
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="">
                          <div className="text-sm font-medium text-gray-900">
                            Vanguard Reinsurance
                          </div>
                          <div className="text-sm text-gray-500">
                            info@example.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        Visal Insurance Company
                      </div>
                      <div className="text-sm text-gray-900">
                        Visal Insurance Company
                      </div>
                      <div className="text-sm text-gray-900">
                        Visal Insurance Company
                      </div>
                    </td>
                    <td className="px-6 py-4 flex items-center whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        Visal Insurance Company
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="ml-2">
                        {(34683579).toLocaleString(undefined, {
                          currency: "USD",
                          style: "currency",
                        })}
                      </span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="ml-2">
                        {(34683579).toLocaleString(undefined, {
                          currency: "USD",
                          style: "currency",
                        })}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex whitespace-nowrap text-right text-sm font-medium">
                      <span className="p-2 border rounded mx-1">Accept</span>
                      <span className="p-2 border rounded">Reject</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementRequests;
