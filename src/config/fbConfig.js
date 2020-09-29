import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
//Initialize firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var config = {
  apiKey: 'AIzaSyBvzgoXOz4kguO9CXmA1Uwy4iRN3rl9zfY',
  authDomain: 'kailashletsplan.firebaseapp.com',
  databaseURL: 'https://kailashletsplan.firebaseio.com',
  projectId: 'kailashletsplan',
  storageBucket: 'kailashletsplan.appspot.com',
  messagingSenderId: '197321657408',
  appId: '1:197321657408:web:9862f0dd64feac7ae2e3a5',
  measurementId: 'G-LDZQVEX529',
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
