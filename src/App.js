import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from './components/header';
import HomePage from "./pages/home-page";
import ShopPage from "./pages/shop/shop-page";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
