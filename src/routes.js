/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  MainScreen,
  ProductDetailsScreen,
  LoginScreen,
} from './components/screens';
import { NavBar, Footer } from './components/prefabs';

export default () => (
  <div className="main-content-wrapper d-flex clearfix">
    <NavBar />
    <Switch>
      <Route path="/product">
        <ProductDetailsScreen />
      </Route>
      <Route path="/login">
        <LoginScreen />
      </Route>
      <Route path="/">
        <MainScreen />
      </Route>
      {/* <Route path="/product" component={<ProductDetailsScreen />} />
      <Route path="/login" component={<LoginScreen />} />
      <Route path="/" component={<MainScreen />} /> */}
    </Switch>
    <Footer />
  </div>
);
