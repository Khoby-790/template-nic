import React, { Suspense } from "react";
import AppLayout from "./layouts/AppLayout";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" render={(props) => <AppLayout {...props} />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
