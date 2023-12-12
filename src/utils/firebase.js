// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: 'blogify-e745d.firebaseapp.com',
  projectId: 'blogify-e745d',
  storageBucket: 'blogify-e745d.appspot.com',
  messagingSenderId: '742148027540',
  appId: '1:742148027540:web:f5980347236f46bccd7081',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
