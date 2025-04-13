
const firebaseConfig = {
  apiKey: "AIzaSyC-fpRdn3gLh0mhiZFp3_561DA60YSeUTM",
  authDomain: "analysedata-24eff.firebaseapp.com",
  projectId: "analysedata-24eff",
  storageBucket: "analysedata-24eff.firebasestorage.app",
  messagingSenderId: "831881661909",
  appId: "1:831881661909:web:5779e41dfaad03b9c1015c",
  measurementId: "G-KJ9Y12SR93"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

console.log("Firebase Initialized");