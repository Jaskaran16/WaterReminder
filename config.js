import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDjDISznHSI6o4yMXZ8whAJ_2sWfkdwrws",
    authDomain: "water-reminder-app-f2d0d.firebaseapp.com",
    projectId: "water-reminder-app-f2d0d",
    storageBucket: "water-reminder-app-f2d0d.appspot.com",
    messagingSenderId: "779252758098",
    appId: "1:779252758098:web:e5c6754dd2591d438e518b"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()