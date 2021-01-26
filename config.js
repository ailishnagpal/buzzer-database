import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyAuquiA49f5vMZc4F5pQgLVVz5lcEKzASo",
    authDomain: "buzzer-5f53e.firebaseapp.com",
    databaseURL: "https://buzzer-5f53e-default-rtdb.firebaseio.com",
    projectId: "buzzer-5f53e",
    storageBucket: "buzzer-5f53e.appspot.com",
    messagingSenderId: "254638448732",
    appId: "1:254638448732:web:c8e139185ace5ae52f8699"
  };

  let app= firebase.initializeApp(firebaseConfig);

export default app.database();