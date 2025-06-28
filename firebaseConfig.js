// ✅ firebaseConfig.js for Expo Go
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "....",
  authDomain: "....-.....",
  projectId: "....-.",
  storageBucket: ".......-......",
  messagingSenderId: "....",
  appId: "1:..:..:....",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app); // ✅ This works on Expo Go and emulator
const db = getFirestore(app);

export { app, auth, db, signInAnonymously };

