import React, { Fragment, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Loader } from "../components";
const NewDashboard = lazy(() => import("../pages/NewDashboard/NewDashboard"));
const NicStatsExpansion = lazy(
  () => import("../pages/NicStatsExpansion/NicStatsExpansion")
);
const PremiumExpansion = lazy(
  () => import("../pages/PremiumExpansion/PremiumExpansion")
);
const ClaimsExpansion = lazy(
  () => import("../pages/ClaimsExpansion/ClaimsExpansion")
);
const OffersPlacedExpansion = lazy(
  () => import("../pages/OffersPlacedExpansion/OffersPlacedExpansion")
);
const Reports = lazy(() => import("../pages/Reports/Reports"));
const Settings = lazy(() => import("../pages/Settings/Settings"));
const SidebarSubMenu = lazy(() => import("./SidebarSubMenu"));
const Inbox = lazy(() => import("../pages/Inbox/Inbox"));
const PlacementRequests = lazy(() => import("../pages/PlacementRequests"));
const PaymentRequests = lazy(() => import("../pages/PaymentRequests"));
interface Props { }

const AppContent = (props: Props) => {
  return (
    <Fragment>
      <main className="min-w-0 flex-1 h-full border-t border-gray-200 lg:flex">
        <section
          aria-labelledby="primary-heading"
          className="min-w-0 transition duration-500 flex-1 h-full flex  flex-col lg:order-last"
        >
          <h1 id="primary-heading" className="sr-only">
            Home
          </h1>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/app" exact component={NewDashboard} />
              <Route path="/app/nic" component={NicStatsExpansion} />
              <Route path="/app/premium" component={PremiumExpansion} />
              <Route path="/app/claims" component={ClaimsExpansion} />
              <Route path="/app/placements" component={PlacementRequests} />
              <Route path="/app/payments" component={PaymentRequests} />
              <Route path="/app/reports" component={Reports} />
              <Route path="/app/inbox" component={Inbox} />
              <Route path="/app/settings" component={Settings} />
            </Switch>
          </Suspense>
        </section>
        <SidebarSubMenu />
      </main>
    </Fragment>
  );
};

export default AppContent;
