import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBce67cQJ1kkuqMx-5eO2xJZKRMT249iqc",
  authDomain: "storeapp-1876b.firebaseapp.com",
  projectId: "storeapp-1876b",
  storageBucket: "storeapp-1876b.appspot.com",
  messagingSenderId: "43092682109",
  appId: "1:43092682109:web:9d4e348b2845e2b5a9d814",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
