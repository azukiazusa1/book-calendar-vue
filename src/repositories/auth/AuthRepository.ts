import { AuthRepositoryInterface } from './types'
import firebase from '@/plugins/firebase'
import f from 'firebase'
import 'firebase/auth'

export class AuthRepository implements AuthRepositoryInterface {
  async signInWithGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider()
    const { user } = await firebase.auth().signInWithPopup(provider)
    return user
  }

  logout () {
    return firebase.auth().signOut()
  }

  auth () {
    return new Promise<f.User | null>(resolve => {
      firebase.auth().onAuthStateChanged(user => {
        resolve(user)
      })
    })
  }
}
