import * as firebase from 'firebase';

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
  //get reference to the database service.

}

//Sign in function
  const signingInWithEmailandPassword = (user) => new Promise(resolve => {
  const email = user.userEmail;
  const password = user.userPassword;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (firebaseUser) {
      resolve(true);
    }).catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    }); 
});

//Creates new user
const signingUpWithEmailandPassword = (user) => new Promise(resolve => {
  const email = user.userEmail;
  const password = user.userPassword;
   firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function (firebaseUser){
      resolve(true);
      console.log("account created")
    })
    .catch((error)=>{
      console.log(error);
    })
});

//get current user information
const getCurrentUser = () => {
  var user = firebase.auth().currentUser;
  return user;
}

//create new table
const createTable = (data) => new Promise(resolve => {
    var userID = getCurrentUser().uid;
    firebase.database().ref('users/'+userID).set({username:data})
    .then(()=>{
      resolve(true)
    })
  });

  const createTitle = (data) => new Promise(resolve => {
    var userID = getCurrentUser().uid;
    firebase.database().ref('users/'+userID).update({title: data})
    .then(()=>{
      resolve(true)
    })
  });

  const createCategory =(data) => new Promise(resolve => {
    var userID = getCurrentUser().uid;
    firebase.database().ref('users/'+userID).update({category: data})
    .then(()=>{
      resolve(true)
    })
  })

//Reads from database.
const readUsername = (userID) => new Promise(resolve => {
  firebase.database().ref('/users/' +userID).once('value')
    .then(function(snapshot){
      resolve(snapshot.val());
  })
}) ;

const readTitle =(userID) => new Promise(resolve => {
  firebase.database().ref('/users/' +userID+ '/title/').once('value')
    .then(function(snapshot){
      resolve(snapshot.val());
  })
}) ;

//Writes to database.
const writeData = (data) => {
}

//logout 
const logout = () => new Promise(resolve => {
  firebase.auth().signOut()
  .then(()=>{
    resolve(true)
  })
  .catch((error)=>{
    resolve(false)
    console.log(error);
  })
});

//get current signed user
const signedUser = () => new Promise(resolve => {
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      resolve(true);
    }
    else{
      resolve(false);
    }
  })
});
export default {
  configureFirebase,
  signingInWithEmailandPassword,
  signingUpWithEmailandPassword,
  getCurrentUser,
  createTable,
  createTitle,
  createCategory,
  readUsername,
  readTitle,
  writeData,
  signedUser,
  logout
};