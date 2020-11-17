import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import firebase from 'firebase/app';
import apiKeys from './apiKeys.json';
import UserData from './components/UserData';

firebase.initializeApp(apiKeys.firebaseKeys);
UserData.checkLoginStatus();

ReactDom.render(<App />, document.getElementById('root'));
