import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import SignInAndSignUp from './pages/sign-in-and-sign-up';
import HomePage from "./pages/home-page";
import ShopPage from "./pages/shop/shop-page";
import Header from './components/header';
import { auth, createUserProfile } from './firebase/firebase.utils';

function App() {
  const [currentUser,setCurrentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
            console.log(snapshot.data());
        })
      }

    setCurrentUser(userAuth);
    });
  },[]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
