import React, { useState } from 'react';
import * as firebase from 'firebase';
import { promises } from 'dns';

function configureFirebase() {
  var Config = {
    apiKey: "AIzaSyDv-KaDYqlAg4DausJ1uA9RdpZKiUGIz3A",
    authDomain: "budgetapp-fd2d5.firebaseapp.com",
    databaseURL: "https://budgetapp-fd2d5.firebaseio.com",
    projectId: "budgetapp-fd2d5",
    storageBucket: "budgetapp-fd2d5.appspot.com",
    messagingSenderId: "85324095005",
    appId: "1:85324095005:web:5643b8edc98756ad3030f4"
  };
  firebase.initializeApp(Config);
}

/*
const buttonType = user.buttonType;
  

  if(buttonType){
    var result = signingInWithEmailandPassword(email,password);
    console.log(result);
  }
  
  /*if (buttonType === "signin") {
    
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(user){
        //debugger;
        //currentUserDetails = firebase.auth().currentUser;
      })
      .catch(error => {
        
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      }); 
 // return currentUserDetails.uid;    
  } */

const signingInWithEmailandPassword = (user) => new Promise(resolve => {
  const email = user.userEmail;
  const password = user.userPassword;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (firebaseUser) {
      resolve(true);
    })
});

const signingUpWithEmailandPassword = (user) => new Promise(resolve => {
  const email = user.userEmail;
  const password = user.userPassword;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function (firebaseUser){
      resolve(true);
    })
});

const getCurrentUser = () => {
  var user = firebase.auth().currentUser;
  if(user != null){
    return true;
  }
}
export default {
  configureFirebase,
  signingInWithEmailandPassword,
  signingUpWithEmailandPassword,
  getCurrentUser
};