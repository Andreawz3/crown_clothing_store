// video #93
import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
 } from 'firebase/auth';
 import { 
  getFirestore,
  doc,
  getDoc,
  setDoc
 } from 'firebase/firestore';
 
const firebaseConfig = {
  apiKey: "AIzaSyCeJrH7xBKQC2uwJOSxytDXzvuLe5IvgUQ",
  authDomain: "crwn-clothing-db-c76b3.firebaseapp.com",
  projectId: "crwn-clothing-db-c76b3",
  storageBucket: "crwn-clothing-db-c76b3.appspot.com",
  messagingSenderId: "990369183961",
  appId: "1:990369183961:web:7173643bb42365513fa6c8"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if user data does not exits
  // create / set the document with the data from userAuth in my collextion

  // if user data exits
  
}