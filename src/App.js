import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import SignInAndSignUp from "./pages/sign-in-and-sign-up";
import HomePage from "./pages/home-page";
import ShopPage from "./pages/shop/shop-page";
import Header from "./components/header";
import { auth, createUserProfile } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";

function App(props) {
  const { setCurrentUser, currentUser } = props;
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
