import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBqlo3hb4k6K2G5EX87CY6ozAvnDFpXQ24",
  authDomain: "react-native-auth-f1700.firebaseapp.com",
  projectId: "react-native-auth-f1700",
  storageBucket: "react-native-auth-f1700.appspot.com",
  messagingSenderId: "786702238151",
  appId: "1:786702238151:web:71268e13f38687dcb6d9e2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export default auth;
