import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const LoginButton = () => {
  return <button onClick={signIn}>Login</button>;
};

export default LoginButton;
