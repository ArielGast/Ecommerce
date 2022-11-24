import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4exiB7eMf8396d7sIiBl5u3V97HXBnNE",
  authDomain: "ecommerce-arg.firebaseapp.com",
  projectId: "ecommerce-arg",
  storageBucket: "ecommerce-arg.appspot.com",
  messagingSenderId: "227501061312",
  appId: "1:227501061312:web:0f45926e2f2da004c9a925"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log('app' , app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
