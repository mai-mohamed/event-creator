import { auth } from "./../../firebase/utils";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

export const submitLogin = async () => {
  let response = null;
  await signInWithPopup(auth, provider).then((result) => (response = result));
  return response?.user;
};
