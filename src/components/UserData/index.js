import React from 'react';
import axios from 'axios';
import apiKeys from '../../apiKeys.json';
import firebase from 'firebase/app';
import movieHome from '../../views/movieView';

const baseUrl = apiKeys.firebaseKeys.databaseURL;
const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    console.log('onAuthStateChange', user);
    if (user) {
      const currentUser = setCurrentUser(user);
      console.log('Current user:', currentUser);
    }
    return <movieHome />;
  });
};

const checkIfUserExistsInFirebase = (user) => {
  console.log('user:', user);

  axios
    .get(`${baseUrl}/users/${user.uid}.json`)
    .then((response) => {
      console.log('response', response);
      //   if (Object.values(resp.data).length === 0) {
      //     axios.post(`${baseUrl}/users.json`, user);
      //   } else {
      //     console.warn('User Already Exists');
      //   }
      //   window.sessionStorage.setItem('ua', true);
    })
    .catch((error) => console.error(error));
};

const setCurrentUser = (userObj) => {
  const user = {
    uid: userObj.uid,
    name: userObj.displayName,
  };

  const loggedIn = window.sessionStorage.getItem('ua');
  if (!loggedIn) {
    checkIfUserExistsInFirebase(user);
  }
  return user;
};

export default { setCurrentUser, checkLoginStatus };
