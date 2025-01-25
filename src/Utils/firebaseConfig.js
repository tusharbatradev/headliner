// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FIREBASE_KEY } from "./constants";

// Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_KEY, 
  authDomain: "news-app-e77cc.firebaseapp.com", 
  projectId: "news-app-e77cc", 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
