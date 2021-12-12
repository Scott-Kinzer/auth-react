import { initializeApp } from 'firebase/app';
import { getAuth} from "firebase/auth";


let firebaseConfig = {
    apiKey: "AIzaSyDGQpEHK8Hd8NdsCCO9ubzQ1Af_64vhRKE",
    authDomain: "auth-test-44acd.firebaseapp.com",
    projectId: "auth-test-44acd",
    storageBucket: "auth-test-44acd.appspot.com",
    messagingSenderId: "428689315877",
    appId: "1:428689315877:web:4bed17f4c5e0f9cc0b47cc"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
