/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { PageBreadCrum } from "../../components";
import GraphSection from "./sections/GraphSection";
import PaymentApprovalRequests from "./sections/PaymentApprovalRequests";
import PlacementRequests from "./sections/PlacementRequests";
import StatsSection from "./sections/StatsSection";
import TabsSection from "./sections/TabsSection";

interface Props {}

const NicStatsExpansion = (props: Props) => {
  return (
    <Fragment>
      <div className="px-3 py-4">
        <div>
          <PageBreadCrum page="NIC Levy Overview" />
          <GraphSection />
          <StatsSection />
          <TabsSection />
        </div>
      </div>
    </Fragment>
  );
};

export default NicStatsExpansion;
