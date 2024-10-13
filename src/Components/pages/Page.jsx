import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../Common/Header';

const Page = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
        </Route>
      </Switch>
    </Router>
  );
};

export default Page;
