import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../Common/Header';
import Home from '../home/Home'

const Page = () => {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact element={<Home/>}>
        </Route>
      </Switch>
    </Router>
    </>
  );
};

export default Page;
