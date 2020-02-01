import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyAEAGal9tZza98r-kUWIsGbYx9BORnZtMA",
    authDomain: "shaymadesign-db.firebaseapp.com",
    databaseURL: "https://shaymadesign-db.firebaseio.com",
    projectId: "shaymadesign-db",
    storageBucket: "shaymadesign-db.appspot.com",
    messagingSenderId: "1079625022049",
    appId: "1:1079625022049:web:f206636c4f6923edcf8820",
    measurementId: "G-JWBQBPG8F1"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot= await userRef.get();

    console.log(snapShot)
    if(!snapShot.exists){
      const {displayName, email} = userAuth
      const createdAt = new Date();
    

    try {
await userRef.set({
    displayName, 
    email, 
    ...additionalData
})
    }  catch(error) {
      console.log('error creating user', error.message);

    }
  }
  return userRef;
};
  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;