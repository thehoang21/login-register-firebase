import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfOO55ssi3pJwPCPEPxMf-2eOMuKOCDDE",
  authDomain: "login-register-app-cd749.firebaseapp.com",
  projectId: "login-register-app-cd749",
  storageBucket: "login-register-app-cd749.appspot.com",
  messagingSenderId: "894505577446",
  appId: "1:894505577446:web:1500f3b3d57cfc303c4427"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);