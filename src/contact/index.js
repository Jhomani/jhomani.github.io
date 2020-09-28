var firebaseConfig = {
  apiKey: "AIzaSyDrd0uGzlHtuPvF1sSiEkcHx6JqRY7QYaU",
  authDomain: "portfolio-490c0.firebaseapp.com",
  databaseURL: "https://portfolio-490c0.firebaseio.com",
  projectId: "portfolio-490c0",
  storageBucket: "portfolio-490c0.appspot.com",
  messagingSenderId: "460883956859",
  appId: "1:460883956859:web:824d1ef3b68db153f6bede",
  measurementId: "G-YJ071RF80E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();


db.collection("users").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});