import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDCu2NB83YyuhjRjUFpIqWGPDfrhAFly4w',
  authDomain: 'eric-shop-3108b.firebaseapp.com',
  databaseURL: 'https://eric-shop-3108b.firebaseio.com',
  projectId: 'eric-shop-3108b',
  storageBucket: 'eric-shop-3108b.appspot.com',
  messagingSenderId: '800044935708',
  appId: '1:800044935708:web:20ff6eb5000f70b7104dd9',
  measurementId: 'G-LDVRVQ23LZ'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
