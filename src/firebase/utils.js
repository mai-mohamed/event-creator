import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { firebaseConfig } from "./config";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

firebase.initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
export const db = firebase.firestore();
export const auth = getAuth();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  });
};

export const handleStoreAuthData = async (userAuth) => {
  if (!userAuth) return;
  const { uid } = userAuth;
  const userRef = db.doc(`users/${uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName } = userAuth;
    try {
      await userRef.set({ displayName });
    } catch (err) {
      console.log(err);
    }
    return userRef;
  }
};
