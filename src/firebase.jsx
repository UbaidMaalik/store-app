import firebase from "firebase";
import "firebase/auth";
// import { initializeApp } from "firebase/auth";

const app = initializeApp({
  apiKey: process.env.REAT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REAT_APP_FIREBASE_AUTH_DOAMIN,
  projectId: process.env.REAT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REAT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REAT_APP_FIREBASE_MESSIGING_SENDER_ID,
  appId: process.env.REAT_APP_FIREBASE_APP_ID,
});

export const auth = app.auth();
export default app;
