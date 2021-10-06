import React, { Fragment, useState } from "react";
import { Modal } from "../../../components";
import PlacementAcceptanceForm from "./PlacementAcceptanceForm";
import PlacementRejectionForm from "./PlacementRejectionForm";

interface Props { }

const PlacementItem = (props: Props) => {
  const [showAcceptModal, setShowAcceptModal] = useState<boolean>(false);
  const [showRejectModal, setShowRejectModal] = useState<boolean>(false);
  return (
    <Fragment>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="">
              <div className="text-md font-medium text-gray-900">
                Vanguard Reinsurance
              </div>
              <div className="text-md text-gray-500">info@example.com</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-md text-gray-900">Visal Insurance Company</div>
          <div className="text-md text-gray-900">Visal Insurance Company</div>
          <div className="text-md text-gray-900">Visal Insurance Company</div>
        </td>
        <td className="px-6 py-4 flex items-center whitespace-nowrap">
          <div className="text-md text-gray-900">Visal Insurance Company</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-md text-gray-500">
          <span className="ml-2">
            {(34683579).toLocaleString(undefined, {
              currency: "USD",
              style: "currency",
            })}
          </span>
        </td>

        <td className="px-6 py-4 whitespace-nowrap text-md text-gray-500">
          <span className="ml-2">
            {(34683579).toLocaleString(undefined, {
              currency: "USD",
              style: "currency",
            })}
          </span>
        </td>
        <td className="px-6 py-4 flex whitespace-nowrap text-right text-md font-medium">
          <span
            onClick={() => setShowAcceptModal(true)}
            className="p-2 border bg-green-200 text-green-700 cursor-pointer rounded mx-1"
          >
            Accept
          </span>
          <span
            onClick={() => setShowRejectModal(true)}
            className="p-2 border bg-red-200 text-red-700 rounded"
          >
            Reject
          </span>
        </td>
      </tr>

      <Modal show={showAcceptModal} setShow={setShowAcceptModal}>
        <PlacementAcceptanceForm />
      </Modal>

      <Modal show={showRejectModal} setShow={setShowRejectModal}>
        <PlacementRejectionForm />
      </Modal>
    </Fragment>
  );
};

export default PlacementItem;
