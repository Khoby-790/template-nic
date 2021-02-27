import React from 'react';
import AppLayout from './layouts/AppLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={props => <AppLayout {...props} />} />
      </Switch>
      {/* <AppLayout /> */}
    </BrowserRouter>
  );
}

export default App;
