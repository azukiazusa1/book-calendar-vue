import { AuthRepositoryInterface } from './types'
import firebase from '@/plugins/firebase'
import 'firebase/auth'

export class AuthRepository implements AuthRepositoryInterface {
  signInWithGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithRedirect(provider)
  }

  auth () {
    return new Promise(resolve => {
      firebase.auth().onAuthStateChanged(user => {
        resolve(user || false)
      })
    })
  }
}
