import React, { Suspense } from 'react';
import AppLayout from './layouts/AppLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Loader } from './components';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" render={props => <AppLayout {...props} />} />
        </Switch>
      </Suspense>

      {/* <AppLayout /> */}
    </BrowserRouter>
  );
}

export default App;
