import React from 'react';
import AppLayout from './layouts/AppLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={props => <AppLayout />} />
      </Switch>
      {/* <AppLayout /> */}
    </BrowserRouter>
  );
}

export default App;
