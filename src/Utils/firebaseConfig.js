// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFC4yJL7ud96QSk1kgt4XJrV2VO5qE9tc", // Your Web API Key
  authDomain: "news-app-e77cc.firebaseapp.com", // Derived from your project ID
  projectId: "news-app-e77cc", // Your Project ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
