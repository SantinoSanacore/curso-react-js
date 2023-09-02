import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4zgrolRR2mYxV7owewLJJNxir6r9vP2Y",
  authDomain: "ss-camisetas-449a6.firebaseapp.com",
  projectId: "ss-camisetas-449a6",
  storageBucket: "ss-camisetas-449a6.appspot.com",
  messagingSenderId: "840914578663",
  appId: "1:840914578663:web:8aae740a21d79de924c642"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App/>
  </ChakraProvider>
)
