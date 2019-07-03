import firebase from 'firebase'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC5A-MMmaLgdc9vR6PUdz5VJg2oEw0aDNk",
    authDomain: "tien-reactjs.firebaseapp.com",
    databaseURL: "https://tien-reactjs.firebaseio.com",
    projectId: "tien-reactjs",
    storageBucket: "",
    messagingSenderId: "974240387701",
    appId: "1:974240387701:web:62855a9207158ddc"
  };
  
  
// export default function InitFirebase(){
//   // Initialize Firebase
//     firebase.initializeApp(firebaseConfig);
// }
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

