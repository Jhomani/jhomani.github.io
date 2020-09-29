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

const form = document.getElementById('contact-form');
const alert = document.getElementById('alert');

form.addEventListener('submit', hanldleForm)

function hanldleForm (ev) {
  ev.preventDefault();

  document.getElementById('btn-submit').innerHTML ="Enviando..."

  db.collection("Contacts").add({
    name: ev.target[0].value,
    email: ev.target[1].value,
    package: ev.target[2].value,
    message: ev.target[3].value,
  })
  .then(function(docRef) {
    alert.style="display: table"
    setTimeout(() => alert.style = "display: none", 5000);
    ev.target[0].value = '';
    ev.target[1].value = '';
    ev.target[2].value = '';
    ev.target[3].value = '';

    document.getElementById('btn-submit').innerHTML ="Enviar Ahora"
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
}
