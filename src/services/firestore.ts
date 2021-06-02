import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBs3T6OjMbH0eCbf4Gyfz4Ua7YFX29f0WA",
  authDomain: "todolist-16cac.firebaseapp.com",
  projectId: "todolist-16cac",
  storageBucket: "todolist-16cac.appspot.com",
  messagingSenderId: "563978105922",
  appId: "1:563978105922:web:101608e481912b767e29db",
}

const fb = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

export const db = fb.firestore()
