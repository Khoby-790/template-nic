import React, { Fragment, useState } from "react";
import { Modal } from "../../../components";
import Button from "../../../components/Button";
import PlacementAcceptanceForm from "./PlacementAcceptanceForm";
import PlacementRejectionForm from "./PlacementRejectionForm";
import ViewDetailsForm from "./ViewDetailsForm";

interface Props {
  data: any
}

enum Colors {
  Approved = "green",
  Pending = "yellow",
  Rejected = "red",
}

const PlacementItem = ({ data }: Props) => {
  const [showAcceptModal, setShowAcceptModal] = useState<boolean>(false);
  const [showRejectModal, setShowRejectModal] = useState<boolean>(false);
  const [showRisk, setShowRisk] = useState<boolean>(false);
  return (
    <Fragment>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="">
              <div className="text-md font-medium text-gray-900">
                {data?.insurer?.name}
              </div>
              <div className="text-md text-gray-500">{data?.insurer?.email}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          {data?.reinsurers?.map((reinsurer: any) => (
            <div className="text-md text-gray-900">{reinsurer}</div>
          ))}
        </td>
        <td className="px-6 py-4 flex items-center whitespace-nowrap">
          <div className="text-md text-gray-900">{data?.approval_request}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-md text-gray-500">
          <Button onClick={() => setShowRisk(true)} title="View details" color="blue" />
        </td>

        <td className="px-6 py-4 whitespace-nowrap text-md text-gray-500">
          <span className={`text-${Colors[data?.status]}-400 font-bold`}>
            {data?.status}
          </span>
        </td>
        <td className="px-6 py-4 flex whitespace-nowrap text-right text-md">
          <Button disabled={data?.status === "Approved"} title="Accept" color="green" onClick={() => setShowAcceptModal(true)} />
          <Button disabled={data?.status === "Rejected"} title="Reject" color="red" onClick={() => setShowRejectModal(true)} />
        </td>
      </tr>

      <Modal show={showRisk} setShow={setShowRisk}>
        <ViewDetailsForm />
      </Modal>

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
