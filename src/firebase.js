// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC8OxXMF5O5hV2TsHB1d_0b3hAz52bVYdw",
    authDomain: "whatsapp-902bf.firebaseapp.com",
    databaseURL: "https://whatsapp-902bf.firebaseio.com",
    projectId: "whatsapp-902bf",
    storageBucket: "whatsapp-902bf.appspot.com",
    messagingSenderId: "506061264874",
    appId: "1:506061264874:web:fa4616355c3f3f6c158493",
    measurementId: "G-3W5KV8WZSC"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;