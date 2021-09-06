import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDzMXNhHQCQ4-iDL8JGCzndH_5vcL0I5T0",
    authDomain: "mycoolproject-56b2c.firebaseapp.com",
    databaseURL: "https://mycoolproject-56b2c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mycoolproject-56b2c",
    storageBucket: "mycoolproject-56b2c.appspot.com",
    messagingSenderId: "1045858544717",
    appId: "1:1045858544717:web:6b0bd06eb7c300bc308004",
    measurementId: "G-MGHXKHHJ8J"
}
const apps = getApps()
   const firebaseApp = !apps.length ? initializeApp(firebaseConfig) : apps[0]

const db = getFirestore(firebaseApp, {})
export { db }