/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainScreen } from './components/screens';
import { SideBar, Footer } from './components/prefabs';

export default () => (
  <div className="main-content-wrapper d-flex clearfix">
    <SideBar />
    <Switch>
      <Route path="/about">
        <h1>aaaaaaaaaaaaaaaaaaa</h1>
      </Route>
      <Route path="/">
        <MainScreen />
      </Route>
    </Switch>
    <Footer />
  </div>
);
