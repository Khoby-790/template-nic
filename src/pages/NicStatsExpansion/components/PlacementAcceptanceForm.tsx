import React from "react";
import { Input } from "../../../components";

interface Props {}

const PlacementAcceptanceForm = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="bg-green-200 text-green-700 p-5">
        <span>Placement Acceptance</span>
      </div>
      <div className="flex flex-col p-5">
        <Input label="Reason" type="textarea" />
      </div>
      <div className="p-2 flex justify-end">
        <span
          onClick={() => {}}
          className="p-2 border  cursor-pointer rounded mx-1"
        >
          Cancel
        </span>
        <span
          onClick={() => {}}
          className="p-2 border bg-green-200 text-green-700 cursor-pointer rounded mx-1"
        >
          Accept
        </span>
      </div>
    </div>
  );
};

export default PlacementAcceptanceForm;
