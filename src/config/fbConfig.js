
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAXWfa9duR83294tTPbAwbbvcCpicuG0FE",
    authDomain: "i-posts.firebaseapp.com",
    databaseURL: "https://i-posts.firebaseio.com",
    projectId: "i-posts",
    storageBucket: "i-posts.appspot.com",
    messagingSenderId: "812517366499",
    appId: "1:812517366499:web:2e5d4873f36029071943d6",
    measurementId: "G-YTF5TF5GY7"
  };
  firebase.initializeApp(firebaseConfig)
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase