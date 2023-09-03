
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";

const config = {
  apiKey: "AIzaSyC7S4AuvP4BmV61ZJF77A7kpluKiLzj8b8",
  authDomain: "momos-teahouse.firebaseapp.com",
  projectId: "momos-teahouse",
  storageBucket: "momos-teahouse.appspot.com",
  messagingSenderId: "35402465301",
  appId: "1:35402465301:web:1a39432e3d0e24c4934e1c"
};

const app = initializeApp(config);
export const Auth = getAuth(app);

export const db = getFirestore(app);

export default app;