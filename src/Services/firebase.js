import React from 'react';
import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyAiN3a3bgoW1b267kI38ArigZd3T63qJj8",
    authDomain: "webapp-4767a.firebaseapp.com",
    databaseURL: "https://webapp-4767a.firebaseio.com",
    projectId: "webapp-4767a",
    storageBucket: "webapp-4767a.appspot.com",
    messagingSenderId: "665853141266",
    appId: "1:665853141266:web:185209d2a6e5875e0f13cb",
    measurementId: "G-6HW9HVJHJD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;