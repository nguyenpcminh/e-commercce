import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import SignInAndSignUp from './pages/sign-in-and-sign-up';
import HomePage from "./pages/home-page";
import ShopPage from "./pages/shop/shop-page";
import Header from './components/header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
