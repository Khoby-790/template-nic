import React from "react";
import ReactSwipeButton from 'react-swipe-button'

interface Props {
  setShow?: (show: boolean) => void;
}

const PlacementAcceptanceForm = (props: Props) => {

  const onSucces = (data) => {
    console.log(data)
    props.setShow && props.setShow(false)
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 bg-green-200 sm:px-6">
        <h3 className="text-md leading-6 font-medium text-green-800">
          Payment Acceptance
        </h3>
        <p className="mt-1 max-w-2xl text-md text-green-500">
          Swipe button below to approve.
        </p>
      </div>
      <div className="px-6 py-11 flex justify-end">

        <ReactSwipeButton
          text='SWIPE TO APPROVE'
          color='#076046'
          noSuccess={onSucces}
        />
      </div>
    </div>

  );
};

export default PlacementAcceptanceForm;
