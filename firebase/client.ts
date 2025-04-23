import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDF7p4rnPgLhxf5LK3CqF-dX58gx0wjQsg",
  authDomain: "prepwise-3f8a9.firebaseapp.com",
  projectId: "prepwise-3f8a9",
  storageBucket: "prepwise-3f8a9.firebasestorage.app",
  messagingSenderId: "1068077698680",
  appId: "1:1068077698680:web:230d1871a985adee87e78d",
  measurementId: "G-D6YGKG1S6J",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
