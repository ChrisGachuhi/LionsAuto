// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA0noswF641qnPbzfVEM7mYmCKXHa9Bs6w',
  authDomain: 'lionsauto-51c92.firebaseapp.com',
  projectId: 'lionsauto-51c92',
  storageBucket: 'lionsauto-51c92.appspot.com',
  messagingSenderId: '392719940205',
  appId: '1:392719940205:web:a0af1637679bd45d1a1d64',
  measurementId: 'G-41C716S5GY',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
