import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  getReactNativePersistence,
  initializeAuth
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // ✅ ADD THIS
// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBLh8l3aKhLwceU--JGM8Iwm_wIyW_gUm4",
  authDomain: "planfitapp-60ee0.firebaseapp.com",
  projectId: "planfitapp-60ee0",
  storageBucket: "planfitapp-60ee0.appspot.com",
  messagingSenderId: "864713744333",
  appId: "1:864713744333:web:1334861851298c37daee84",
};

// ✅ Initialize app
const app = initializeApp(firebaseConfig);

// ✅ Initialize auth with AsyncStorage for persistence (only once)
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (e) {
  // Fallback if already initialized
  auth = getAuth(app);
}

// ✅ Initialize and export Firestore
const db = getFirestore(app);

export { auth, db };

