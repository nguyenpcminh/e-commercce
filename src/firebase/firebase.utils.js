import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAZ7_KJyhtAtJ5U092ce9q8FrCT_rYEOWA",
  authDomain: "e-commerce-90c52.firebaseapp.com",
  databaseURL: "https://e-commerce-90c52.firebaseio.com",
  projectId: "e-commerce-90c52",
  storageBucket: "e-commerce-90c52.appspot.com",
  messagingSenderId: "401938792679",
  appId: "1:401938792679:web:e377c733ff03ea4f4de242",
  measurementId: "G-76YJCM5BSF",
};

export const createUserProfile = async (userAuth, additionData) => {
  if (!userAuth) return;

  const userRef = firebase.firestore().doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const dateCreate = new Date();

    try {
      await userRef.set({
        displayName : !displayName ? additionData : displayName,
        email,
        dateCreate,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
