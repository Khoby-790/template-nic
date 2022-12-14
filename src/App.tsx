import React, { Suspense } from "react";
import AppLayout from "./layouts/AppLayout";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/app" render={(props) => <AppLayout {...props} />} />
          <Route path="/auth" component={Login} />
          <Redirect from="/" to="/auth" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
