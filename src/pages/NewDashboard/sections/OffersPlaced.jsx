import React from "react";
import Ringcomponent from "../components/Ringcomponent";


const myData = [
  { type: "Offers", percent: 0.6666 },
  { type: "待提升", percent: 0.3334 },
];
const myContent = {
  siteCode: "Today",
  title: "Offers placed",
  percent: "66.66%",
};

const OffersPlaced = () => {
  return (
    <div>
      <Ringcomponent data={myData} content={myContent} />
    </div>
  );
};

export default OffersPlaced;


