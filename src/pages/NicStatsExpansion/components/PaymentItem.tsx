import React, { Fragment, useState } from "react";
import { Modal } from "../../../components";
import PaymentRejectionForm from "./PaymentRejectionForm";
import PlacementAcceptanceForm from "./PlacementAcceptanceForm";
import PlacementRejectionForm from "./PlacementRejectionForm";
import PyamentAcceptanceForm from "./PyamentAcceptanceForm";

interface Props { }

const PaymentItem = (props: Props) => {
  const [showAcceptModal, setShowAcceptModal] = useState<boolean>(false);
  const [showRejectModal, setShowRejectModal] = useState<boolean>(false);
  return (
    <Fragment>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="">
              <div className="text-sm font-medium text-gray-900">
                Vanguard Reinsurance
              </div>
              <div className="text-sm text-gray-500">info@example.com</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">Visal Insurance Company</div>
          <div className="text-sm text-gray-900">Visal Insurance Company</div>
          <div className="text-sm text-gray-900">Visal Insurance Company</div>
        </td>
        <td className="px-6 py-4 flex items-center whitespace-nowrap">
          <div className="text-sm text-gray-900">Visal Insurance Company</div>
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
          <span
            onClick={() => setShowAcceptModal(true)}
            className="p-2 border bg-green-200 text-green-700 cursor-pointer rounded mx-1"
          >
            Approve
          </span>
          <span
            onClick={() => setShowRejectModal(true)}
            className="p-2 border bg-red-200 text-red-700 rounded"
          >
            Decline
          </span>
        </td>
      </tr>

      <Modal show={showAcceptModal} setShow={setShowAcceptModal}>
        <PyamentAcceptanceForm />
      </Modal>

      <Modal show={showRejectModal} setShow={setShowRejectModal}>
        <PaymentRejectionForm />
      </Modal>
    </Fragment>
  );
};

export default PaymentItem;
