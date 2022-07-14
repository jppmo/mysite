import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCd0iR3UAH2rz-Pg2AvIyfZRnBYVCDWmM8',
  authDomain: 'myportfolio-a115d.firebaseapp.com',
  projectId: 'myportfolio-a115d',
  storageBucket: 'myportfolio-a115d.appspot.com',
  messagingSenderId: '624411081928',
  appId: '1:624411081928:web:e309a0d4b76493628879fd',
}

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
