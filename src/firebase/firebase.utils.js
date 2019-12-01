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

export const createUserProfileDocument = async (userAth, additionalData) => {
  if (!userAth) return;
  const userRef = firestore.doc(`/user/${userAth.uid}`); //DocumentReference
  const snapShot = await userRef.get(); // DocumentSnapShot
  console.log(snapShot);

  // if the user doesn't exists in DB, then create it inside DB
  if (!snapShot.exists) {
    const { displayName, email } = userAth;
    const createAt = new Date();
    try {
      // use .set() DocumentReference CRUD method 
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log(`error creating user`, error.message);
    }
  }

  // finally return userRef for other purpose 
  return userRef
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
